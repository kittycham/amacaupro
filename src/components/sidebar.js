import React from "react";
import { Link } from "gatsby";
import { useMenuQuery } from "../hooks/useMenuQuery";

const Sidebar = ({ className }) => {
  const {allWpPage, site} = useMenuQuery()
  const filteredMenu = allWpPage.nodes.filter(mainItem => !mainItem.parentId);

  return (
    <div className={`block z-1 h-full w-full lg:w-60 lg:border-r-2 lg:pr-16 lg:mr-20 pb-10 lg:pb-0 border-b-2 lg:border-b-0 ${className}`}>
      <ul>
        {filteredMenu.map((mainItem) => (
          <li
            key={mainItem.id}
          >
            <Link
              to={mainItem.wpChildren.nodes.length !== 0 ? '#' : mainItem.uri}
              className="text-gray-500 inline-block hover:text-sky-500 mb-2.5 text-sm"
            >
              {mainItem.title}
            </Link>
            {mainItem.wpChildren.nodes.length !== 0 && (
              <ul className="ml-4">
                {mainItem.wpChildren.nodes.map((childrenItem) => (
                  <li key={childrenItem.id}>
                    <Link
                      to={childrenItem.uri}
                      className="text-gray-500 inline-block hover:text-sky-500 mb-2.5 text-sm"
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
    </div>
  );
};

export default Sidebar;