import React from "react";
import { Link } from "gatsby";
import Container from "./container";

const FooterNavigation = ({ menu }) => {
  return (
    <Container>
      <ul className="grid lg:grid-flow-col gap-16 lg:auto-cols-max lg:w-1/2 w-full grid-cols-1">
        {menu.map((mainItem) =>
            (!mainItem.parentId && (mainItem.wpChildren.nodes.length !== 0)) ? (
                <li key={mainItem.id}>
                    <p to={mainItem.uri} className="text-sky-500 text-xl">
                        {mainItem.title.replace(" ⓥ", "")}
                    </p>
                    {mainItem.wpChildren.nodes.length !== 0 ? (
                        <ul className="list-disc marker:text-sky-500 pl-[18px] ">
                            {mainItem.wpChildren.nodes.map((childrenItem) => (
                                <li key={childrenItem.id} className="pt-[18px]">
                                    <Link to={childrenItem.uri} activeClassName="text-gray-400" className="text-white hover:text-sky-500">
                                        {childrenItem.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    ) : null}
                </li>
            ) : null
        )}
      </ul>
    </Container>
  );
};

export default FooterNavigation;