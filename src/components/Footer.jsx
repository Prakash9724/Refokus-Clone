import React from "react";

function Footer() {
  return (
    <div className="w-full">
      <div className="max-w-screen-xl m-auto flex gap-32 py-10">
        <div className="basis-1/2 ">
        <h1 className="text-[11.5rem] capitalize font-semibold tracking-tight leading-none ">Refokus.</h1>
        </div>
        <div className="basis-1/2 flex gap-4">
        <div className="basis-1/3">
            <h4 className="mb-10 text-zinc-500 capitalize font-semibold ">Socials</h4>
            {["instagram", "twitter (x?)", "LinkedIn"].map((elem,index)=><a key={index} className="block text-zinc-600 mb-2 font-semibold">{elem}</a>)}
        </div>
        <div className="basis-1/3">
            <h4 className="mb-10 text-zinc-500 capitalize font-semibold ">Socials</h4>
            {["instagram", "twitter (x?)", "LinkedIn"].map((elem,index)=><a key={index} className="block text-zinc-600 mb-2 font-semibold">{elem}</a>)}
        </div>
        <div className="basis-1/3 flex flex-col items-end">
            <p className="text-right"> Refokus is a pioneering digital agency driven by design and
            empowered by technology.</p>
            <img className="w-32 mt-5" src="https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63455da11b54556c9d28aa3e_Badge-EnterprisePartner-Blue%201.svg" alt="" />
        </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
