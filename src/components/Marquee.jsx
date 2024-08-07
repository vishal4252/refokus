import { motion } from 'framer-motion'
import React from 'react'

const Marquee = ({ imgUrl, direction }) => {
    return (
        <div className='flex py-6 lg:py-8 gap-14 whitespace-nowrap overflow-hidden'>
            <motion.div initial={{ x: direction === "left" ? "0" : "-100%" }} animate={{ x: direction === "left" ? "-100%" : "0" }} transition={{ ease: "linear", duration: 25, repeat: Infinity }} className='flex flex-shrink-0 gap-24'>
                {imgUrl.map((url, index) => <img key={index} src={url} alt='' srcSet='' className='w-[25vw] lg:w-[7vw] flex-shrink-0' />)}
            </motion.div>
            <motion.div initial={{ x: direction === "left" ? "0" : "-100%" }} animate={{ x: direction === "left" ? "-100%" : "0" }} transition={{ ease: "linear", duration: 25, repeat: Infinity }} className='flex flex-shrink-0 gap-24'>
                {imgUrl.map((url, index) => <img key={index} src={url} alt='' srcSet='' className='w-[25vw] lg:w-[7vw] flex-shrink-0' />)}
            </motion.div>

        </div>
    )
}

export default Marquee