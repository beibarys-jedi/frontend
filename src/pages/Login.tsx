import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";

interface LoginProps {
  setIsAuthenticated: (authenticated: boolean) => void;
}

function Login({ setIsAuthenticated }: LoginProps) {
  const [webSocket, setWebSocket] = useState<WebSocket | null>(null);
  const [isConnecting, setIsConnecting] = useState(false);
  const navigate = useNavigate();

  const webSocketUrl = "wss://127.0.0.1:13579/";

  useEffect(() => {
    // Cleanup WebSocket on unmount
    return () => {
      if (webSocket) {
        webSocket.close();
      }
    };
  }, [webSocket]);

  const handleWebSocketConnectionOpened = (socket: WebSocket) => {
    if (webSocket) webSocket.close();

    socket.send(
      JSON.stringify({
        module: "kz.gov.pki.knca.commonUtils",
        method: "signXml",
        args: ["PKCS12", "AUTH", "<root></root>", "", ""],
      })
    );
    setWebSocket(socket);

    socket.onmessage = (event) => {
      try {
        const data = JSON.parse(event.data);
        if (data.success) {
          setIsAuthenticated(true);
          navigate("/protected"); // Redirect after successful signing
        } else {
          alert("Signing failed. Please try again.");
        }
      } catch (error) {
        alert("Failed to parse response from WebSocket.");
      } finally {
        setIsConnecting(false);
      }
    };

    socket.onerror = () => {
      alert("WebSocket error occurred.");
      setIsConnecting(false);
    };

    socket.onclose = () => {
      setWebSocket(null);
      setIsConnecting(false);
    };
  };

  const initiateWebSocketConnection = () => {
    setIsConnecting(true);
    const socket = new WebSocket(webSocketUrl);
    socket.onopen = () => handleWebSocketConnectionOpened(socket);
    socket.onerror = () => {
      alert("Unable to connect to WebSocket.");
      setIsConnecting(false);
    };
  };

  return (
    <div>
      <Header />
      <h1>Login</h1>
      <p>Порталға кіру</p>
      <span>ЭЦҚ</span>
      <div>
        <button onClick={initiateWebSocketConnection} disabled={isConnecting}>
          {isConnecting ? "Connecting..." : "Сертификат таңдаңыз"}
        </button>
      </div>
      <Footer />
    </div>
  );
}

export default Login;
