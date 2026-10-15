import { useForm } from "react-hook-form";
import { AiOutlineMail } from "react-icons/ai";

export default function Forgot() {
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm();

    const here = (data) =>{
        console.log(data)
    }

  return (
    <section className="bg-primary min-h-screen flex justify-center items-center">
      <div>
        <div className="bg-white py-10 lg:py-15 px-4 lg:px-8 rounded-2xl flex flex-col gap-4 shadow-3xl">
          <div className="flex items-center gap-2 min-w-full">
            <img src="./LOGO.png" alt="logo-aps" className="h-8 w-8" />
            <div className="text-primary font-semibold text-xl lg:text-3xl">E-Wallet</div>
          </div>

          <div className="text-xl lg:text-2xl">Fill Out Form Correctly 👋</div>

          <div className="text-sm text-dark-gray lg:text-medium">
            We will send new password to your email
          </div>

          <form className="flex flex-col gap-2 shadow-3xl" onSubmit={handleSubmit(here)}>
            <label>Email</label>
            <div>
              <div className="flex gap-2 items-center text-xl border border-dark-gray rounded-2xl px-4 py-2">
                <AiOutlineMail />
                <input
                  {...register("email", {
                    required: "Email is required",
                  })}
                  type="email"
                  placeholder="Enter Your Email"
                  className=" outline-none"
                />
              </div>
              <p className="text-base sm:text-xl h-6 font-medium text-red-500 ml-2">
                {errors.email?.message}
              </p>
            </div>

            <button className="bg-primary rounded-xl text-white text-xl py-2 hover:bg-green-500">
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
