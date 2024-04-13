import { tasksData } from '@/constants/tasks'
import React from 'react'
import Card from './Card'

const HeroServices = () => {
    return (
        <section>
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
        </section>
    )
}

export default HeroServices