import React from 'react'
import Image from 'next/image'
import { ITasks } from '@/interfaces'

const Card = ({ icon, description, title }: ITasks) => {
    return (
        <section className='flex flex-col justify-between w-[328px] h-[177px] items-start gap-[24px]'>
            <div className='w-[64px] h-[64px]'>
                <Image className='w-full h-full' src={icon} alt={`${title} icon`} />
            </div>
            <div className='flex flex-col  w-full items-start gap-[8px]'>
                <h3 className='font-bold text-lg leading-[27px] text-[#333333]'>{title}</h3>
                <p className='font-normal text-lg leading-[27px] text-[#909090]'>{description}</p>
            </div>
        </section>
    )
}

export default Card