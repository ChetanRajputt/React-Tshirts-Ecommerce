import React from 'react';
import Button from '../Button';

const Hero = () => {
    const productImage = "https://assets.ajio.com/medias/sys_master/root/20240704/3H1R/6686443f6f60443f31561ea2/-473Wx593H-465746782-black-MODEL2.jpg"
    

    return (
        <div className="w-full mt-24 overflow-hidden lg:mt-8">
            <div className="container flex flex-col items-center px-8 gap-7 lg:justify-between lg:flex-row">
                {/* Left Section */}
                <div className="flex flex-col items-center gap-3 lg:items-start lg:gap-6">
                    <h1 className="tekoFont hidden lg:block text-[#415161] lg:text-8xl font-semibold">T-Shirts & Mugs</h1>
                    <h1 className="lg:hidden tekoFont text-[#415161] text-4xl font-semibold">Shop T-Shirts & Mugs</h1>
                    <p className="barlowFont text-[#67727D] text-center lg:text-left text-sm lg:text-[16px] leading-loose font-[500]">
                        Discover stylish T-shirts and trendy mugs that match your vibe. <br /> Perfect for gifting or adding to your collection.
                    </p>
                    <Button>Shop Now</Button>
                </div>

                {/* Right Section */}
                <div className="ml-6">
                    <img
                        src={productImage}
                        alt="T-Shirts and Mugs"
                        loading="lazy"
                        className="object-cover rounded-lg"
                    />
                </div>
            </div>
        </div>
    );
};

export default Hero;
