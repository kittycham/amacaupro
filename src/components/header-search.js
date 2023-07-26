import React ,{useState} from "react";

const HeaderSearch = () => {
    const [isSearch, setIsSearch] = useState(false)

    return(
        <div className="lg:relative">
        <svg
            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="relative lg:static w-5 h-5 transform scale-x-[-1] text-gray-400 hover:text-sky-500 cursor-pointer"
            onClick={() => setIsSearch(!isSearch)}
        >
         <path fillRule="evenodd" d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z" clipRule="evenodd" />
        </svg>
        {isSearch && (
            <div className="z-20 absolute w-11/12 lg:w-[230px] bg-white border-2 border-t-sky-500 mt-3 py-3 px-2 right-8 md:right-10 lg:right-0 drop-shadow-md">
                <input type="search" id="default-search" class="bg-gray-100 block w-full px-4 py-2 pl-6 text-sm text-gray-900 border border-gray-100 rounded-md focus:border-blue-500" placeholder="Search..." required/>
            </div>
        )}
      </div>
    )
}

export default HeaderSearch;