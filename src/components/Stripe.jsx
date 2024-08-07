import React from 'react'

const Stripe = ({ stripesData }) => {
    const { url, number } = stripesData
    return (
        <div className='w-[60%] lg:w-[20%] flex items-center justify-between flex-shrink-0 py-5 px-6 border-r-[1px] border-zinc-500'>
            <img src={url} alt="" srcset="" />
            <span className='font-semibold'>{number}</span>
        </div>
    )
}

export default Stripe