import { motion } from 'framer-motion';
import React from 'react'
import { IoIosArrowRoundForward } from "react-icons/io";

const Card = ({ width, startBtn, para, height, hover = "false" }) => {
    return (
        <motion.div whileHover={{ backgroundColor: hover === "true" && "#7443ff", padding: "25px" }} className={`bg-[#29292E] p-5 rounded-xl ${width} flex flex-col justify-between ${height}`}>
            <div className='w-full'>
                <div className='max-w-screen-xl flex items-center justify-between'>
                    <h3>One Heading</h3>
                    <IoIosArrowRoundForward />
                </div>
                <h1 className='text-2xl font-medium mt-4 w-3/4'>Insights and behind the scenes</h1>
            </div>
            <div className="down w-full">
                {startBtn === true &&
                    <>
                        <h1 className='text-[15vw] lg:text-[7.5vw] font-medium tracking-tight leading-none'>Start a Project</h1>
                        <button className='px-6 py-2 rounded-full border-[1px] border-zinc-50 mt-5'>Contact Us</button>
                    </>}

                {para === true && <p className='text-sm font-medium text-zinc-500'>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>}
            </div>
        </motion.div>
    )
}

export default Card