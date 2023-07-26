import React from "react";

const TabContainer = ({src, content, alt}) => {
    return(
        <div className="border border-gray-200 flex items-center">
            <img src={src} alt={alt} className="w-[155px] h-[111px] px-3 py-2" />
            <p className="px-6 lg:px-2 py-2 text-sm text-gray-500 leading-relaxed">{content}</p>
        </div>
    )
}

export default TabContainer;