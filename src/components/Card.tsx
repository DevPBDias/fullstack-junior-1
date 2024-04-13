import React from 'react'
import Image from 'next/image'
import { ITasks } from '@/interfaces'

const Card = ({ icon, description, title }: ITasks) => {
    return (
        <section className='flex_vetical_bw w-[328px] h-[177px] items-start gap-[24px]'>
            <div className='w-[64px] h-[64px]'>
                <Image className='img_size' src={icon} alt={`${title} icon`} />
            </div>
            <div className='card_txt_container'>
                <h3 className='card_title'>{title}</h3>
                <p className='card_description'>{description}</p>
            </div>
        </section>
    )
}

export default Card