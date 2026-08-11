import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Address = ({ item }) => {
  const content = (
    <div className="card p-4 flex items-center gap-3.5 transition-colors hover:border-white/20">
      <div className="w-8 h-8 rounded bg-white/[0.04] border border-border flex items-center justify-center text-text-muted flex-shrink-0">
        <FontAwesomeIcon icon={item?.icon} className="text-xs text-accent" />
      </div>
      <div className="overflow-hidden">
        <p className="text-[10px] text-text-muted uppercase tracking-wider font-semibold">
          {item?.title}
        </p>
        <p className="text-xs sm:text-sm text-text-primary font-medium mt-0.5 truncate">
          {item?.description}
        </p>
      </div>
    </div>
  );

  if (item?.href) {
    return (
      <a href={item.href} className="block focus:outline-none">
        {content}
      </a>
    );
  }

  return content;
};

export default Address;
