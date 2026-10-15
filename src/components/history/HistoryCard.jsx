import { CiStar } from "react-icons/ci";
import { FaRegTrashAlt } from "react-icons/fa";

const HistoryCard = ({ color }) => {
  return (
    <article
      className={`container ${color} border-b border-b-dark-gray/20 rounded-lg`}
    >
      <div className="flex items-center justify-between">
        <div className="rounded-lg overflow-hidden w-18 lg:w-14 hidden lg:block">
          <img
            src="https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250"
            alt="user-image"
          />
        </div>
        <div className="grid lg:grid-cols-2 lg:gap-24">
          <p className="lg:text-sm">Ghaluh 1</p>
          <p className="lg:text-sm">(239) 555-0108</p>
        </div>
        <div className="p-2 text-2xl">
          <p className="font-semibold text-green/80 text-sm">Rp.50.000</p>
        </div>
        <div className="p-2 text-lg cursor-pointer text-red hover:opacity-60 hidden lg:block">
          <FaRegTrashAlt />
        </div>
      </div>
    </article>
  );
};

export default HistoryCard;
