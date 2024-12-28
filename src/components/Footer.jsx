import React from 'react'
import { FaDiscord, FaGithub, FaInstagram, FaLinkedin, FaTwitch, FaTwitter } from 'react-icons/fa'
import { FaLink } from 'react-icons/fa6'

const links = [
  { href: 'https://twitter.com', icon: <FaTwitter />},
  { href: 'https://github.com', icon: <FaGithub />},
  { href: 'https://linkedin.com', icon: <FaLinkedin />},
  { href: 'https://instagram.com', icon: <FaInstagram />},
  { href: 'https://twitch.com', icon: <FaTwitch />},
  { href: 'https://discord.com', icon: <FaDiscord />}
]

const Footer = () => {
  return (
    <footer className="w-screen bg-violet-300 py-4 text-black ">
        <div className="continer mx-auto flex flex-col items-center justify-between gap-4 px-8  md:flex-row">
            <p className="text-center text-lg md:text-left hover:text-white">
              &copy;something 2024. All rights reserved
            </p>
            <div className="flex justify-center gap-4 md:justify-start  text-lg">
                  {links.map((links)=>(
                    <a key={links} href={links.href} target="_blank" rel="noopener noreferrer" className="text-black transition-colors duration-500 ease-in-out hover:text-white">
                      {links.icon}
                    </a>
                  ))}
            </div>
                    <a href="#privacy-policy" className="text-center text-lg hover:underline hover:text-white md:text-right flex row gap-1">
                      Privacy Policy<FaLink />
                    </a>
        </div>
    </footer>
  )
}

export default Footer