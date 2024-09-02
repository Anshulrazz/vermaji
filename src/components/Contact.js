import React from 'react';
import './css/contact.css';

import Label from './Label';
import Input from './Input';
import Textarea from './Textarea';
import Button from './Button';

export default function Contact() {
  return (
    <div className="contact-container">
      <div className="contact-grid">
        <div className="contact-form">
          <h1>Get in Touch</h1>
          <p>Have a question or need assistance? Fill out the form and we'll get back to you as soon as possible.</p>
          <form>
            <div className="form-group">
              <div>
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Enter your name" />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="Enter your email" />
              </div>
            </div>
            <div>
              <Label htmlFor="subject">Subject</Label>
              <Input id="subject" placeholder="Enter the subject" />
            </div>
            <div>
              <Label htmlFor="message">Message</Label>
              <Textarea id="message" placeholder="Enter your message" />
            </div>
            <Button type="submit">Submit</Button>
          </form>
        </div>
        <div className="contact-info">
          <h2>Contact Information</h2>
          <div className="info-group">
            <h3>Address</h3>
            <p>Amanpur<br />Kasganj, UP 207246 IN</p>
          </div>
          <div className="info-group">
            <h3>Phone</h3>
            <p>+916396920349</p>
          </div>
          <div className="info-group">
            <h3>Email</h3>
            <p>braj70901@gmail.com <br /> anshul.kumar_bca22@gla.ac.in</p>
          </div>
          <div className='map'>
          <p>Currently Available :</p>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3535.6077314066065!2d77.59074957524997!3d27.605688676240973!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39736ce47bffc039%3A0xfe5fc3da92c6341!2sGLA%20University!5e0!3m2!1sen!2sin!4v1725212661871!5m2!1sen!2sin" width="600" height="300" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"  title="Google Map"></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}