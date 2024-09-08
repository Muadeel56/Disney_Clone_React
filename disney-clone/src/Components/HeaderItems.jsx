import React from "react";

function HeaderItems({ name, Icon }) {
  return (
    <div className="text-white flex items-center gap-3 text-[15px] hover:underline underline-offset-8 font-semibold cursor-pointer mb-2">
      <Icon />
      <h2 className="">{name}</h2>
    </div>
  );
}

export default HeaderItems;
