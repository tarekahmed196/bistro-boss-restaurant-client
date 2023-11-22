import React from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import featuredImg from '../../../assets/home/featured.jpg'
import './Featured.css'

const Featured = () => {
    return (
        <div className='featured-item bg-fixed  text-white pt-8 my-20'>
    <SectionTitle className="mb-10" subHeading={"Check it out"} heading={"Featured Item"}></SectionTitle>
    <div className='md:flex justify-center items-center bg-gradient-to-t from-[#151515] to-[rgba(21,21,21,0)]  pb-20 pt-12 px-36'>
        <div>
            <img src={featuredImg} alt="" />
        </div>
        <div className='md:ml-10'>
            <p>Nov 17, 2023</p>
            <p className="uppercase">Where can I get some?</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid vel exercitationem explicabo at? Facilis, non neque itaque aspernatur sunt, totam ea quia quidem id obcaecati commodi voluptate nostrum enim? Architecto consequuntur corrupti impedit voluptates cupiditate est repudiandae optio aliquam consequatur.</p>
            <button className='btn btn-outline border-0 border-b-4 mt-4'>Order Now</button>
        </div>
    </div>
</div>
    );
};

export default Featured;