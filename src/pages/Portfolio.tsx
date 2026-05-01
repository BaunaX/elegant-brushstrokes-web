import Layout from "@/components/Layout";
import Reveal from "@/components/Reveal";
import interior1 from "@/assets/interior1.jpg";
import interior2 from "@/assets/interior2.jpg";
import interior3 from "@/assets/interior3.jpg";
import interior4 from "@/assets/interior4.jpg";
import hero from "@/assets/hero.jpg";

const projects = [
  { src: hero, title: "Casa do Sol", year: "2025", place: "Sintra, PT", note: "A family home reimagined around afternoon light and slow rituals.", span: "md:col-span-12 aspect-[16/9]" },
  { src: interior1, title: "Casa Lume", year: "2025", place: "Lisbon, PT", note: "Living room composed in travertine, boucle, and quiet color.", span: "md:col-span-7 aspect-[4/3]" },
  { src: interior2, title: "Quiet Quarters", year: "2024", place: "Lisbon, PT", note: "A bedroom pared back to plaster, oak, and one perfect light.", span: "md:col-span-5 aspect-[4/5]" },
  { src: interior3, title: "Mesa Lenta", year: "2024", place: "Comporta, PT", note: "Dining as ceremony — wabi-sabi forms in honest materials.", span: "md:col-span-5 aspect-[4/5]" },
  { src: interior4, title: "Pão & Sal", year: "2024", place: "Porto, PT", note: "A kitchen built for long mornings, marble and warm wood.", span: "md:col-span-7 aspect-[4/3]" },
];

const Portfolio = () => (
  <Layout>
    <section className="pt-40 pb-20">
      <div className="container-editorial">
        <Reveal>
          <p className="eyebrow mb-6">Portfolio</p>
          <h1 className="text-5xl md:text-7xl leading-[1.02] max-w-4xl">
            Interiors composed with <span className="italic">restraint</span> and feeling.
          </h1>
        </Reveal>
      </div>
    </section>

    <section className="pb-32">
      <div className="container-editorial">
        <div className="grid md:grid-cols-12 gap-6 md:gap-10">
          {projects.map((p, i) => (
            <Reveal key={p.title} delay={i * 100} className={p.span}>
              <figure className="group">
                <div className="img-zoom h-full bg-muted">
                  <img src={p.src} alt={p.title} loading="lazy" className="w-full h-full object-cover" />
                </div>
                <figcaption className="pt-5 flex items-end justify-between gap-6">
                  <div>
                    <h3 className="font-serif text-2xl md:text-3xl">{p.title}</h3>
                    <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground mt-2">{p.place} — {p.year}</p>
                  </div>
                  <p className="hidden md:block text-sm text-muted-foreground max-w-xs italic font-serif text-right">{p.note}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default Portfolio;
