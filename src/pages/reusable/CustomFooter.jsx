import send from '../assets/gmail.png';
import logo from '../assets/logo.png';
import twitter from '../assets/twitter.png';
import instagram from '../assets/instagram.png';
import facebook from '../assets/facebook.png';
import linkedIn from '../assets/linkedin.png';
import phone from '../assets/call.png';
import loc from '../assets/location.png';
import whatsapp from '../assets/whatsapp.png';
import { Link } from 'react-router-dom';
import { FaWhatsapp, FaTwitter, FaEnvelope } from 'react-icons/fa';

export default function CustomFooter() {
    return (
        <footer className='bg-blue-900 py-6 text-white'>
            <div className=' mx-10  flex justify-between sm:flex-col'>
                
                <div className='flex-1 min-w-[200px]'>
                    
                    <img src={logo} alt='Logo' className='h-12 mb-4' />
                    <div className='flex items-center mb-2'>
                        <div >
                        <a href='nttps://wa.me/0799094239' aria-label='WhatsApp'>
                        <FaWhatsapp size={20} color='#FFFFFF' className='mr-2'/>
                        
                        </a>
                        </div>
                        <p className='text-sm font-semibold'>Chat with us</p>
                    </div>
                    <div className='flex items-center mb-2'>
                        
                        <a href='https://x.com/kivuvo_patrick?t=QOcwGfrFDjoIysCWDsgLjA&s=09' aria-label='Twitter'>
                        <FaTwitter size={20} color='#FFFFFF'className='mr-2'/>
                        
                        </a>
                        <p className='text-sm font-semibold'>Message us on X</p>
                    </div>
                    <div className='flex items-center mb-2'>
                    <a href='mailto:jemutaipicoty@gmail.com' aria-label='Email'>
                        <FaEnvelope size={20} color='#FFFFFF' className='mr-2'/>
                        
                        </a>
                        <p className='text-sm font-semibold'>Email us</p>
                     </div>
                </div>
                
                

                <div className='flex-1 min-w-[200px] mt-4 mb-2'>
                    <p className='font-bold mb-2'>Social Info</p>
                    <p className='text-sm mb-2'>Our social media links</p>
                    <div className='flex gap-4 mb-4'>
                        <Link to='#'><img src={twitter} alt='Twitter' className='h-4' /></Link>
                        <Link to='#'><img src={instagram} alt='Instagram' className='h-4' /></Link>
                        <Link to='#'><img src={facebook} alt='Facebook' className='h-4' /></Link>
                        <Link to='#'><img src={linkedIn} alt='LinkedIn' className='h-4' /></Link>
                    </div>
                    <p className='font-bold mb-2'>Contact Us</p>
                    <div className='flex items-center mb-4'>
                        <img src={phone} alt='Phone' className='h-3 mr-2' />
                        <a href="tel:+254713248097" className='text-sm font-semibold'>+254713248097</a>
                    </div>
                </div>
                <div className='flex-1 min-w-[200px] mb-2'>
                <p className='font-bold mb-2'>Quick Links</p>
                <ul className='list-disc list-inside'>
                    <li><a href='/' className='permalink no-underline hover:underline'>Home</a></li>
                    <li><a href='/about' className='permalink no-underline hover:underline'>About Us</a></li>
                    <li><a href='/services' className='permalink no-underline hover:underline'>Our Services</a></li>
                    <li><a href='/contacts' className='permalink no-underline hover:underline'>Contact us</a></li>
                </ul>


                </div>
                <div className='flex-1 min-w-[200px] mt-4 mb-4'>
                    <p className='font-bold mb-2'>Our Services</p>
                    <ul className='list-disc list-inside'>
                        <li className='text-sm mb-1'>App Development</li>
                        <li className='text-sm mb-1'>Web Development</li>
                        <li className='text-sm'>Management System Development</li>
                        <li className='text-sm'>USSD Codes</li>
                        <li className='text-sm'>Bluck Sms</li>


                    </ul>
                </div>
                
                

                <div className='flex-1 min-w-[200px] mb-2'>
                    <p className='font-bold mb-2'>Visit Us</p>
                    <p className='text-sm mb-2'>Chat with us in person at our Thika HQ</p>
                    <div className='flex items-center'>
                        <img src={loc} alt='Location' className='h-3 mr-2' />
                        <p className='text-sm font-semibold'>CodeWorks Solution Floor, Juja Road</p>
                    </div>
                </div>


            </div>

            <div className='bg-blue-800 py-4 text-center text-sm mt-6'>
                <small>&copy; 2024 CODEWORKS, Designed and Developed by CODEWORKS</small>
            </div>
        </footer>
    );
}
