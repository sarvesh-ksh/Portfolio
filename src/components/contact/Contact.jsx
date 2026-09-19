import {
  faEnvelope,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import Address from "./Address";
import Form from "./Form";
import SocialMedia from "../common/socialMedia/SocialMedia";
import useScrollReveal from "../../hooks/useScrollReveal";

const addressData = [
  {
    icon: faLocationDot,
    title: "Location",
    description: "Pune, Maharashtra, India",
  },
  {
    icon: faEnvelope,
    title: "Email",
    description: "sarveshkshatriya545@gmail.com",
    href: "mailto:sarveshkshatriya545@gmail.com",
  },
];

const Contact = () => {
  const sectionRef = useScrollReveal();

  return (
    <section id="contact" ref={sectionRef} className="content px-4 sm:px-6 py-16 md:py-24" aria-label="Contact section">
      <div className="mb-10 max-w-xl scroll-reveal">
        <p className="section-label mb-2">Get In Touch</p>
        <h2 className="section-title">
          Contact Me
        </h2>
        <p className="text-text-secondary text-sm mt-2 leading-relaxed">
          Open to data engineering, software development, and analytics roles or collaborations. Feel free to send a message or reach out directly.
        </p>
      </div>

      <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
        {/* LEFT: Address & Info */}
        <div className="lg:col-span-5 space-y-4 scroll-reveal-left">
          <div className="space-y-3">
            {addressData.map((item, index) => (
              <Address item={item} key={index} />
            ))}
          </div>

          <div className="card p-4">
            <p className="text-[11px] text-text-muted font-semibold uppercase tracking-wider mb-2.5">Profiles &amp; Coding Platforms</p>
            <SocialMedia />
          </div>
        </div>

        {/* RIGHT: Form */}
        <div className="lg:col-span-7 card p-6 sm:p-8 scroll-reveal-right">
          <Form />
        </div>
      </div>
    </section>
  );
};

export default Contact;
