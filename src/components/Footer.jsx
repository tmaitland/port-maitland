import Link from "next/link";

export default function Footer() {
  let date = new Date();
    return (
      <footer className="py-3 the-footer">
        <ul className="nav justify-content-center border-bottom pb-3 mb-3">
          <li className="nav-item"><Link className="nav-link px-2 text-muted" href="/">Home</Link></li>
          <li className="nav-item"><Link className="nav-link px-2 text-muted" href="/about">About</Link></li>
          <li className="nav-item"><Link className="nav-link px-2 text-muted" href="/projects">Projects</Link></li>
          <li className="nav-item"><Link className="nav-link px-2 text-muted" href="/contact">Contact</Link></li>
        </ul>
        <p className="text-center text-muted">© {date.getFullYear()} Toni-Lee M.</p>
      </footer>
    )
  }
  