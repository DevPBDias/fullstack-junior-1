import { tasksData } from '@/constants/tasks'
import React from 'react'
import Card from './Card'

const HeroServices = () => {
    return (
        <section className='absolute bottom-0 left-0 bg-[#FBFBFB] w-[1352px] h-[297px]'>
            <div className='flex flex-row gap-[24px] items-center m-auto ml-[160px] h-full'>
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