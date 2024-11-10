import React from "react";
import '../app/styles/hero.css'
import Navbar from "@/components/Navbar" 
import Image from 'next/image';
const Hero = () => {
    return (
        <div>
        <Navbar/>     
<div className="hero-content">

    <div className="hidden lg:block"></div>
    
    <div className="hero-text">
        <div className="hero-msin">
        <Image
                className="round-image"
                src="/IMG.png"
                alt="pic"
                width={100}
                height={100}/>
            <p data-aos="zoom-in-up">I&apos;m Laraib Rizwan</p>

</div> 
</div>
            </div>
</div>
    );
};
export default Hero;