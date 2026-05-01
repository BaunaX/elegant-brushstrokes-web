import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import Reveal from "@/components/Reveal";
import { products } from "@/lib/products";
import hero from "@/assets/hero.jpg";
import about from "@/assets/about.jpg";
import interior1 from "@/assets/interior1.jpg";
import interior2 from "@/assets/interior2.jpg";
import interior3 from "@/assets/interior3.jpg";
import interior4 from "@/assets/interior4.jpg";
import { ArrowRight } from "lucide-react";

const testimonials = [
  { quote: "Aria transformed our home into a place that finally feels like us — calm, considered, and quietly beautiful.", name: "Helena & Marc", role: "Private residence, Sintra" },
  { quote: "There is a softness to her work that you can feel the moment you walk in. It is design as a form of care.", name: "Atelier Verde", role: "Boutique hotel, Porto" },
  { quote: "The painting we commissioned has become the heart of the room. Light, weather, mood — it holds them all.", name: "Sofia Reis", role: "Collector, Lisbon" },
];

const Index = () => {
  const featured = products.slice(0, 6);
  const interiors = [
    { src: interior1, title: "Casa Lume", meta: "Living room — Sintra" },
    { src: interior2, title: "Quiet Quarters", meta: "Bedroom — Lisbon" },
    { src: interior3, title: "Mesa Lenta", meta: "Dining — Comporta" },
    { src: interior4, title: "Pão & Sal", meta: "Kitchen — Porto" },
  ];

  return (
    <Layout>
      {/* Hero */}
      <section className="relative h-screen min-h-[640px] w-full overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={hero}
            alt="Sunlit minimalist interior with linen curtains and warm wood floors"
            width={1920}
            height={1280}
            className="h-full w-full object-cover animate-ken-burns"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-foreground/40 via-foreground/15 to-foreground/55" />
        </div>

        <div className="relative z-10 h-full container-editorial flex flex-col justify-end pb-24 md:pb-32 text-cream">
          <p className="eyebrow text-cream/80 mb-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Aria Lune — Studio of Interior Design & Art
          </p>
          <h1 className="font-serif font-light text-[2.75rem] sm:text-6xl md:text-7xl lg:text-[5.5rem] leading-[1.02] max-w-4xl animate-fade-up" style={{ animationDelay: "0.35s" }}>
            Designing spaces.<br />
            <span className="italic">Creating emotions.</span>
          </h1>
          <div className="mt-10 flex items-center gap-6 animate-fade-up" style={{ animationDelay: "0.6s" }}>
            <Link
              to="/portfolio"
              className="group inline-flex items-center gap-3 border border-cream/70 px-8 py-4 text-xs uppercase tracking-[0.3em] hover:bg-cream hover:text-foreground transition-all duration-500"
            >
              Explore My Work
              <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-cream/70 text-[10px] uppercase tracking-[0.4em] animate-fade-in" style={{ animationDelay: "1s" }}>
          Scroll
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-28 md:py-40">
        <div className="container-editorial grid md:grid-cols-12 gap-12 lg:gap-20 items-center">
          <Reveal className="md:col-span-5">
            <div className="img-zoom shadow-soft">
              <img src={about} alt="Portrait of Aria Lune in her sunlit studio" width={1024} height={1280} loading="lazy" className="w-full h-auto" />
            </div>
          </Reveal>
          <Reveal delay={150} className="md:col-span-7 md:pl-8">
            <p className="eyebrow mb-6">About the Studio</p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl leading-[1.05] mb-8">
              Spaces shaped by <span className="italic">light</span>, material, and quiet.
            </h2>
            <div className="space-y-5 text-[0.95rem] leading-[1.85] text-muted-foreground max-w-xl">
              <p>
                I am Aria — an interior designer and painter working between Lisbon and the Alentejo coast. My practice
                is built on a single belief: that the rooms we live in should feel as considered as the lives we live in them.
              </p>
              <p>
                Each project begins with listening — to the building, to the light, to the people who will inhabit it. From
                there I work in soft palettes, honest materials, and original art, composing spaces that are at once modern
                and deeply quiet.
              </p>
            </div>
            <Link to="/about" className="inline-block mt-10 text-xs uppercase tracking-[0.3em] link-underline">
              Read the full story
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Featured artworks */}
      <section className="py-24 md:py-32 bg-linen/40">
        <div className="container-editorial">
          <Reveal>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-6">
              <div>
                <p className="eyebrow mb-4">Featured Works</p>
                <h2 className="text-4xl md:text-5xl lg:text-6xl max-w-2xl leading-[1.05]">
                  Original paintings, <span className="italic">made by hand.</span>
                </h2>
              </div>
              <Link to="/shop" className="text-xs uppercase tracking-[0.3em] link-underline self-start md:self-auto">
                View the shop →
              </Link>
            </div>
          </Reveal>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
            {featured.map((p, i) => (
              <Reveal key={p.slug} delay={i * 80}>
                <Link to={`/shop/${p.slug}`} className="block group">
                  <div className="img-zoom bg-muted aspect-[4/5]">
                    <img src={p.image} alt={p.title} width={1024} height={1280} loading="lazy" className="w-full h-full object-cover" />
                  </div>
                  <div className="pt-4 flex items-baseline justify-between">
                    <div>
                      <h3 className="font-serif text-xl">{p.title}</h3>
                      <p className="text-xs text-muted-foreground mt-1">{p.series}</p>
                    </div>
                    <p className="font-serif text-lg">€{p.price}</p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Interior showcase */}
      <section className="py-28 md:py-40">
        <div className="container-editorial">
          <Reveal>
            <div className="max-w-2xl mb-16">
              <p className="eyebrow mb-4">Interior Design</p>
              <h2 className="text-4xl md:text-5xl lg:text-6xl leading-[1.05]">
                Recent <span className="italic">interiors.</span>
              </h2>
              <p className="mt-6 text-muted-foreground leading-relaxed">
                A small selection of homes and spaces shaped by the studio over the past year.
              </p>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-6 md:gap-10">
            {interiors.map((item, i) => (
              <Reveal key={item.title} delay={i * 100}>
                <Link to="/portfolio" className="block group">
                  <div className="img-zoom aspect-[5/4] bg-muted">
                    <img src={item.src} alt={item.title} width={1280} height={1024} loading="lazy" className="w-full h-full object-cover" />
                  </div>
                  <div className="pt-5 flex items-end justify-between">
                    <div>
                      <h3 className="font-serif text-2xl">{item.title}</h3>
                      <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mt-2">{item.meta}</p>
                    </div>
                    <ArrowRight size={18} className="opacity-50 transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-1" />
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-28 md:py-36 bg-secondary/40">
        <div className="container-editorial">
          <Reveal>
            <p className="eyebrow text-center mb-12">Kind Words</p>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-10 md:gap-14">
            {testimonials.map((t, i) => (
              <Reveal key={t.name} delay={i * 120}>
                <figure className="text-center md:text-left">
                  <p className="font-serif text-2xl md:text-[1.65rem] italic leading-[1.45] text-foreground/85">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <figcaption className="mt-8">
                    <p className="text-sm">{t.name}</p>
                    <p className="text-xs text-muted-foreground mt-1 uppercase tracking-[0.2em]">{t.role}</p>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <ContactSection />
    </Layout>
  );
};

import ContactForm from "@/components/ContactForm";

const ContactSection = () => (
  <section id="contact" className="py-28 md:py-36">
    <div className="container-editorial grid md:grid-cols-2 gap-16 lg:gap-24">
      <Reveal>
        <p className="eyebrow mb-4">Get in touch</p>
        <h2 className="text-4xl md:text-5xl lg:text-6xl leading-[1.05]">
          Begin a <span className="italic">conversation.</span>
        </h2>
        <p className="mt-6 text-muted-foreground leading-relaxed max-w-md">
          For commissions, residential projects, or commercial spaces — I would love to hear from you. Tell me a little
          about your home and the feeling you wish to create.
        </p>
        <div className="mt-12 space-y-3 text-sm">
          <p className="text-muted-foreground"><span className="text-foreground">Email — </span>hello@arialune.studio</p>
          <p className="text-muted-foreground"><span className="text-foreground">Studio — </span>Rua das Flores 22, Lisbon</p>
        </div>
      </Reveal>
      <Reveal delay={120}>
        <ContactForm />
      </Reveal>
    </div>
  </section>
);

export default Index;
