import React, { useState } from "react";
import tabImg1 from "../images/image2.jpg"
import tabImg2 from "../images/image3.jpg"
import tabImg3 from "../images/image4.jpg"
import tabImg4 from "../images/image5.jpg"
import MainContainer from "./mainContainer";
import TabContainer from "./tabContainer";

const TabMenu = [
    {id: 0, title: "創業投資", img: tabImg1, alt: "tabImage1", content: "為準備開創事業的您提供各種支援服務，助你大展拳腳。"},
    {id: 1, title: "稅務申報", img: tabImg2, alt: "tabImage2", content: "澳門企業需每年按規定申報所得補充稅，稅率為百分之十二，在兩岸四地中屬於賦稅較低的地區。"},
    {id: 2, title: "重大投資", img: tabImg3, alt: "tabImage3", content: "重大投資移民 自2007澳門政府叫停置業居留移民後，移民澳門只剩上技術移民及重大投資移民兩種途徑。由於技術移民門檻過高，非一般人能夠符合資格。重大投資移民成了移居澳門的主要途徑。"},
    {id: 3, title: "成為公司", img: tabImg4, alt: "tabImage4", content: "澳門擁有穩健的金融系統、完善的法律、理想的貿易環境、稅率低、、中國大陸與葡語國家經貿合作的平台。"},
]

const Tabs = ({title, className}) => {
    const [activeIndex, setActiveIndex] = useState(0)

    const handleClick = (index) => {
        setActiveIndex(index)
    }

    const checkActive = (index, activeClass, nonActiveClass) => activeIndex === index ? activeClass : nonActiveClass

    return(
        <>
            <MainContainer title={title} className={className}>
                <div className="border-2 border-gray-200">
                    <div className="bg-stone-200 flex z-0">
                        {TabMenu.map(item => (
                            <button
                                className={`w-full h-full py-2 ${checkActive(item.id, "bg-white z-1", "border-x border-gray-300")}`}
                                key={item.id}
                                onClick = {() => handleClick(item.id)}
                            >
                                    {item.title}
                                </button>
                        ))}
                    </div>
                    <div>
                        {TabMenu.map(item => (
                            <div className={`py-2 ${checkActive(item.id, "block", "hidden")}`}>
                              <TabContainer key={item.id} src={item.img} alt={item.alt} content={item.content}/>
                            </div>
                        ))}
                    </div>
                </div>
            </MainContainer>
        </>
        
    )
}

export default Tabs;