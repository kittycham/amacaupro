import React from "react";

const Container = ({ className, children }) => {
  return (
    <div className={`lg:max-w-[1352px] lg:m-auto lg:px-[136px] md:px-[80px] sm:px-[40px] ${className}`}>
        {children}
    </div>
  );
};

export default Container;