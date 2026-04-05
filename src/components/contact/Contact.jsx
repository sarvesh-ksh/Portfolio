import {
  faEnvelope,
  faLocationDot,
  faPhone,
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
  },
  {
    icon: faPhone,
    title: "Phone",
    description: "+91 979639 47499",
  },
];

const Contact = () => {
  const sectionRef = useScrollReveal();

  return (
    <div ref={sectionRef} className="px-4 py-16 md:py-24">
      <div
        className="content glass-card p-6 md:p-10 lg:p-16 xl:p-20 rounded-3xl scroll-reveal-scale"
        id="contact"
      >
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="section-title">
            Let's <span className="text-gradient">Connect</span>
          </p>
          <p className="text-text-secondary text-sm sm:text-base mt-4 max-w-lg mx-auto">
            Feel free to reach out — I'm open to discussing projects,
            collaborations, or anything tech-related.
          </p>
        </div>

        <div className="flex flex-col-reverse lg:flex-row lg:gap-12 xl:gap-20 justify-between">
          {/* LEFT SIDE — Info */}
          <div className="scroll-reveal-left lg:max-w-sm">
            <div className="space-y-4 my-8 lg:my-0">
              {addressData.map((item, index) => (
                <Address item={item} key={index} index={index} />
              ))}
            </div>

            <div className="mt-8 max-lg:text-center max-md:mb-6">
              <p className="text-text-muted text-xs mb-3 uppercase tracking-wider font-semibold">Follow Me</p>
              <SocialMedia />
            </div>
          </div>

          {/* RIGHT SIDE — Form */}
          <div className="w-full scroll-reveal-right">
            <Form />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
