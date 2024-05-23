import { FaTwitter, FaDiscord, FaInstagram } from "react-icons/fa";

const SOCIALS = [
  { title: 'Twitter', icon: FaTwitter, link: 'https://x.com/shelteronsol' },
  { title: 'Instagram', icon: FaInstagram, link: 'https://www.instagram.com/rescatapelos' },
  { title: 'Discord', icon: FaDiscord, link: 'https://discord.gg/uhptBeswtc' },
]

const Footer = () => {
  return (
    <footer className="mx-auto mt-20 max-w-7xl overflow-hidden px-6 pb-10 sm:mt-32 sm:pb-12 lg:px-8">
      <div className="mt-5 flex justify-center space-x-5">
        {SOCIALS.map((social, index) => (
          <a key={index} href={social.link} target="_blank" rel="noreferrer" className="text-white hover:text-gold transition-all duration-300">
            <social.icon size={18} />
          </a>
        ))}
      </div>
      <p className="mt-5 text-center text-xs leading-5 text-white">
        &copy; {new Date().getFullYear()} Shelter. All Rights Reserved.
      </p>
    </footer>
  )
}

export default Footer