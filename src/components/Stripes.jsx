import React from 'react'
import Stripe from './Stripe'

const Stripes = () => {
    const data = [
        {
            url: "https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/63c9ce90a51cd7cf6b3689fb_css-design-awards-logos-id1L9L8Yvp%201.svg",
            number: 48
        },
        {
            url: "https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/63d6e83420934a94d642103b_NCC2021_LogoLockup%201.svg",
            number: 2
        },
        {
            url: "https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/63c9ce90a51cd75d563689fd_Awwards-logotype-2018%201.svg",
            number: 11
        },
        {
            url: "https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/63c9ce90a51cd7cf6b3689fb_css-design-awards-logos-id1L9L8Yvp%201.svg",
            number: 48
        },
        {
            url: "https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/63d6e83420934a94d642103b_NCC2021_LogoLockup%201.svg",
            number: 2
        },
        {
            url: "https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/63c9ce90a51cd75d563689fd_Awwards-logotype-2018%201.svg",
            number: 11
        },
    ]

    return (
        <section className='w-full flex items-center border-y-[1px] border-zinc-500 my-24 overflow-hidden'>
            {data.map((item, index) => <Stripe stripesData={item} key={index} />)}
        </section>
    )
}

export default Stripes