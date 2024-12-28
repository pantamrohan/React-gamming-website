import React from 'react'
import Button from './Button';
import { FaLink } from 'react-icons/fa';

const ImageClipBox = ({src, clipClass}) => (
  <div className={clipClass}>
       <img src={src} alt="" />
    </div>
)


const Contact = () => {
  return (
    <div id="contact" className="my-20 min-h-96 max-w-screen px-10">
        <div className="relative rounded-lg bg-black  py-24 text-blue-50 sm:overflow-hidden">
                <div className="absolute -left-20 top-0 hidden h-full w-72 overflow-hidden sm:block lg:left-20 lg:w-96 ">
                    <ImageClipBox clipClass="contact-clip-path-1"
                    src="img/contact-1.webp"/>
                    <ImageClipBox clipClass="contact-clip-path-2 translate-y-60 lg:translate-y-60"
                    src="img/contact-2.webp"/>
                </div>
                <div className="absolute -top-40 left-20 w-60 sm:top-1/2 md:left-auto md:right-2 lg:top-20 lg:w-80">
                    <ImageClipBox 
                    src="img/swordman-partial.webp"
                    clipClass="absolute md:scale-115"/>
                    <ImageClipBox 
                    src="img/swordman.webp"
                    clipClass="sword-man-clip-path md:scale-115 "/>
                </div>

                <div className="flex flex-col items-center text-center">
                    <p className="font-general text-[20px] uppercase">join zentry</p>
                    <p className="special-font mt-10 w-full font-zentry text-5xl leading-[0.9] md:text-[6rem] md:z-10  mix-blend-difference">
                      let's b<b>u</b>ild the <br /> new era of <br />g<b>a</b>mming together </p>
                      <Button
                      title="contact us" containerClass="mt-10 cusror-pointer" />
                </div>
        </div>
        <div className="relative items-center text-center pt-10 ">
          <p className="font-general text-lg">this website is inspired by <a href="https://zentry.com/" target="_blank" className="text-blue-500 hover:underline hover:text-black">zentry.com</a> check it out</p>
        </div>
    </div>
  )
}

export default Contact
