import React from 'react';
import '../../css/footer.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
 
const Footer = () => {
    return (
        <footer>
            <ul>
                <li> 
                    <a href="https://www.linkedin.com/in/kellyscottwhite">
                        <FontAwesomeIcon icon={['fab', 'linkedin']} />
                    </a> 
                </li>
                <li> 
                    <a href="https://www.instagram.com/kellyscottw/">
                        <FontAwesomeIcon icon={['fab', 'instagram']} />
                    </a> 
                </li>
            </ul>
            <p className="copyright">Copyright © Kelly White 2021</p>
        </footer>
    );
}
 
export default Footer;