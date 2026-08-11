const Roles = ({ role }) => {
  return (
    <div className="card p-5 flex flex-col justify-between">
      <div>
        <h3 className="text-sm font-display font-bold text-text-primary mb-1.5">
          {role.title}
        </h3>
        <p className="text-xs text-text-secondary leading-relaxed">
          {role.description}
        </p>
      </div>
    </div>
  );
};

export default Roles;
