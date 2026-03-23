import React from "react";
import { TiNews } from "react-icons/ti";
export default function Header(){
    return(
        <>
            <div className="navbar flex bg-yellow-500 justify-between p-3 items-center">
                <div className="logo flex text-2xl gap-2 items-center">
                    <TiNews className="w-10 h-10" />
                    <h1>News Mania</h1>
                </div>
                <div className="list flex">
                    <ul className="flex gap-4 text-xl cursor-pointer">
                        <li>Home</li>
                        <li>Contact Us</li>
                        <li>About</li>
                    </ul>
                </div>
            </div>
        </>
    )
}