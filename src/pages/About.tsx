import Layout from "@/components/Layout";
import Reveal from "@/components/Reveal";
import about from "@/assets/about.jpg";

const About = () => (
  <Layout>
    <section className="pt-40 pb-24">
      <div className="container-editorial grid md:grid-cols-12 gap-12 lg:gap-20 items-start">
        <Reveal className="md:col-span-7">
          <p className="eyebrow mb-6">About</p>
          <h1 className="text-5xl md:text-7xl leading-[1.02]">
            A studio of <span className="italic">design</span> & <span className="italic">art.</span>
          </h1>
          <div className="mt-12 space-y-6 text-[0.98rem] leading-[1.9] text-muted-foreground max-w-xl">
            <p>
              Aria Lune is the studio practice of Aria, an interior designer and painter based between Lisbon and the
              Alentejo coast. Trained as an architect and self-taught as a painter, she works at the threshold between
              the two — designing rooms that feel like compositions, and paintings that feel like rooms.
            </p>
            <p>
              The studio takes on a small number of residential and hospitality projects each year, alongside private
              art commissions. Every project is led by Aria personally, from first sketch to final styling.
            </p>
            <p>
              Material honesty, soft light, and the slow accumulation of meaningful objects are at the heart of
              everything we make.
            </p>
          </div>
        </Reveal>
        <Reveal delay={150} className="md:col-span-5">
          <div className="img-zoom shadow-soft">
            <img src={about} alt="Aria in her studio" width={1024} height={1280} loading="lazy" className="w-full h-auto" />
          </div>
        </Reveal>
      </div>
    </section>

    <section className="py-24 bg-secondary/40">
      <div className="container-editorial grid md:grid-cols-3 gap-10 md:gap-16">
        {[
          { k: "Practice", v: "Founded in 2019, Lisbon." },
          { k: "Approach", v: "Slow, material-led, deeply collaborative." },
          { k: "Recognition", v: "Featured in Cereal, Kinfolk, Openhouse." },
        ].map((b) => (
          <Reveal key={b.k}>
            <p className="eyebrow mb-3">{b.k}</p>
            <p className="font-serif text-2xl leading-snug">{b.v}</p>
          </Reveal>
        ))}
      </div>
    </section>
  </Layout>
);

export default About;
