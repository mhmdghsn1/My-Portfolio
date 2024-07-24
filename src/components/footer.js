import React, { useState } from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';

const Footer = () => {
const [activeLink, setActiveLink] = useState(null);

const handleClick = (link) => {
    setActiveLink(link);
};

return (
    <header className="custom-header">
    <div className="custom-social-channels">
        <ul>
        <li><a href="www.linkedin.com/in/mhmd-ghosn-21804a200"><LinkedInIcon/></a></li>
        <li><a href="https://wa.me/96170845264"><WhatsAppIcon/></a></li>
        <li><a href="https://github.com/mhmdghsn1"><GitHubIcon/></a></li>
        <li><a href='https://mail.google.com/mail/u/0/#inbox'><EmailIcon/></a></li>
        </ul>
    </div>
    </header>
);
};

export default Footer;