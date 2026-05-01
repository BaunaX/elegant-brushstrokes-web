import { Link, useParams } from "react-router-dom";
import Layout from "@/components/Layout";
import Reveal from "@/components/Reveal";
import { getProduct, products } from "@/lib/products";
import { toast } from "sonner";
import { ArrowLeft } from "lucide-react";

const ProductDetail = () => {
  const { slug = "" } = useParams();
  const product = getProduct(slug);

  if (!product) {
    return (
      <Layout>
        <section className="pt-40 pb-32 container-editorial text-center">
          <h1 className="font-serif text-4xl">Work not found</h1>
          <Link to="/shop" className="mt-6 inline-block text-xs uppercase tracking-[0.3em] link-underline">Return to shop</Link>
        </section>
      </Layout>
    );
  }

  const others = products.filter((p) => p.slug !== product.slug).slice(0, 3);

  return (
    <Layout>
      <section className="pt-32 md:pt-36 pb-20">
        <div className="container-editorial">
          <Link to="/shop" className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] mb-10 link-underline">
            <ArrowLeft size={14} /> Back to shop
          </Link>
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-start">
            <Reveal>
              <div className="bg-muted shadow-soft">
                <img src={product.image} alt={product.title} width={1024} height={1280} className="w-full h-auto" />
              </div>
            </Reveal>
            <Reveal delay={120} className="md:sticky md:top-32">
              <p className="eyebrow mb-4">{product.series}</p>
              <h1 className="font-serif text-5xl md:text-6xl leading-[1.05]">{product.title}</h1>
              <p className="font-serif text-3xl mt-6">€{product.price}</p>

              <p className="mt-10 leading-[1.85] text-muted-foreground max-w-md">{product.description}</p>

              <dl className="mt-10 grid grid-cols-2 gap-y-4 text-sm border-t border-border pt-8">
                <dt className="eyebrow">Medium</dt><dd>{product.medium}</dd>
                <dt className="eyebrow">Dimensions</dt><dd>{product.dimensions}</dd>
                <dt className="eyebrow">Edition</dt><dd>One of a kind</dd>
                <dt className="eyebrow">Shipping</dt><dd>Worldwide, insured</dd>
              </dl>

              <button
                onClick={() => toast.success(`${product.title} added — checkout coming soon.`)}
                className="mt-10 w-full md:w-auto inline-flex items-center justify-center gap-3 bg-foreground text-background px-12 py-5 text-xs uppercase tracking-[0.3em] hover:bg-accent transition-colors duration-500"
              >
                Acquire this work
              </button>
              <p className="mt-4 text-xs text-muted-foreground">Or <Link to="/contact" className="link-underline">enquire about a commission</Link>.</p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="py-24 border-t border-border">
        <div className="container-editorial">
          <p className="eyebrow mb-10">You may also love</p>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
            {others.map((p) => (
              <Link key={p.slug} to={`/shop/${p.slug}`} className="block group">
                <div className="img-zoom aspect-[4/5] bg-muted">
                  <img src={p.image} alt={p.title} width={1024} height={1280} loading="lazy" className="w-full h-full object-cover" />
                </div>
                <div className="pt-4 flex items-baseline justify-between">
                  <h3 className="font-serif text-xl">{p.title}</h3>
                  <p className="font-serif">€{p.price}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ProductDetail;
