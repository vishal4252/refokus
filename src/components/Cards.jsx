import React from 'react'
import Card from './Card'

const Cards = () => {
    return (
        <section className='w-full'>
            <div className='max-w-screen-xl mx-auto py-20 px-3 lg:px-0 flex flex-col-reverse lg:flex-row gap-1 lg:gap-2'>
                <Card width={"basis-1/3"} height={"min-h-[13rem] lg:min-h-[28rem]"} startBtn={false} para={true} />
                <Card width={"basis-2/3"} height={"min-h-[28rem]"} startBtn={true} para={false} hover="true" />
            </div>
        </section>
    )
}

export default Cards