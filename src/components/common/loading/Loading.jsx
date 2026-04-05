import { HashLoader } from "react-spinners";

const Loading = () => {
  return (
    <div
      className="fixed inset-0 flex flex-col items-center justify-center bg-bg-primary z-50"
      aria-label="Loading"
    >
      <HashLoader color="#a855f7" speedMultiplier={2} size={80} />
      <p className="mt-6 text-text-secondary text-sm font-medium animate-pulse">
        Loading...
      </p>
    </div>
  );
};

export default Loading;
