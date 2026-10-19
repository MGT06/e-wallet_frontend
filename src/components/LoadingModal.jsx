import { useState } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const LoadingModal = () => {
  const [loading, setLoading] = useState(true);
  return (
    <article className="fixed z-50 top-0 left-0 bottom-0 right-0 bg-black/70 z-50 flex items-center justify-center">
      <p>
        <AiOutlineLoading3Quarters
          className={`${loading ? "block" : "hidden"} text-6xl animate-spin text-white`}
        />
      </p>
    </article>
  );
};

export default LoadingModal;
