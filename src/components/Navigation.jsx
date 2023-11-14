import Link from "next/link";

export default function Navigation() {
    return (
    <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
            <Link className="navbar-brand" href="/">Navbar</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" href="/">Home</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" href="/about">About</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" href="/projects">Projects</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" href="/contact">Contact</Link>
                </li>
            </ul>
            </div>
        </div>
    </nav>

    )
  }
  