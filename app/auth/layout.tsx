import React, { PropsWithChildren } from "react";

function layout({ children }: PropsWithChildren) {
  return (
    <div className="flex h-full items-center justify-center  bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-400 to-blue-400">
      {children}
    </div>
  );
}

export default layout;
