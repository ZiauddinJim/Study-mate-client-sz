import React from 'react';
import Container from '../MyComponents/Container';

const Footer = () => {
    return (
        <div>
            <div className='bg-base-200'>
                <Container className="footer sm:footer-horizontal text-base-content p-10">
                    <aside>
                        <img src="" alt="" />
                        <p>
                            ACME Industries Ltd.
                            <br />
                            Providing reliable tech since 1992
                        </p>
                    </aside>
                    <nav>
                        <h6 className="footer-title">Services</h6>
                        <a className="link link-hover">Partners</a>
                        <a className="link link-hover">Design</a>
                        <a className="link link-hover">Marketing</a>
                        <a className="link link-hover">Advertisement</a>
                    </nav>
                    <nav>
                        <h6 className="footer-title">Company</h6>
                        <a className="link link-hover">About us</a>
                        <a className="link link-hover">Contact</a>
                    </nav>
                    <nav>
                        <h6 className="footer-title">Legal</h6>
                        <a className="link link-hover">Terms of use</a>
                        <a className="link link-hover">Privacy policy</a>
                        <a className="link link-hover">Cookie policy</a>
                    </nav>
                </Container>
                <div className="footer sm:footer-horizontal footer-center bg-base-300 text-base-content p-4">
                    <Container>
                        <p>Copyright © {new Date().getFullYear()} - All right reserved by ACME Industries Ltd</p>
                    </Container>
                </div>
            </div>
        </div>
    );
};

export default Footer;