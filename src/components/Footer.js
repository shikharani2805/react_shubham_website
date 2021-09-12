import React from 'react';
import {Link} from 'react-router-dom';
import {Row,Col} from 'react-bootstrap'

const Footer = () => {
    return (
        <>
         <div className="footer-bg-color">
            <p className="footer-text-color-h"><br />
                {/* <div class="footer-grid-container"> */}
                <Row>
                    <Col sm={2}>
                    <p><h3><b>Features</b></h3></p>
                    <p>
                        <Link to="/">Security</Link><br />
                        <Link to="/">Quality</Link><br />
                        <Link to="/">TAT</Link><br />
                        <Link to="/">Benefits</Link><br />
                    </p>
                    </Col> 
                    <Col sm={2}>
                    <p><h3><b>Quick Links</b></h3></p>
                    <p>
                        <Link to="/">Home</Link><br />
                        <Link to="/">Testimonnials</Link><br />
                        <Link to="/">Pricing</Link><br />
                        <Link to="/">Articles</Link><br />
                    </p>
                    </Col>
                    <Col sm={2}>
                    <br /><br />
                    <p>
                        <Link to="/">White Paper</Link><br />
                        <Link to="/">Case Studies</Link><br />
                        <Link to="/">Contact Us</Link><br />
                    </p>
                    </Col>
                    <Col sm={2}>
                    <br /><br />
                    <p>
                        <Link to="/">About Us</Link><br />
                        <Link to="/">Privacy Policy</Link><br />
                        <Link to="/">Sitemap</Link><br />
                    </p>
                    </Col>
                    </Row>
                {/* </div> */}
            </p>
            <div className="twelve-bg-color">
                <a href="#" className="fa fa-facebook"></a>
                <a href="#" className="fa fa-twitter"></a>
                <a href="#" className="fa fa-google"></a>
                <a href="#" className="fa fa-linkedin"></a>
                <a href="#" className="fa fa-youtube"></a>
                <a href="#" className="fa fa-instagram"></a>
                <a href="#" className="fa fa-pinterest"></a>
            </div>  
        </div>
        <div className="last-bg-color">
        <div className="container">
            <p>© 2021 www.videocaddy.com. All rights reserved</p>
        </div>
        </div>
        </>
    )
}

export default Footer;