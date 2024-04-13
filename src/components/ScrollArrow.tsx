import React from 'react'
import Image from 'next/image'
import arrowDown from '../../public/assets/icons/arrowDown.png'

const ScrollArrow = () => {
    return (
        <div className='absolute bottom-[73px] left-[60px] w-[40px] h-[89px] gap-[8px] flex flex-col items-center'>
            <p className='rotate-[-90deg] text-[#909090] font-normal text-lg -leading-[40px]'>Scroll</p>
            <div className='w-[32px] h-[32px]'>
                <Image className='w-full h-full' src={arrowDown} alt="arrow icon" />
            </div>
        </div>
    )
}

export default ScrollArrow