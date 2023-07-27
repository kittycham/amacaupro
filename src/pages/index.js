import * as React from "react";
import Seo from "../components/seo";
import Layout from "../components/layout";
import Container from "../components/container";
import MainContainer from "../components/mainContainer";
import Image1 from "../images/image1.png";
import TabContainer from "../components/tabContainer";
import Tabs from "../components/Tabs";
import LatestPostContainer from "../components/LatestPostContainer";
import DSE from "../images/DSE.jpg";
import DSEC from "../images/DSEC.gif";
import DSF from "../images/DSF.jpg";
import IPIM from "../images/IPIM.jpg";
import { useLatestPostQuery } from "../hooks/useLatestPostQuery";

const IndexPage = () => {

  const {allWpPost} = useLatestPostQuery()

  const latestPosts = [...allWpPost.nodes].splice(0, 2)

  return (
    <Layout>
      <Container className="lg:columns-3 my-7 gap-x-[60px] py-[50px] h-max lg:flex columns-1">
        <div className="w-full h-full">
          <MainContainer title="信心保證">
            <TabContainer src={Image1} alt="home-image-1" content="專業會計師為你服務，專職協助外地及本澳企業在澳營商，為客戶提供優質的會計及咨詢顧問服務，助你在澳拓展商機。"/>
          </MainContainer>
          <Tabs title="在商言商"/>
        </div>
        <MainContainer className="w-full lg:w-3/5" title="最新消息及動向">
          {latestPosts.map(post => (
            <div key={post.id}>
              <LatestPostContainer post={post} />
            </div>
          ))}
        </MainContainer>
        <MainContainer title="有用連結" className="w-full lg:w-3/5 h-full">
            <div className="grid grid-cols-1 gap-y-5 justify-items-center">
              <div className="">
                <a href="https://www.dsf.gov.mo/?lang=zh" target="_blank" rel="noopener noreferrer">
                  <img className="w-full h-full" src={DSF} alt="DSF"/>
                </a>
              </div>
              <div className="">
                <a href="https://www.ipim.gov.mo/" target="_blank" rel="noopener noreferrer">
                  <img className="w-full h-full" src={IPIM} alt="IPIM"/>
                </a>
              </div>
              <div className="">
                <a href="https://www.dsedt.gov.mo/zh_TW/web/public/pg_home" target="_blank" rel="noopener noreferrer">
                  <img className="w-full h-full" src={DSE} alt="DSE"/>
                </a>
              </div>
              <div className="">
                <a href="https://www.dsec.gov.mo/zh-MO" target="_blank" rel="noopener noreferrer">
                  <img className="w-full h-full" src={DSEC} alt="DSEC"/>
                </a>
              </div>
            </div>
        </MainContainer>
      </Container>
    </Layout>
  );
};

export const Head = () => <Seo title="Home" />;

export default IndexPage;