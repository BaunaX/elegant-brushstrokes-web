import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="border-t border-border/60 mt-32">
    <div className="container-editorial py-16 grid gap-12 md:grid-cols-4">
      <div className="md:col-span-2">
        <Link to="/" className="font-serif text-3xl">Aria <span className="italic">Lune</span></Link>
        <p className="mt-4 text-sm text-muted-foreground max-w-sm leading-relaxed">
          Designing spaces. Creating emotions. A studio practice in interior design and original art, based in Lisbon.
        </p>
      </div>
      <div>
        <p className="eyebrow mb-4">Studio</p>
        <ul className="space-y-2 text-sm">
          <li><Link to="/portfolio" className="link-underline">Portfolio</Link></li>
          <li><Link to="/shop" className="link-underline">Shop</Link></li>
          <li><Link to="/about" className="link-underline">About</Link></li>
        </ul>
      </div>
      <div>
        <p className="eyebrow mb-4">Contact</p>
        <ul className="space-y-2 text-sm text-muted-foreground">
          <li>hello@arialune.studio</li>
          <li>+351 912 000 000</li>
          <li>Lisbon, Portugal</li>
        </ul>
      </div>
    </div>
    <div className="border-t border-border/60">
      <div className="container-editorial py-6 flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-muted-foreground">
        <p>© {new Date().getFullYear()} Aria Lune Studio. All rights reserved.</p>
        <p className="italic font-serif">Made with quiet intention.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
