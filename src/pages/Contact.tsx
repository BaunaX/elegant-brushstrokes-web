import Layout from "@/components/Layout";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";
import { MessageCircle, Mail, MapPin } from "lucide-react";

const Contact = () => {
  const whatsappUrl = `https://wa.me/351912000000?text=${encodeURIComponent("Hello Aria, I'd love to discuss a project with you.")}`;

  return (
    <Layout>
      <section className="pt-40 pb-20">
        <div className="container-editorial">
          <Reveal>
            <p className="eyebrow mb-6">Contact</p>
            <h1 className="text-5xl md:text-7xl leading-[1.02] max-w-3xl">
              Let's begin a <span className="italic">conversation.</span>
            </h1>
            <p className="mt-8 max-w-xl text-muted-foreground leading-relaxed">
              Tell me about the space, the feeling, the dream. I reply to every message personally, usually within two
              working days.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="pb-32">
        <div className="container-editorial grid md:grid-cols-2 gap-16 lg:gap-24">
          <Reveal>
            <ContactForm />
          </Reveal>

          <Reveal delay={120} className="space-y-10">
            <div>
              <p className="eyebrow mb-4">Direct</p>
              <ul className="space-y-5">
                <li className="flex items-start gap-4">
                  <Mail size={18} className="mt-1 text-accent" />
                  <div>
                    <p className="font-serif text-lg">hello@arialune.studio</p>
                    <p className="text-xs text-muted-foreground mt-1">For projects & commissions</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <MapPin size={18} className="mt-1 text-accent" />
                  <div>
                    <p className="font-serif text-lg">Rua das Flores 22, Lisbon</p>
                    <p className="text-xs text-muted-foreground mt-1">Studio visits by appointment</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-secondary/60 p-8 md:p-10">
              <p className="eyebrow mb-3">Prefer something quicker?</p>
              <h3 className="font-serif text-3xl mb-4">Message on WhatsApp</h3>
              <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                For short questions or to share a quick photo of your space, WhatsApp is the easiest way to reach the studio.
              </p>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 border border-foreground px-8 py-4 text-xs uppercase tracking-[0.3em] hover:bg-foreground hover:text-background transition-all duration-500"
              >
                <MessageCircle size={16} />
                Open WhatsApp
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
