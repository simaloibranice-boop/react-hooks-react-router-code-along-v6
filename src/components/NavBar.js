import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav style={{ marginBottom: "20px" }}>
      <Link to="/">Home</Link> |{" "}
      <Link to="/about">About</Link> |{" "}
      <Link to="/login">Login</Link>
    </nav>
  );
}

export default NavBar;
