import { Icon } from "@iconify/react";
const footer = () => {
  return (
    <div className="bg-[#311717] w-full h-24 border border-[#4a1111] flex items-center justify-between gap-2 px-20  py-20 text-xl ">
      <div className="flex items-center gap-2  text-[#EC1313]">
        <Icon
          icon="material-symbols:movie-outline"
          className="text-[#EC1313] text-3xl"
        />
        <div className="flex gap-2 text-xl">
          <Icon
            icon="mdi:copyright"
            className="text-[#EC1313]  mt-1 inline-block"
          />
          <h1>2024 CineSearch.</h1>
        </div>
      </div>
      <div className="flex items-center gap-6 text-[#94A3B8] text-lg">
        <h1>Privacy policy</h1>
        <h1>Terms of Service</h1>
        <h1>Cookie Settings</h1>
      </div>
      <div className="flex gap-2">
        <Icon
          icon="mynaui:globe"
          className="text-[#94A3B8] cursor-pointer text-3xl"
        />
        <Icon
          icon="akar-icons:question"
          className="text-[#94A3B8] cursor-pointer text-3xl"
        />
      </div>
    </div>
  );
};

export default footer;
