import {MicrophoneIcon, SearchIcon, ViewGridIcon} from "@heroicons/react/solid"

import Avatar from '../components/Avatar'
import Footer from "../components/footer"
import Head from 'next/head'
import Image from "next/image";
import { useRef } from "react";
import { useRouter } from "next/router";

export default function Home() {

  const searchInputRef = useRef(null);
  const router = useRouter();
  
  const search = e => {
    e.preventDefault();
    const term = searchInputRef.current.value;
    if(!term) return;
    router.push(`/search?term=${term}`)
  }
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Head>
        <title>Create Next App</title>
      </Head>

      {/* header */}
      <header className="flex items-center w-full p-5 justify-end text-sm text-gray-700 ">
        <div className="flex items-center space-x-4">
          <p className="link">Gmail</p>
          <p className="link">Images</p>
          <ViewGridIcon className="h-10 w-10 p-2 rounded-full hover:bg-gray-100 cursor-pointer"/>
          <Avatar url={"https://static.geekyants.com/user-image/amarg.png"}/>
        </div>
      </header>


      {/* body */}

      <form className="flex flex-col items-center mt-44 flex-grow w-4/5">
        <Image 
        className="h-screen "
          src="https://www.google.co.uk/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
          width={300}
          height={100}
        />
        <div className="flex w-full mt-5 hover:shadow-lg focus-within:shadow-lg max-w-md rounded-full border border-gray-200 px-5 py-3 items-center sm:max-w-xl lg:max-w-2xl">
          <SearchIcon className="h-5 mr-3 text-gray-500"/>
          <input ref={searchInputRef} className="flex-grow focus:outline-none" type="text"/>
          <MicrophoneIcon className="h-5 text-gray-500"/>
        </div>
        <div className="flex flex-col w-1/2 space-y-2 justify-center mt-8 sm:space-y-0 sm:flex-row sm:space-x-4 ">
          <button onClick={(e)=>search(e)} className="btn"> Google Search</button>
          <button className="btn"> I'm feeling Lucky</button>
        </div>
      </form>

      <Footer />
    </div>
  )
}
