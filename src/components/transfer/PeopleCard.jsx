import { CiStar } from "react-icons/ci";

const PeopleCard = ({ color }) => {
  return (
    <article className={`px-4 py-2 ${color} border-b border-b-dark-gray/20 rounded-lg`}>
      <div className="flex items-center justify-between">
        <div className="rounded-lg overflow-hidden w-18 lg:w-14">
          <img
            src="https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250"
            alt="user-image"
          />
        </div>
        <div className="grid lg:grid-cols-2">
          <p className="lg:text-sm">Ghaluh 1</p>
          <p className="lg:text-sm">(239) 555-0108</p>
        </div>
        <div className="p-2 text-2xl cursor-pointer">
          <CiStar />
        </div>
      </div>
    </article>
  );
};

export default PeopleCard;
