import React from 'react'
import Button from './Button'

const Navbar = () => {
    return (
        <nav role='navigation' className='max-w-screen-xl mx-auto py-6 lg:py-3  px-6 md:px-10 lg:px-0 flex items-center justify-between'>
            <div className="nleft flex items-center">
                <img src="https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg" alt="" srcset="" />
                <div className="links lg:flex gap-14 lg:ml-20">
                    {["Home", "Work", "About", "", "News"].map((elem, index) => {
                        return index === 3 ? <span key={index} className='w-[2px] hidden lg:inline-flex h-5 bg-zinc-400'></span> :
                            (<a key={index} href='#' className='text-sm font-regular hidden lg:flex items-center gap-1'>
                                {index === 1 ? <span style={{ boxShadow: "0 0 0.25em #00FF19" }} className='inline-block w-[5px] h-[5px] bg-green-500 rounded-full'></span> : null}
                                {elem}
                            </a>)
                    }
                    )}
                </div>
            </div>

            <Button />
        </nav>
    )
}

export default Navbar