import React from 'react'
import Button from './Button'
import { motion } from 'framer-motion'


const Product = ({ data, moverFun, productsIndex }) => {
    const { title, desc, live, cases, bgColor, url } = data
    return (
        <div className='w-full'>
            <motion.div whileHover={{ backgroundColor: bgColor }} className='w-full py-10 h-[22rem] text-white hidden lg:block'>
                <div onMouseEnter={() => { moverFun(productsIndex) }} className='max-w-screen-xl mx-auto flex items-center justify-between'>
                    <h1 className='text-6xl font-semibold'>{title}</h1>
                    <div className="dets w-1/3">
                        <p className='mb-10'>{desc}</p>
                        <div className="buttons flex items-center gap-5">
                            {live && <Button />}
                            {cases && <Button title='Case Study' />}
                        </div>
                    </div>
                </div>
            </motion.div>

            <div className="cards w-full h-fit p-3 lg:hidden">
                <motion.div whileHover={{ backgroundColor: bgColor }} className='p-5 flex items-center justify-center flex-col bg-[#242424] rounded-lg'>
                    <h1 className='text-4xl mt-2 mb-6 font-medium'>{title}</h1>
                    <img src={url} className='rounded-lg' alt="" srcset="" />
                    <div className="dets">
                        <p className='my-10 text-lg'>{desc}</p>
                        <div className="buttons">
                            {live && <Button />}
                            {cases && <Button title='Case Study' />}
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default Product