const InformationSummary = ({ item, index }) => {
  return (
    <div
      className={`glass-card p-4 sm:p-5 text-center group scroll-reveal stagger-${index + 1}`}
    >
      <p className="text-2xl xxs:text-3xl sm:text-4xl font-bold font-display text-gradient">
        {item.description}
      </p>
      {item.suffix && (
        <p className="text-xs text-text-muted mt-1">{item.suffix}</p>
      )}
      <p className="text-xs xxs:text-sm sm:text-base text-text-secondary mt-2 font-medium">
        {item.title}
      </p>
    </div>
  );
};

export default InformationSummary;
