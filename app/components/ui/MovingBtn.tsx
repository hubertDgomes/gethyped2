import React from "react";
type Items = {
    text : string;
    className?: string
}
const MovingBtn = ({text="" , className = ""}:Items) => {
  return (
    <>
      <div className={`relative max-h-[200px] overflow-hidden group`}>
        <div className={`h-full w-full bg-black rounded-[10px] absolute top-[35px] left-[20px] transition-all ease-in-out duration-200 group-hover:top-0 group-hover:left-0 border-t-amber-600 border-4`}></div>
        <li className={`${className} cursor-pointer py-1 px-2 navItem group-hover:text-white group-hover:bg-transparent z-30 relative`}>
          {text}
        </li>
      </div>
    </>
  );
};

export default MovingBtn;
