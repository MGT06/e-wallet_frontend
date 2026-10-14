import PeopleCard from "../../components/transfer/PeopleCard";
import { CiSearch } from "react-icons/ci";

const FindPeople = () => {
  return (
    <section className="container w-full lg:border rounded-lg lg:border-dark-gray/20">
      <div className="flex flex-col justify-between gap-4">
        <div>
          <h2 className="font-semibold">Find People</h2>
          <p className="text-dark-gray text-sm">8 Result Found For Galuh</p>
        </div>
        <div className="p-2 border border-dark-gray/80 rounded-lg flex items-center justify-between">
          <input
            className="w-full outline-none lg:text-xs"
            type="text"
            placeholder="Enter Number Or Full Name"
          />
          <CiSearch className="text-xl" />
        </div>
        <div>
          <PeopleCard color="bg-gray" />
          <PeopleCard color="bg-white" />
          <PeopleCard color="bg-gray" />
          <PeopleCard color="bg-white" />
        </div>
      </div>
    </section>
  );
};

export default FindPeople;
