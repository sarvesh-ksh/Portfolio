import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Address = ({ item, index }) => {
  return (
    <div
      className={`group glass-card p-4 md:p-5 flex items-center gap-4 cursor-default scroll-reveal stagger-${index + 1}`}
    >
      {/* Icon */}
      <div
        className="w-11 h-11 flex-shrink-0 flex items-center justify-center rounded-xl
          bg-white/5 group-hover:bg-accent/20 transition-all duration-300"
      >
        <FontAwesomeIcon
          icon={item?.icon}
          className="text-base text-text-muted group-hover:text-accent transition-all duration-300"
        />
      </div>

      {/* Text */}
      <div>
        <p className="text-xs text-text-muted uppercase tracking-wider font-medium">
          {item?.title}
        </p>
        <p className="text-sm md:text-base text-text-primary font-medium mt-0.5">
          {item?.description}
        </p>
      </div>
    </div>
  );
};

export default Address;
