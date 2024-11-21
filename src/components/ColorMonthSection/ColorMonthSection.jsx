import React from 'react'
const img = "https://assets.ajio.com/medias/sys_master/root/20240704/s1DQ/668642761d763220fad0306c/-473Wx593H-465746782-black-MODEL3.jpg"

const ColorMonthSection = () => {
    return (
        <section className='bg-[#F5F5F5] w-full mt-12 pt-8 lg:pt-4'>
            <div className='container flex flex-col-reverse items-center justify-center gap-5 lg:flex-row'>
                {/* left section  */}
                <div className='flex justify-center w-full lg:w-1/2'>
                    <img className='w-[250px] lg:w-[400px]' src={img} loading='lazy' />
                </div>
                {/* right section  */}
                <div className='w-full lg:w-1/2'>
                    <div className='flex flex-col items-center justify-center gap-5 px-6 lg:px-0 lg:items-start lg:gap-8 '>
                        <h2 className='text-3xl font-bold tekoFont lg:text-5xl'>#ColorOfTheMonth</h2>
                        <p className='text-center lg:text-left'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.                        </p>
                        <h3 className='text-3xl font-bold tekoFont lg:text-5xl'>Just ₹
                        35!!!</h3>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ColorMonthSection
