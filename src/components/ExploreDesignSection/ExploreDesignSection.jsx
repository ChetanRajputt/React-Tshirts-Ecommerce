import React from 'react'
import Button from '../Button'

const ExploreDesignSection = () => {
    const img = "https://websitedemos.net/custom-printing-04/wp-content/uploads/sites/222/2018/06/mug-blue-768x768.jpg"
    return (
        <section className='w-full container flex flex-col items-center lg:flex-row px-2'>
            <div className='w-full lg:w-1/2 flex flex-col items-center lg:items-start gap-3'>
                <h2 className='text-[#415161] tekoFont text-2xl lg:text-5xl font-semibold'>
                    Hundreds Of Ready Designs To Choose From
                </h2>
                <p className='text-center lg:text-left'>
                    Nam at congue diam etiam erat lectus, finibus eget commodo quis, congue diam etiam erat lectus.
                </p>
                <Button className='mt-8'>Explore Designs</Button>
            </div>
            <div className='w-full lg:flex justify-end lg:w-1/2'>
                <img className='lg:w-[80%] bg-pink-50' src={img} alt="Design preview" />
            </div>
        </section>
    )
}

export default ExploreDesignSection
