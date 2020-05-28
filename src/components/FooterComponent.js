import React from 'react';
import '../stylesheets/FooterComponent.css';

class Footer extends React.Component{

    render(){
        return(
            <footer class="footer">
            <a href="mailto:mohitjain5000@gmail.com" class="footer__link">mohitjain5000@gmail.com</a>
            <ul class="social-list">
                <li class="social-list__item">
                    <a class="social-list__link" href="https://codepen.io">
                        <i class="fa fa-facebook"></i>
                    </a>
                </li>
                <li class="social-list__item">
                    <a class="social-list__link" href="https://medium.com/@mohitjain5000">
                        <i class="fa fa-medium"></i>
                    </a>
                </li>
                <li class="social-list__item">
                    <a class="social-list__link" href="https://www.linkedin.com/in/mohit-jain-23081998/">
                        <i class="fa fa-linkedin"></i>
                    </a>
                </li>
                <li class="social-list__item">
                    <a class="social-list__link" href="https://github.com/mohit2308jain">
                        <i class="fa fa-github"></i>
                    </a>
                </li>
            </ul>
        </footer>
        )
    }
}

export default Footer;