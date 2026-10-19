import { useState } from "react";
import CheckPin from "../../components/changePin/checkPinCompo";
import ChangePinCompo from "../../components/changePin/changePin";

const ChangePin = () => {
  const [checkShow, setCheckShow] = useState(true)
  const [changeShow, setChangeShow] = useState(false)
  const [currentPin,setCurrentPin] = useState()
  return (
    <section className="w-full flex items-center justify-center py-8 px-4">
      <div className="w-full max-w-md rounded-2xl bg-white p-6 sm:p-8 flex flex-col items-center text-center shadow-sm border border-gray-100">
        <CheckPin checkShow={checkShow} setCheckShow={setCheckShow} setChangeShow={setChangeShow} setCurrentPin={setCurrentPin}/>
        <ChangePinCompo changeShow={changeShow} setChangeShow={setChangeShow} currentPin={currentPin} setCheckShow={setCheckShow}/>
      </div>
    </section>
  );
};

export default ChangePin;
