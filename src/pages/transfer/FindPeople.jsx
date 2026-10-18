import { useDispatch, useSelector } from "react-redux";
import PeopleCard from "../../components/transfer/PeopleCard";
import { CiSearch } from "react-icons/ci";
import { useEffect } from "react";
import { findPeople } from "../../redux/slices/peopleSlice";
import { useSearchParams } from "react-router";

const FindPeople = () => {
  const dispatch = useDispatch();

  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get("search");

  const people = useSelector((state) => state.peopleState.people);

  useEffect(() => {
    setTimeout(() => {
      dispatch(
        findPeople({
          params: `/transaction/people?search=${search}`,
        }),
      );
    }, 3000);
  }, [dispatch, search]);

  return (
    <section className="container w-full lg:border rounded-lg lg:border-dark-gray/20">
      <div className="flex flex-col justify-between gap-4">
        <div>
          <h2 className="font-semibold">Find People</h2>
          <p
            className={`${search ? "block" : "hidden"} text-dark-gray text-sm`}
          >
            {people?.length} Result Found For {search}
          </p>
        </div>
        <div className="p-2 border border-dark-gray/80 rounded-lg flex items-center justify-between">
          <input
            value={search || ""}
            onChange={(e) => {
              const newSearchParams = new URLSearchParams(searchParams);

              if (e.target.value) {
                newSearchParams.set("search", e.target.value);
              } else {
                newSearchParams.delete("search");
              }

              setSearchParams(newSearchParams);
            }}
            className="w-full outline-none lg:text-xs"
            type="text"
            placeholder="Enter Number Or Full Name"
          />
          <CiSearch className="text-xl" />
        </div>
        <div className="mb-32 lg:mb-0">
          {people?.map((el, idx) => (
            <PeopleCard
              key={el.id}
              id={el.id}
              fullname={el.fullname}
              image_url={el.image_url}
              phone={el.phone}
              color={idx % 2 === 0 ? "bg-gray" : "bg-white"}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FindPeople;
