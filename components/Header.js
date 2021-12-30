import { MicrophoneIcon, SearchIcon, XIcon } from "@heroicons/react/solid";

import Avatar from "../components/Avatar";
import HeaderOptions from "../components/HeaderOptions";
import Image from "next/image";
import {useRef} from "react";
import {useRouter} from "next/router";

function Header() {
    const router = useRouter();
    const searchInputRef = useRef(null);
    const search = e => {
        e.preventDefault();
        const term = searchInputRef.current.value;
        if(!term) return;
        
        router.push(`/search?term=${term}`);

    }
    return (
        <header className="sticky top-0 bg-white">
            <div className="flex w-full p-6 items-center">
                <Image 
                    onClick={()=>router.push('/')}
                    className="cursor-pointer "
                    src="https://www.google.co.uk/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
                    width={120}
                    height={40}
                />
                <form className="flex flex-grow border border-gray-200 shadow-lg rounded-full px-6 py-3 max-w-3xl items-center ml-10 mr-5">
                    <input ref={searchInputRef} 
                        className="w-full bg:red-500 focus:outline-none"
                    type="text"/>
                    <XIcon className="h-7 sm:mr-3 text-gray-500 cursor-pointer transition duration-100 transform hover:scale-125" 
                    onClick={()=>(searchInputRef.current.value="")}
                    />
                    <MicrophoneIcon className="h-6 mr-3 hidden sm:inline-flex text-blue-500 border-l-2 pl-4 border-gray-300"/>

                    <SearchIcon  onClick={(e)=>search(e)} className="h-6 text-blue-500 hidden sm:inline-flex"/>
                    <button hidden type="submit" onClick={(e)=>search(e)}> Search</button>
                </form>
                <Avatar url={"https://static.geekyants.com/user-image/amarg.png"} className="ml-auto"/>
            </div>

            {/* HeaderOption */}
            <HeaderOptions />
        </header>
    )
}

export default Header
