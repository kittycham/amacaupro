import React, { useState } from "react";
import { Link } from "gatsby";

const Navigation = ({ menu }) => {
  const filteredMenu = menu.filter(mainItem => !mainItem.parentId);
  const [isOpenMenu, setIsOpenMenu] = useState(false)

  return (
    <>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 relative lg:hidden text-gray-400 cursor-pointer" onClick={() => setIsOpenMenu(!isOpenMenu)}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
          <ul className={`z-40 order-first drop-shadow-md lg:drop-shadow-none grid lg:flex lg:grid-flow-col lg:gap-2.5 lg:auto-cols-auto lg:mb-2.5 grid-cols-1 border-gray-200 border-t-sky-500 border-2 lg:border-0 w-11/12 -mx-5 md:mx-0 md:w-10/12 lg:w-auto absolute lg:static top-[5.5rem] py-4 lg:py-0 bg-white lg:block ${isOpenMenu ? 'block' : 'hidden'}`}>
            {filteredMenu.map((mainItem) => (
              <li
                key={mainItem.id}
                className="relative group text-gray-500 hover:text-gray-700 lg:my-0 bg-red-50 lg:bg-inherit"
              >
                <Link
                  to={mainItem.wpChildren.nodes.length !== 0 ? '#' : mainItem.uri}
                  className={`lg:mr-[30px] group pb-2.5 cursor-pointer w-full mx-3 lg:mx-0 text-lg lg:text-base font-bold lg:font-normal`}
                >
                  {mainItem.title}
                </Link>
                {mainItem.wpChildren.nodes.length !== 0 && (
                  <ul className="drop-shadow-md lg:transition-all lg:absolute lg:w-[230px] lg:mt-2 lg:bg-white lg:border-2 lg:border-t-sky-500 lg:px-2 lg:py-3 lg:-mx-5 text-sm lg:hidden lg:group-hover:block lg:hover:block lg:opacity-0 lg:group-hover:opacity-100 duration-500">
                    {mainItem.wpChildren.nodes.map((childrenItem) => (
                      <li key={childrenItem.id} className="text-gray-500 hover:bg-gray-100 hover:text-gray-700 bg-white">
                        <Link
                          to={childrenItem.uri}
                          className="p-4 block"
                        >
                          {childrenItem.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
        </ul>
    </>
  );
};

export default Navigation;