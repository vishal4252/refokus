import React from 'react'

const Footer = () => {
    return (
        <footer className='w-full'>
            <div className="max-w-screen-xl mx-auto py-10 px-3 lg:px-0 flex flex-col lg:flex-row gap-10 lg:gap-32">
                <div className="basis-1/2">
                    <h1 className='text-[5rem] lg:text-[12rem] font-medium leading-none tracking-tight'>refokus.</h1>
                </div>
                <div className="basis-1/2 flex gap-4">
                    <div className="basis-1/3">
                        <h4 className='text-zinc-100 mb-10'>Social</h4>
                        {["Instagram", "Twitter (x?)", "LinkedIn"].map((item, index) => <a className='block mt-2 text-zinc-600' href='#' key={index}>{item}</a>)}
                    </div>
                    <div className="basis-1/3">
                        <h4 className='text-zinc-100 mb-10'>Site Map</h4>
                        {["Home", "Work", "Carrier", "Contact"].map((item, index) => <a className='block mt-2 text-zinc-600' href='#' key={index}>{item}</a>)}
                    </div>
                    <div className="basis-1/2 flex flex-col items-end">
                        <p className='text-right text-zinc-100 mb-10'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero nobis natus vel.</p>
                        <img className='w-32 mt-10' src="https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/6637ba0d8481b4339b1cda4f_Frame%2048097733.svg" alt="" srcset="" />
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer