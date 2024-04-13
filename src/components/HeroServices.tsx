import { tasksData } from '@/constants/tasks'
import React from 'react'
import Card from './Card'

const HeroServices = () => {
    return (
        <section className='service_container w-[1352px] h-[297px]'>
            <div className='cards_container ml-[160px] h-full'>
                {
                    tasksData.map((task) => (
                        <Card
                            key={task.title}
                            icon={task.icon}
                            title={task.title}
                            description={task.description}
                        />
                    ))
                }
            </div>
        </section>
    )
}

export default HeroServices