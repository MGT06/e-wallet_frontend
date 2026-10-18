import { IoPaperPlaneOutline } from "react-icons/io5";

import { Outlet, useLocation } from "react-router";

const TrasferLayout = () => {
  const location = useLocation();

  return (
    <>
      <div className="lg:pr-11">
        <div className="lg:grid gap-4 hidden lg:px-8 pt-8 pb-4">
          <div className="flex items-center gap-2">
            <IoPaperPlaneOutline className="text-primary text-xl" />
            <p className="font-semibold">Transfer money</p>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 bg-primary text-white rounded-full flex items-center justify-center">
              <p>1</p>
            </div>
            <p className="text-sm lg:text-xs text-primary">Find People</p>
            <p
              className={
                location.pathname.includes("nominal")
                  ? "text-primary"
                  : "text-dark-gray"
              }
            >
              --------------
            </p>
            <div
              className={`${location.pathname.includes("nominal") ? "text-white bg-primary" : "bg-dark-gray text-white"} w-5 h-5  rounded-full flex items-center justify-center`}
            >
              <p>2</p>
            </div>
            <p
              className={`${location.pathname.includes("nominal") ? "text-primary" : "text-dark-gray"} text-sm lg:text-xs`}
            >
              Set Nominal
            </p>
            <p className="text-dark-gray">--------------</p>
            <div className="w-5 h-5 bg-dark-gray text-white rounded-full flex items-center justify-center">
              <p>3</p>
            </div>
            <p className="text-sm lg:text-xs text-dark-gray">Finish</p>
          </div>
        </div>
        <div className="lg:p-4">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default TrasferLayout;
