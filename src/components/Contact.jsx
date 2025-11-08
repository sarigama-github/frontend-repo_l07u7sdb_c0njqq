import React, { useState } from 'react';
import { Mail, Send } from 'lucide-react';

const Contact = ({ accent = '#6366f1' }) => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const onSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contact" className="py-20">
      <div className="mx-auto max-w-3xl px-6">
        <div className="mb-8 flex items-center gap-3">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-full text-white" style={{ backgroundColor: accent }}>
            <Mail size={16} />
          </span>
          <h2 className="text-3xl font-bold">Let’s connect</h2>
        </div>
        <p className="text-black/70 dark:text-white/70 mb-6">Have an opportunity, idea, or just want to say hi? Drop a note below.</p>

        <form onSubmit={onSubmit} className="grid gap-4">
          <input
            type="text"
            name="name"
            placeholder="Your name"
            value={form.name}
            onChange={onChange}
            className="w-full rounded-xl border bg-transparent px-4 py-3 outline-none"
            style={{ borderColor: accent }}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email address"
            value={form.email}
            onChange={onChange}
            className="w-full rounded-xl border bg-transparent px-4 py-3 outline-none"
            style={{ borderColor: accent }}
            required
          />
          <textarea
            name="message"
            placeholder="Your message"
            rows={5}
            value={form.message}
            onChange={onChange}
            className="w-full rounded-xl border bg-transparent px-4 py-3 outline-none"
            style={{ borderColor: accent }}
            required
          />
          <button
            type="submit"
            className="inline-flex items-center gap-2 justify-center rounded-xl px-5 py-3 text-white font-medium"
            style={{ backgroundColor: accent, boxShadow: `0 10px 24px ${accent}44` }}
          >
            <Send size={18} />
            {sent ? 'Thanks! I will reply soon.' : 'Send message'}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
