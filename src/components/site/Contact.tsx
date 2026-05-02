import { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "sonner";

export const Contact = () => {
  const [sending, setSending] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      (e.target as HTMLFormElement).reset();
      toast.success("Thank you — we'll be in touch within two business days.");
    }, 700);
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-gradient-earth">
      <div className="container grid lg:grid-cols-12 gap-12 lg:gap-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="lg:col-span-5"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-5">Begin a project</p>
          <h2 className="font-display text-4xl md:text-5xl leading-[1.08] text-balance">
            Tell us about the <span className="italic font-light text-clay">space</span> you have in mind.
          </h2>
          <p className="mt-6 text-muted-foreground max-w-md">
            We take on a small number of commissions each year. Share a few details and
            we&rsquo;ll respond personally within two business days.
          </p>

          <div className="mt-10 space-y-3 text-sm">
            <div><span className="text-muted-foreground">Studio · </span>Carrer del Pi 14, Barcelona</div>
            <div><span className="text-muted-foreground">Email · </span>hello@marenstudio.com</div>
            <div><span className="text-muted-foreground">Phone · </span>+34 93 000 0000</div>
          </div>
        </motion.div>

        <motion.form
          onSubmit={onSubmit}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="lg:col-span-7 bg-bone p-8 md:p-10 rounded-3xl border border-border/60 shadow-soft"
        >
          <div className="grid sm:grid-cols-2 gap-5">
            <Field label="Your name" name="name" required />
            <Field label="Email" name="email" type="email" required />
            <Field label="Project type" name="type" placeholder="Residence, café, hotel…" />
            <Field label="Budget range" name="budget" placeholder="€50k – 200k+" />
          </div>
          <div className="mt-5">
            <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-2">
              Tell us about the project
            </label>
            <textarea
              name="message"
              rows={5}
              required
              className="w-full bg-transparent border-b border-foreground/20 focus:border-clay focus:outline-none py-3 text-base resize-none transition-colors"
            />
          </div>
          <button
            type="submit"
            disabled={sending}
            className="mt-8 px-7 py-3.5 rounded-full bg-ink text-bone text-sm hover:bg-clay-deep transition-colors duration-300 disabled:opacity-60"
          >
            {sending ? "Sending…" : "Send inquiry"}
          </button>
        </motion.form>
      </div>
    </section>
  );
};

const Field = ({ label, name, type = "text", required, placeholder }: {
  label: string; name: string; type?: string; required?: boolean; placeholder?: string;
}) => (
  <div>
    <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-2">
      {label}
    </label>
    <input
      name={name}
      type={type}
      required={required}
      placeholder={placeholder}
      className="w-full bg-transparent border-b border-foreground/20 focus:border-clay focus:outline-none py-3 text-base transition-colors placeholder:text-muted-foreground/50"
    />
  </div>
);
