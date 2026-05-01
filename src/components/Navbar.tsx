import { Link, NavLink, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { to: "/", label: "Home" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/shop", label: "Shop" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const transparent = pathname === "/" && !scrolled;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-700 ${
        transparent ? "bg-transparent text-cream" : "bg-background/85 backdrop-blur-md text-foreground border-b border-border/60"
      }`}
    >
      <nav className="container-editorial flex items-center justify-between h-20">
        <Link to="/" className="font-serif text-2xl tracking-wide">
          Aria <span className="italic font-light">Lune</span>
        </Link>

        <ul className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <li key={l.to}>
              <NavLink
                to={l.to}
                className={({ isActive }) =>
                  `text-xs uppercase tracking-[0.25em] link-underline ${isActive ? "opacity-100" : "opacity-80 hover:opacity-100"}`
                }
                end={l.to === "/"}
              >
                {l.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <button className="md:hidden p-2" aria-label="Open menu" onClick={() => setOpen((v) => !v)}>
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-background text-foreground border-t border-border animate-fade-in">
          <ul className="container-editorial py-6 flex flex-col gap-5">
            {links.map((l) => (
              <li key={l.to}>
                <NavLink to={l.to} className="text-sm uppercase tracking-[0.25em]" end={l.to === "/"}>
                  {l.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
