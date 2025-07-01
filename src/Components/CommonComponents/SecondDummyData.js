
import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import emailjs from "emailjs-com";

export const SecondDummyData = () => {
    
  const [toEmail, setToEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [attachment, setAttachment] = useState(null);

  const handleFileChange = (e) => {
    setAttachment(e.target.files[0]);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('toEmail', toEmail);
    formData.append('subject', subject);
    formData.append('message', message);
    formData.append('attachment', attachment);

    emailjs.sendForm('your_service_id', 'your_template_id', formData, 'your_user_id')
      .then((result) => {
        console.log('Email sent successfully!', result.text);
      })
      .catch((error) => {
        console.error('Error sending email:', error);
      });
  };
  
  return (
    <Form onSubmit={handleFormSubmit}>
      <Form.Group controlId="toEmail">
        <Form.Label>To Email</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter recipient email"
          value={toEmail}
          onChange={(e) => setToEmail(e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="subject">
        <Form.Label>Subject</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter email subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="message">
        <Form.Label>Message</Form.Label>
        <Form.Control
          as="textarea"
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="attachment">
        <Form.Label>Attachment</Form.Label>
        <Form.Control type="file" onChange={handleFileChange} />
      </Form.Group>

      <Button variant="primary" type="submit">
        Send Email
      </Button>
    </Form>
  )
};
