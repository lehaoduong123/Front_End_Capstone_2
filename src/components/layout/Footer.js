import {
    faFacebook,
    faTwitter,
    faInstagram,
    faYoutube
} from '@fortawesome/free-brands-svg-icons'

import{ faEnvelope,
        faLocationDot,
        faPhone
} from '@fortawesome/free-solid-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import '.Footer.css';
import logWhiteImage from './assets/logo-white.png';
import pages from '../../utils/pages';

const contacts = [
    {icon: faLocationDot, text: '1234 North West Street, Suite 1234'},
    {icon: faPhone, text: '123-456-7890'},
    {icon:faEnvelope, info: 'customer@littlelemon.com',},
];

const socials = [
    {icon: faFacebook, link: 'https://www.facebook.com', name: 'Facebook'},
    {icon: faTwitter, link: 'https://www.twitter.com', name: 'Twitter'},
    {icon: faInstagram, link: 'https://www.instagram.com', name: 'Instagram'},
    {icon: faYoutube, link: 'https://www.youtube.com', name: 'Youtube'},
];

const  navLinks = Array.from(pages.values()).filter(page => page.anchorable);

const Footer = () => {
    return(
        <footer className="site-footer">
            <div className="container grid"> 
                <img className= 'site-footer-logo' src={logoWhiteImage} alt="Little Lemon Logo"/>
                <nav className="site-footer-nav"> 
                    <h4>Sitemap</h4>
                    <ul>
                        {navLinks.map((page, index) => (
                            <li key={index}>
                                <Link to={page.path}>{page.name}</Link>
                            </li>
                        ))}
                    </ul>
                </nav> 
                <div className="site-footer-contacts">
                    <h4>Contact Us</h4>
                    <address>
                        {contacts.map((contact, index) => (
                            <p key={index}>
                                <FontAwesomeIcon icon={contact.icon}/> {contact.info}
                            </p>
                        ))}
                    </address>
                </div>
                <div className="site-footer-socials">
                    <h4>Follow Us</h4>
                    {socials.map((social, index) => 
                        <a key={index} href={social.link}>
                        <FontAwesomeIcon icon={social.icon} size='lg' />
                        </a>
                    )}
                </div>
            </div>
        </footer>
    )
}

export default Footer;