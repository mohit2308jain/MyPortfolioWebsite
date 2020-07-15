import React from 'react';

import '../stylesheets/Footer.css';

class Footer extends React.Component{

    render(){
        return(
            <footer className="footer">
            <a href="mailto:mohitjain5000@gmail.com" className="footer__link">mohitjain5000@gmail.com</a>
            <ul className="social-list">
                <li className="social-list__item">
                    <a className="social-list__link" href="https://www.facebook.com/profile.php?id=100002437404460">
                        <i className="fa fa-facebook"></i>
                    </a>
                </li>
                <li className="social-list__item">
                    <a className="social-list__link" href="https://medium.com/@mohitjain5000">
                        <i className="fa fa-medium"></i>
                    </a>
                </li>
                <li className="social-list__item">
                    <a className="social-list__link" href="https://www.linkedin.com/in/mohit-jain-23081998/">
                        <i className="fa fa-linkedin"></i>
                    </a>
                </li>
                <li className="social-list__item">
                    <a className="social-list__link" href="https://github.com/mohit2308jain">
                        <i className="fa fa-github"></i>
                    </a>
                </li>
            </ul>
        </footer>
        )
    }
}

export default Footer;