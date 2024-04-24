import React from 'react'
import { GrInstagram } from "react-icons/gr";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import './Footer.scss';
import creditCardImage from '../../assets/creditcardicons.png';
const Footer = () => {
  return (
    <footer className='Footer'>
        <div className='container'>
            <div className='content'>
                <div className='footer-left'>
                    <h3 className='title'>Follow us</h3>
                    <ul className='follow'>
                        <li className='hover-link center'>
                        <GrInstagram />
                        </li>
                        <li className='hover-link center'>
                        <FaFacebook />
                        </li>
                        <li className='hover-link center'>
                        <FaTwitter />
                        </li>
                        <li className='hover-link center'>
                        <FaTwitter />
                        </li>
                        <li className='hover-link center'>
                        <IoIosMail />
                        </li>
                        
                    </ul>
                </div>
            <div className="footer-right">
                <h3 className='title'>Company</h3>
                <ul className='company'>
                    <li className='hover-link'>Contact Us</li>
                    <li className='hover-link'>Privary Policy</li>
                    <li className='hover-link'>Returns And Exchange Policy</li>
                    <li className='hover-link'>Shipping Policy</li>
                    <li className='hover-link'>Terms $ Conditions</li>
                </ul>
            </div>
      </div>
       <div className='subfooter center'>
           <div className='credit-card-img'>
            <img src={creditCardImage} alt="credit card"/>
           </div>
           <p>Copyright {new Date().getFullYear()} © <strong>HeroHaven.</strong></p>
       </div>
      </div>
      </footer>
  )
}

export default Footer
