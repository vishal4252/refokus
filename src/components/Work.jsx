import React, { useState } from 'react'
import { useScroll } from "framer-motion"

const Work = () => {
    const [images, setImages] = useState(
        [
            {
                url: "https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/634ef09178195ce0073e38f3_Refokus%20Tools-1.png",
                top: "40%",
                left: "50%",
                isActive: false
            },
            {
                url: "https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/634ef0accfe1b3e66bc55462_Refokus%20Tools.png",
                top: "50%",
                left: "35%",
                isActive: false
            },
            {
                url: "https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/634ef0acbc45cb2f4fc5c6b2_Yahoo.png",
                top: "55%",
                left: "66%",
                isActive: false
            },
            {
                url: "https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/634ef092455ce2cf591e52d1_Rainfall.png",
                top: "60%",
                left: "55%",
                isActive: false
            },
            {
                url: "https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/634ef0af108a465002975acd_Showcase%20Websites%20(1).png",
                top: "68%",
                left: "45%",
                isActive: false
            },
        ]
    )

    const { scrollYProgress } = useScroll()
    scrollYProgress.on("change", (data) => {
        function imgShow(arr) {
            setImages((prev) =>
                prev.map((elem, index) =>
                    arr.indexOf(index) === -1
                        ? { ...elem, isActive: false }
                        : { ...elem, isActive: true }
                )
            )
        }
        switch (Math.floor(data * 100)) {
            case 0:
                imgShow([])
                break;
            case 1:
                imgShow([0])
                break;
            case 2:
                imgShow([0, 1])
                break;
            case 3:
                imgShow([0, 1, 2])
                break;
            case 4:
                imgShow([0, 1, 2, 3])
                break;
            case 5:
                imgShow([0, 1, 2, 3, 4])
                break;
        }
    })

    return (
        <section className='w-full mt-14 lg:mt-6'>
            <div className="relative max-w-screen-xl mx-auto text-center">
                <h1 className='text-[37vw] leading-none font-medium select-none tracking-tight rotate-[-90deg] lg:rotate-0 mt-40 md:mt-[20rem] mr-2 lg:mr-0 lg:mt-0 after:content-["work"] after:absolute after:top-[80%] after:left-[0%] lg:after:hidden before:content-["work"] before:absolute before:top-[-80%] before:left-[21%] lg:before:hidden'>work</h1>
                <h4 className='text-[4vw] lg:text-lg mt-40 md:mt-72 lg:mt-0 text-zinc-400'>Web Design, Webflow Development, Creative Development</h4>
                <div className='absolute w-full h-full top-[-10%] lg:top-0'>
                    {images.map((elem, index) => elem.isActive === true ?
                        <img key={index} className='absolute w-36 h-36 md:w-56 md:h-56 lg:w-60 lg:h-60 rounded-lg object-cover object-center -translate-x-[50%] -translate-y-[50%]' style={{ top: elem.top, left: elem.left }} src={elem.url} alt="" />
                        : null)}
                </div>
            </div>
        </section>
    )
}

export default Work