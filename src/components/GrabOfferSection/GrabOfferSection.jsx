import React from 'react'
import Button from '../Button'

const GrabOfferSection = () => {
    return (
        <section className='bg-[#F2295B] '>
            <div className='container w-full flex flex-col lg:flex-row justify-between items-center text-white py-12 h-[30vh]'>
                <h2 className='tekoFont lg:text-5xl text-3xl'>
                    Grab This Limited Time Offer
                </h2>
                <Button borderColor='border-white' toggle={true} >Order Now</Button>
            </div>
        </section>
    )
}

export default GrabOfferSection
