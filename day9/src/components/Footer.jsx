import React from 'react';
import '../assets/css/Footer.css'
import { Link } from 'react-router-dom';
import { Facebook,Instagram, Mail } from 'lucide-react';
const Footer = () => {
  return (
    <footer className="footer">
      <div className="waves">
        <div className="wave" id="wave1"></div>
        <div className="wave" id="wave2"></div>
        <div className="wave" id="wave3"></div>
        <div className="wave" id="wave4"></div>
      </div>
      <div className="footer-col-1">
        <h4>company</h4>
        <ul>
          <li><Link to={'/Terms'}>terms & conditions</Link></li>
          <li><Link to={'/PrivacyPolicy'}>privacy policy</Link></li>
        </ul>
      </div>
      <div className="footer-col-2">
        <h4>get help</h4>
        <ul>
          <li><a href="/AboutUs">about us</a></li>
          <li><a href="/FAQ">FAQ</a></li>
        </ul>
      </div>
      <div className="footer-col-3">
        <h4>contact us</h4>
        <ul>
          <li><a href="#">beat.vibes.event@gmail.com</a></li>
          <li><a href="#">9876543210</a></li>
        </ul>
      </div>
      <div className="footer-col">
        <h4>follow us</h4>
        <div className="social-links">
          <i>
      <Link to={"https://www.facebook.com/login/"} target="_blank" rel="noopener noreferrer">
        <div className="icon-1"><Facebook/></div>
      </Link></i>
          <i><Link to={"https://www.instagram.com/accounts/login/?next=https%3A%2F%2Fwww.instagram.com%2Faccounts%2Fedit%2F%3F__coig_login%3D1"} target="_blank" rel="noopener noreferrer">
        <div className="icon-2"><Instagram/></div>
      </Link></i>
          <i>
          <Link to={"https://accounts.google.com/InteractiveLogin/signinchooser?continue=https%3A%2F%2Fmail.google.com%2Fmail%2Fu%2F0%2F%3Flogin&emr=1&followup=https%3A%2F%2Fmail.google.com%2Fmail%2Fu%2F0%2F%3Flogin&osid=1&passive=1209600&service=mail&ifkv=AYZoVhdctsQ6bd8rWj3edd492pzxTJEKzQfj_fR5Pl9j6qojazlJdsLY-9cEU2mjW1CCSaJKGupeZw&theme=glif&flowName=GlifWebSignIn&flowEntry=ServiceLogin"} target="_blank" rel="noopener noreferrer">
        <div className="icon-3"><Mail/></div>
      </Link></i>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
