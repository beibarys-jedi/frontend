import egov from "../assets/egov.svg";

export default function Header() {
  return (
    <>
      <h4>Egov сайтына қош келдіңіз!</h4>
      <a href="https://vite.dev" target="_blank">
        <img
          src={egov}
          className="logo"
          alt="egov logo"
          width="200"
          height="90"
        />
      </a>
    </>
  );
}
