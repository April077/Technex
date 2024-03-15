import Link from "next/link";
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <Link href="/" className="navbar-brand">
          Your Logo
        </Link>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link href="/dashboard" className="nav-link">
              Dashboard
            </Link>
          </li>
          {/* Add more navigation links as needed */}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
