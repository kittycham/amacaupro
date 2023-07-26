import React from "react";

const MainContainer = ({ title, className, children }) => {
  return (
    <div className={`${className} mb-8`}>
        <h2 className="font-bold text-lg mb-4">{title}</h2>
        {children}
    </div>
  );
};

export default MainContainer;