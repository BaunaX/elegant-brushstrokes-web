import { useState } from "react";
import { z } from "zod";
import { toast } from "sonner";

const WHATSAPP_NUMBER = "919874255631";

const schema = z.object({
  name: z.string().trim().min(1, "Please enter your name").max(100),
  phone: z
    .string()
    .trim()
    .min(6, "Please enter a valid phone number")
    .max(20)
    .regex(/^[0-9+\-\s()]+$/, "Only digits and + - ( ) allowed"),
  message: z.string().trim().min(5, "A few more words please").max(2000),
});

const ContactForm = () => {
  const [form, setForm] = useState({ name: "", phone: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = schema.safeParse(form);
    if (!parsed.success) {
      const fe: Record<string, string> = {};
      parsed.error.issues.forEach((i) => (fe[i.path[0] as string] = i.message));
      setErrors(fe);
      return;
    }
    setErrors({});
    setLoading(true);

    const text =
      `Hello Aria,\n\n` +
      `My name is ${parsed.data.name}.\n` +
      `Phone: ${parsed.data.phone}\n\n` +
      `${parsed.data.message}`;

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank", "noopener,noreferrer");

    setTimeout(() => {
      setLoading(false);
      setForm({ name: "", phone: "", message: "" });
      toast.success("Opening WhatsApp — finish sending your message there.");
    }, 400);
  };

  const field =
    "w-full bg-transparent border-b border-border focus:border-foreground outline-none py-3 text-sm placeholder:text-muted-foreground/70 transition-colors";

  return (
    <form onSubmit={onSubmit} className="space-y-8" noValidate>
      <div>
        <label className="eyebrow block mb-2">Name</label>
        <input
          className={field}
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          placeholder="Your full name"
          maxLength={100}
        />
        {errors.name && <p className="text-xs text-destructive mt-2">{errors.name}</p>}
      </div>
      <div>
        <label className="eyebrow block mb-2">Phone</label>
        <input
          type="tel"
          className={field}
          value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
          placeholder="+91 98765 43210"
          maxLength={20}
        />
        {errors.phone && <p className="text-xs text-destructive mt-2">{errors.phone}</p>}
      </div>
      <div>
        <label className="eyebrow block mb-2">Message</label>
        <textarea
          rows={5}
          className={`${field} resize-none`}
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          placeholder="Tell me about your project…"
          maxLength={2000}
        />
        {errors.message && <p className="text-xs text-destructive mt-2">{errors.message}</p>}
      </div>
      <button
        type="submit"
        disabled={loading}
        className="group inline-flex items-center gap-3 border border-foreground px-8 py-4 text-xs uppercase tracking-[0.3em] hover:bg-foreground hover:text-background transition-all duration-500 disabled:opacity-60"
      >
        {loading ? "Opening WhatsApp…" : "Send Message"}
      </button>
    </form>
  );
};

export default ContactForm;
