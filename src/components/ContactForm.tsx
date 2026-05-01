import { useState } from "react";
import { z } from "zod";
import { toast } from "sonner";

const schema = z.object({
  name: z.string().trim().min(1, "Please enter your name").max(100),
  email: z.string().trim().email("Please enter a valid email").max(255),
  message: z.string().trim().min(5, "A few more words please").max(2000),
});

const ContactForm = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
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
    setTimeout(() => {
      setLoading(false);
      setForm({ name: "", email: "", message: "" });
      toast.success("Message sent — I'll be in touch soon.");
    }, 700);
  };

  const field = "w-full bg-transparent border-b border-border focus:border-foreground outline-none py-3 text-sm placeholder:text-muted-foreground/70 transition-colors";

  return (
    <form onSubmit={onSubmit} className="space-y-8" noValidate>
      <div>
        <label className="eyebrow block mb-2">Name</label>
        <input className={field} value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Your full name" maxLength={100} />
        {errors.name && <p className="text-xs text-destructive mt-2">{errors.name}</p>}
      </div>
      <div>
        <label className="eyebrow block mb-2">Email</label>
        <input type="email" className={field} value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="you@email.com" maxLength={255} />
        {errors.email && <p className="text-xs text-destructive mt-2">{errors.email}</p>}
      </div>
      <div>
        <label className="eyebrow block mb-2">Message</label>
        <textarea rows={5} className={`${field} resize-none`} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="Tell me about your project…" maxLength={2000} />
        {errors.message && <p className="text-xs text-destructive mt-2">{errors.message}</p>}
      </div>
      <button
        type="submit"
        disabled={loading}
        className="group inline-flex items-center gap-3 border border-foreground px-8 py-4 text-xs uppercase tracking-[0.3em] hover:bg-foreground hover:text-background transition-all duration-500 disabled:opacity-60"
      >
        {loading ? "Sending…" : "Send Message"}
      </button>
    </form>
  );
};

export default ContactForm;
