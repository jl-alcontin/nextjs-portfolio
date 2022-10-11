import React from "react";
import { EnvelopeIcon, MapPinIcon, PhoneIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};
type Props = {};

function ContactMe({}: Props) {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href =
      "mailto:blackanonymous203@gmail?subject=${formData.subject}&body=Hi, myname is ${formDate.name}. ${formData.message} (${formDate.email}) ";
  };
  return (
    <div className="h-screen w-full relative flex flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center z-0">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Contact
      </h3>

      <div className="flex flex-col space-y-10 xl:mt-0">
        <h4 className="text-xl font-semibold text-center flex flex-col flex-wrap">
          I have got just what you need. {""}
          <span className="decoration-[#f7ab0a]/50 underline">Lets Talk.</span>
        </h4>

        <div className="space-y-3 md:space-y-10">
          <div className="flex items-center space-x-5 justify-center">
            <PhoneIcon className="text-[#f7ab0a] h-7 w-7 animate-pulse" />
            <p className="md:text-2xl">09454123123</p>
          </div>

          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="text-[#f7ab0a] h-7 w-7 animate-pulse" />
            <p className="md:text-2xl">anon203kaiz@gmail.com</p>
          </div>

          <div className="flex items-center space-x-5 justify-center">
            <MapPinIcon className="text-[#f7ab0a] h-7 w-7 animate-pulse" />
            <p className="md:text-2xl">test area city</p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-2 max-w-xs md:max-w-fit mx-auto"
        >
          <div className="flex flex-wrap md:flex-nowrap md:space-x-2">
            <input
              {...register("name")}
              placeholder="Name"
              className="contactInput w-full md:w-fit mb-2 md:mb-0"
              type="text"
            />
            <input
              {...register("email")}
              placeholder="Email"
              className="contactInput w-full md:w-fit"
              type="email"
            />
          </div>
          <input
            {...register("subject")}
            placeholder="Subject"
            className="contactInput"
            type="text"
          />
          <textarea
            {...register("message")}
            placeholder="Message"
            className="contactInput"
          />
          <button
            type="submit"
            className="bg-[#f7ab0a] py-1 lg:py-5 lg:px-10 rounded-md text-black font-bold text-lg"
            name=""
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactMe;
