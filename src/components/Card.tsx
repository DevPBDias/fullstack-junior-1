import React from 'react'
import Image from 'next/image'
import { ITasks } from '@/interfaces'

const Card = ({ icon, description, title }: ITasks) => {
    return (
        <section>
            <div>
                <Image src={icon} alt="logo icon" />
            </div>
            <h3>{title}</h3>
            <p>{description}</p>
        </section>
    )
}

export default Card