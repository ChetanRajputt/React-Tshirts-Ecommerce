import React from 'react';
import Button from '../Button';

const NewsLetterSection = () => {

    const leftstyles = {
        backgroundImage: 'url("https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/s/d/d/s-jc23-polo-fs-black-california-jump-cuts-original-imagz5y4jnz6h2nj.jpeg?q=70")',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    }

    return (
        <section className='w-full h-[60vh] bg-[#F5F5F5] lg:mt-32 flex flex-col lg:flex-row items-center justify-around py-8'>

            <div className='relative w-full h-full lg:w-1/2' style={leftstyles}>
                <div className='absolute inset-0 bg-gray-800 opacity-50'></div>
                <div className='relative flex flex-col items-center justify-center w-full h-full gap-3 px-4 py-10 text-center lg:pl-16 lg:py-0 lg:items-start lg:text-left'>
                    <h2 className='text-2xl font-semibold text-white tekoFont lg:text-5xl'>
                        Printed Tshirt For $25!
                    </h2>
                    <p className='text-white'>
                        Nam at congue diam. Etiam erat lectus, finibus eget commodo.
                    </p>
                    <Button className='mt-8 text-white border-white'>Order Now</Button>
                </div>
            </div>

            <div className='relative w-full h-full bg-cover lg:w-1/2 ' style={{backgroundImage:'url("https://websitedemos.net/custom-printing-04/wp-content/uploads/sites/222/2018/06/mug-yellow-768x768.jpg")'}}>
                <div className='absolute inset-0 bg-gray-300 opacity-50'></div>
                <div className='relative flex flex-col items-center justify-center w-full h-full gap-3 px-4 py-10 text-center lg:pl-16 lg:py-0 lg:items-start lg:text-left'>
                    <h2 className='text-[#415161] tekoFont text-2xl lg:text-5xl font-semibold'>
                        Printed Mug For $15!
                    </h2>
                    <p>
                        Nam at congue diam. Etiam erat lectus, finibus eget commodo.
                    </p>
                    <Button className='mt-8'>Explore Designs</Button>
                </div>
            </div>
        </section>
    );
}

export default NewsLetterSection;
