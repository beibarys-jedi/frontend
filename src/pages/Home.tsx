import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <nav
        style={{ display: "flex", justifyContent: "flex-end", padding: "10px" }}
      >
        <Link
          to="/login"
          style={{ marginRight: "15px", textDecoration: "none", color: "blue" }}
        >
          Login
        </Link>
        <Link to="/register" style={{ textDecoration: "none", color: "blue" }}>
          Register
        </Link>
      </nav>
    </div>
  );
}

export default Home;
