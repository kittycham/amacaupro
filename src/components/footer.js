import React from "react";
import Container from "./container";
import { useMenuQuery } from "../hooks/useMenuQuery"
import FooterNavigation from "./footer-nav";

const Footer = () => {
    const {allWpPage} = useMenuQuery()
    return(
        <div className="bottom-0">
            <div className="bg-footerGray py-[80px]">
                <FooterNavigation menu={allWpPage.nodes} />
            </div>
            <div className="h-[60px] py-[10px] bg-black">
                <Container className="flex flex-col lg:flex-row items-center h-full">
                        <div className="text-gray-100 text-sm opacity-40">
                            Copyright © 2023 曹志強註冊會計師 All rights reserved.&nbsp;|&nbsp;
                        </div>
                        <div className="text-gray-100 text-sm opacity-40">Created by{' '} 
                            <a href="https://bottle.mo" title="Powered by WordPress and Gatsby" className="no-underline font-bold text-gray-100 hover:text-white">
                                Bottle Technology Ltd.
                            </a>
                        </div>
                </Container>
            </div>
        </div>
    );
};

export default Footer;
