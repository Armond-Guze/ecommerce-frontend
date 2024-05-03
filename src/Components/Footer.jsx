import React from "react";

import { SiTwitter } from "react-icons/si";
// import { FaSquareInstagram } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaDribbbleSquare } from "react-icons/fa";

const Footer = () => {
    return (
      <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300'>
        <div>
          <h1 className='w-full text-3xl font-bold text-[#00df9a]'>REACT.</h1>
          <p className='py-4'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id odit ullam iste repellat consequatur libero reiciendis, blanditiis accusantium.</p>
          <div className='flex justify-between md:w-[75%] my-6'>
              <FaSquareFacebook size={30} />
              <FaInstagramSquare size={30} />
              <SiTwitter size={30} />
              <FaGithub size={30} />
              <FaDribbbleSquare size={30} />
          </div>
        </div>
        <div className='lg:col-span-2 flex justify-between mt-6'>
      <div>
          <h6 className='font-medium text-gray-400'>Solutions</h6>
          <ul>
              <li className='py-2 text-sm'>Analytics</li>
              <li className='py-2 text-sm'>Marketing</li>
              <li className='py-2 text-sm'>Commerce</li>
              <li className='py-2 text-sm'>Insights</li>
          </ul>
      </div>
      <div>
          <h6 className='font-medium text-gray-400'>Support</h6>
          <ul>
              <li className='py-2 text-sm'>Pricing</li>
              <li className='py-2 text-sm'>Documentation</li>
              <li className='py-2 text-sm'>Guides</li>
              <li className='py-2 text-sm'>API Status</li>
          </ul>
      </div>
      <div>
          <h6 className='font-medium text-gray-400'>Company</h6>
          <ul>
              <li className='py-2 text-sm'>About</li>
              <li className='py-2 text-sm'>Blog</li>
              <li className='py-2 text-sm'>Jobs</li>
              <li className='py-2 text-sm'>Press</li>
              <li className='py-2 text-sm'>Careers</li>
          </ul>
      </div>
      <div>
          <h6 className='font-medium text-gray-400'>Legal</h6>
          <ul>
              <li className='py-2 text-sm'>Claim</li>
              <li className='py-2 text-sm'>Policy</li>
              <li className='py-2 text-sm'>Terms</li>
          </ul>
      </div>
        </div>
      </div>
    );
  };

export default Footer;
