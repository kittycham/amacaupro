import * as React from "react";
import { Link } from "gatsby";
import Navigation from "./navigation";
import Container from "./container";
import { useMenuQuery } from "../hooks/useMenuQuery";
import Logo from "../images/logo.png";
import HeaderSearch from "./header-search";

const Header = ({ siteTitle }) => {
  const {allWpPage, site} = useMenuQuery()

  return(
    <header className="top-0 pt-2.5 lg:sticky bg-white z-20 drop-shadow-md">
      <Container className="min-h-[30px]">
        <Link to="/" className="inline-block">
          <img src={Logo} alt={site.siteMetadata.title} className="w-[220px]"/>
        </Link>
      </Container>
      <Container className="flex justify-between h-full mt-2">
        <Navigation menu={allWpPage.nodes} />
        <HeaderSearch />
      </Container>
    </header>
  )
}

export default Header;
