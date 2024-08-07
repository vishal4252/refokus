import React, { useState } from 'react'
import Product from './Product'
import { motion } from 'framer-motion'
import gifs1 from '../assets/Arqitel project video 4_3.gif'
import gifs2 from '../assets/Cula_promo_new_4_3.gif'
import gifs3 from '../assets/webflow-education-promo.gif'
import gifs4 from '../assets/Maniv-Compressed.gif'
import gifs5 from '../assets/Silvr.gif'
import gifs6 from '../assets/showcase_4_3.gif'

const Products = () => {
    const productsData = [
        {
            title: "Arqitel",
            desc: "With a continuous 3D animation, we showcase Arqitel approach and show how migration data translates into real estate.",
            live: true,
            cases: false,
            bgColor: "#5355EE",
            url: "https://cdn.prod.website-files.com/6334198f239547f2fccd84c1/650c5f15978b05dc7f2ae554_14.webp",
        },
        {
            title: "Cula",
            desc: "We immersed ourselves in a 3D world we created to explain how Cula's platform collects data from carbon removal processes and converts them into carbon credit certificates.",
            live: true,
            cases: false,
            bgColor: "#4A576B",
            url: "https://cdn.prod.website-files.com/6334198f239547f2fccd84c1/65b41324914b470b20ec7d03_Frame%203-p-800.png",
        },
        {
            title: "Layout",
            desc: "An interactive learning game that can educate and entertain you on the basics of web layouts in Webflow.",
            live: true,
            cases: true,
            bgColor: "#1626F3",
            url: "https://cdn.prod.website-files.com/6334198f239547f2fccd84c1/65f1160e50447ddfb490fb59_portfolioCard_cc-02%20(1)-p-800.webp",
        },
        {
            title: "Maniv",
            desc: "A global early-stage venture fund partnering with founders to advance cleaner, safer, and more sustainable movement of people and goods.",
            live: true,
            cases: true,
            bgColor: "#2DCB76",
            url: "https://cdn.prod.website-files.com/6334198f239547f2fccd84c1/65b2cab86e8df24e528c4441_Frame%201-p-800.png",
        },
        {
            title: "Silvr",
            desc: "We teamed up with financing solutions provider Silvr to audit, refine and evolve their brand.",
            live: true,
            cases: true,
            bgColor: "#FF7548",
            url: "https://cdn.prod.website-files.com/6334198f239547f2fccd84c1/64cc29f66c6594c072ba1a38_02-p-800.jpg",
        },
        {
            title: "Showcase",
            desc: "Our OMR22 Masterclass teaches how to create a showcase website, and we made a showcase website about showcase websites to promote the art of showcasing.",
            live: true,
            cases: true,
            bgColor: "#FE9F2E",
            url: "https://cdn.prod.website-files.com/6334198f239547f2fccd84c1/65b41c36a9425c61aaa03cfc_Showcase%20-%20mobile-p-800.png",
        },
    ]

    const [imgPos, setImgPos] = useState(0)
    const mover = (val) => {
        setImgPos(val * 22)
    }
    return (
        <section className='mt-20 relative'>
            {productsData.map((elem, index) =>
                <Product data={elem} key={index} moverFun={mover} productsIndex={index} />)}

            <div className='absolute w-full h-full top-0 pointer-events-none hidden lg:block'>
                <motion.div initial={{ y: imgPos, x: "-50%" }} animate={{ y: imgPos + `rem` }} transition={{ ease: [0.76, 0, 0.24, 1], duration: .6 }} className='absolute w-[30rem] h-[22rem] left-[43%] rounded-lg overflow-hidden'>
                    <motion.div animate={{ y: -imgPos + `rem` }} transition={{ ease: [0.76, 0, 0.24, 1], duration: .4 }} className='w-full h-full'>
                        <img src={gifs1} alt="" srcset="" />
                    </motion.div>

                    <motion.div animate={{ y: -imgPos + `rem` }} transition={{ ease: [0.76, 0, 0.24, 1], duration: .4 }} className='w-full h-full'>
                        <img src={gifs2} alt="" srcset="" />
                    </motion.div>

                    <motion.div animate={{ y: -imgPos + `rem` }} transition={{ ease: [0.76, 0, 0.24, 1], duration: .4 }} className='w-full h-full'>
                        <img src={gifs3} alt="" srcset="" />
                    </motion.div>

                    <motion.div animate={{ y: -imgPos + `rem` }} transition={{ ease: [0.76, 0, 0.24, 1], duration: .4 }} className='w-full h-full'>
                        <img src={gifs4} alt="" srcset="" />
                    </motion.div>

                    <motion.div animate={{ y: -imgPos + `rem` }} transition={{ ease: [0.76, 0, 0.24, 1], duration: .4 }} className='w-full h-full'>
                        <img src={gifs5} alt="" srcset="" />
                    </motion.div>

                    <motion.div animate={{ y: -imgPos + `rem` }} transition={{ ease: [0.76, 0, 0.24, 1], duration: .4 }} className='w-full h-full'>
                        <img src={gifs6} alt="" srcset="" />
                    </motion.div>

                </motion.div>
            </div>
        </section>
    )
}

export default Products