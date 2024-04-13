import React from 'react'
import Image from 'next/image'
import heroImage from '../assets/heroImage.png'


const HeroImage = () => {
    return (
        <section className='absolute w-[808px] h-screen inset-y-0 right-0'>
            <div className='absolute w-full h-full top-0 left-0'>
                <Image  src={heroImage} alt="logo icon" />
            </div>
            <button 
            className='absolute top-[30px] right-[160px] bg-[#515DEF] font-normal text-2xl text-[#FBFBFB] w-[149px] h-[60px]'
            type="button">Contact Us</button>
        </section>
    )
}

export default HeroImage