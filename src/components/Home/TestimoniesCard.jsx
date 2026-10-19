import { BiSolidQuoteAltLeft } from "react-icons/bi";

import user from "../../assets/user.svg";

const TestimoniesCard = ({ name, stars, message }) => {
  return (
    <article className="bg-primary p-8 rounded-xl text-white text-center flex flex-col items-center justify-center gap-4 lg:w-8/12 lg:mx-auto">
      <div className="flex flex-col items-center justify-center gap-2">
        <img src={user} alt="user_image" />
        <h2 className="text-lg font-semibold">{name}</h2>
        <div className="flex items-center gap-2">
          <p className="text-yellow-400 text-xl">★★★★★</p>
          <p>{stars}</p>
        </div>
        <BiSolidQuoteAltLeft className="text-xl" />
      </div>
      <p>{message}</p>
    </article>
  );
};

export default TestimoniesCard;
