const SendIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <line x1="22" y1="2" x2="11" y2="13" />
    <polygon points="22 2 15 22 11 13 2 9 22 2" />
  </svg>
);

const Form = () => {
  return (
    <form
      action="https://formspree.io/f/xldjkbnq"
      method="POST"
      className="flex flex-col gap-4"
    >
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="form-name" className="block text-[11px] font-semibold text-text-muted uppercase tracking-wider mb-1.5">
            Your Name <span className="text-accent">*</span>
          </label>
          <input
            id="form-name"
            name="name"
            placeholder="John Doe"
            className="input-field"
            required
          />
        </div>

        <div>
          <label htmlFor="form-email" className="block text-[11px] font-semibold text-text-muted uppercase tracking-wider mb-1.5">
            Your Email <span className="text-accent">*</span>
          </label>
          <input
            id="form-email"
            name="email"
            type="email"
            placeholder="john@example.com"
            className="input-field"
            required
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="form-location" className="block text-[11px] font-semibold text-text-muted uppercase tracking-wider mb-1.5">
            Location <span className="text-accent">*</span>
          </label>
          <input
            id="form-location"
            name="location"
            placeholder="City, Country"
            className="input-field"
            required
          />
        </div>

        <div>
          <label htmlFor="form-subject" className="block text-[11px] font-semibold text-text-muted uppercase tracking-wider mb-1.5">
            Subject <span className="text-accent">*</span>
          </label>
          <input
            id="form-subject"
            name="subject"
            placeholder="Project inquiry"
            className="input-field"
            required
          />
        </div>
      </div>

      <div>
        <label htmlFor="form-message" className="block text-[11px] font-semibold text-text-muted uppercase tracking-wider mb-1.5">
          Your Message <span className="text-accent">*</span>
        </label>
        <textarea
          id="form-message"
          name="message"
          placeholder="Tell me about your project, timeline, and goals..."
          rows={5}
          className="input-field resize-none"
          required
        />
      </div>

      <div>
        <button
          type="submit"
          className="btn-primary mt-2"
        >
          Send Message
          <SendIcon />
        </button>
      </div>
    </form>
  );
};

export default Form;
