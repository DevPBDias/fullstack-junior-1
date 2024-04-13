import React from 'react'
import Image from 'next/image'
import arrow from '../assets/Arrow.svg'

const HeroText = () => {
    return (
        <section className='mt-[40px] flex flex-col ml-[160px] gap-4 justify-start'>
            <p className='font-normal text-2xl text-[#FBFBFB]'>
                Hi, There!
            </p>
            <h1 className='font-bold text-[64px] text-[#FBFBFB]'>
                We are a growing-up
                <br />
                Creative Agency from
                <br />
                Indonesia!
            </h1>
            <p className='font-normal text-2xl text-[#FBFBFB] leading-10'>
                We provides you with modest and professional design templates
                <br />
                that come from the synergy of design and technology
            </p>
            <button
            className='flex flex-row gap-x-[8px] p-[16px] items-center h-[80px] w-[299px] bg-[#FBFBFB] justify-center font-normal text-2xl text-[#333333] leading-10'
            type='button'>
                Let’s Collaborate
                <Image className='w-[48px] h-[48px]' src={arrow} alt="arrow icon" />
            </button>
        </section>
    )
}

export default HeroText