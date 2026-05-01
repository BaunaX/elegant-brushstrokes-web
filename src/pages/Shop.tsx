import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import Reveal from "@/components/Reveal";
import { products } from "@/lib/products";

const Shop = () => (
  <Layout>
    <section className="pt-40 pb-16">
      <div className="container-editorial">
        <Reveal>
          <p className="eyebrow mb-6">The Shop</p>
          <h1 className="text-5xl md:text-7xl leading-[1.02] max-w-3xl">
            Original works, <span className="italic">quietly made.</span>
          </h1>
          <p className="mt-8 max-w-xl text-muted-foreground leading-relaxed">
            A rotating collection of paintings and small objects from the studio. Each piece is one of a kind, signed,
            and shipped from Lisbon.
          </p>
        </Reveal>
      </div>
    </section>

    <section className="pb-32">
      <div className="container-editorial">
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 md:gap-12">
          {products.map((p, i) => (
            <Reveal key={p.slug} delay={i * 60}>
              <Link to={`/shop/${p.slug}`} className="block group">
                <div className="img-zoom aspect-[4/5] bg-muted">
                  <img src={p.image} alt={p.title} width={1024} height={1280} loading="lazy" className="w-full h-full object-cover" />
                </div>
                <div className="pt-4 flex items-baseline justify-between">
                  <div>
                    <h3 className="font-serif text-xl">{p.title}</h3>
                    <p className="text-xs text-muted-foreground mt-1 uppercase tracking-[0.2em]">{p.series}</p>
                  </div>
                  <p className="font-serif text-lg">€{p.price}</p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default Shop;
