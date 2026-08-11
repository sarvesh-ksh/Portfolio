const Loading = () => {
  return (
    <div
      className="fixed inset-0 flex flex-col items-center justify-center bg-bg-primary z-50"
      aria-label="Loading"
      role="status"
    >
      <div className="css-spinner" aria-hidden="true" />
      <p className="mt-4 text-text-muted text-xs font-medium font-mono">
        Loading...
      </p>
    </div>
  );
};

export default Loading;
