import React from 'react';
import Container from '../MyComponents/Container';
import logo from "../assets/logo.png"
import { Link } from 'react-router';
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
    return (
        <div>
            <div className='bg-base-200'>
                <Container className="footer sm:footer-horizontal text-base-content p-10">
                    <aside>
                        <Link to={"/"} className="flex justify-center items-center gap-3 text-xl">
                            <img className='w-10 h-10' src={logo} alt="" />
                            <span className='text-gradient font-bold'>Study Mate</span>
                        </Link>
                        <p>StudyMate is an online learning <br /> platform that helps students collaborate, <br />share resources, and study more effectively.</p>
                    </aside>
                    <nav>
                        <h6 className="footer-title">Services</h6>
                        <a className="link link-hover">Partners</a>
                    </nav>
                    <nav>
                        <h6 className="footer-title">Company</h6>
                        <a className="link link-hover">About us</a>
                        <a className="link link-hover">Contact</a>
                    </nav>
                    <nav>
                        <h6 className="footer-title">Social</h6>
                        <div className='grid grid-flow-col gap-4'>

                            <a target='_blank' href='https://www.facebook.com/' className="link link-hover text-2xl"><FaFacebook /></a>
                            <a target='_blank' href='https://x.com/' className="link link-hover text-2xl"><FaXTwitter /></a>
                            <a target='_blank' href='https://www.linkedin.com/' className="link link-hover text-2xl"><FaLinkedin /></a>
                            <a target='_blank' href='https://www.instagram.com/' className="link link-hover text-2xl"><FaInstagram /></a>
                        </div>
                    </nav>
                </Container>
                <div className="footer sm:footer-horizontal footer-center bg-base-300 text-base-content p-4">
                    <Container>
                        <p>Copyright © {new Date().getFullYear()} - All right reserved by STUDY Mate Ltd</p>
                    </Container>
                </div>
            </div>
        </div>
    );
};

export default Footer;