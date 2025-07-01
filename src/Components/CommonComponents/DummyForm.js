import React, { useState } from "react";
//import { Email } from "smtpjs";
import img from '../../Assests/AboutUs (2).png'
import img2 from '../../Assests/AboutUs.png'
import img3 from '../../Assests/PlumbingHTHI2.png'
export const DummyForm = () => {
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [Contact, setContect] = useState("");
  // const [attachment, setAttachment] = useState(null);
  // const handleAttachmentChange = (e) => {

  //   setAttachment(e.target.files[0]);

  // };

  // const handleSubmit = () => {
  //   const formData = new FormData();
  //   formData.append("name", name);
  //   formData.append("email", email);
  //   formData.append("message", message);
  //   if (attachment) {
  //     formData.append("attachment", attachment);

  //   }

  //   window.Email.send({
  //     Host: "smtp.elasticemail.com",
  //     Username: "AliRaza.MfBZone@gmail.com",
  //     Password: "15CDE4AF7298A9884FB0752D343633B51724",
  //     To: "AliRaza.MfBZone@gmail.com",
  //     From: "AliRaza.MfBZone@gmail.com",
  //     Subject: "Contact Us Form Submission",
  //    Body:  `
  //    Name: ${name}
  //    Email: ${email}
  //    Message: ${message}
  //  `,
  //  Attachments: [
  //   {
  //     name: attachment.name,
  //     data: attachment
  //   }
  // ]
  //   })
  //     .then((response) => {
  //       console.log("Email sent successfully:", response);
  //     })
  //     .catch((error) => {
  //       console.error("Error sending email:", error);
  //     });
  // };
  
  // const handleAttachmentChange = (e) => {
  //   setAttachment(e.target.files[0]);
  // };
  
  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const formData = new FormData();
  //   formData.append('name', name);
  //   formData.append('email', email);
  //   formData.append('Contact', Contact);
  //   formData.append('attachment', attachment);

    
  //   try {
  //     const response = await fetch('http://localhost:3001/register', {
  //       method: 'POST',
  //       body: formData,
  //     });

  //     if (response.status === 200) {
  //       alert('Email sent successfully');
  //     } else {
  //       alert('Email sending failed');
  //     }
  //   } catch (error) {
  //     console.error('Error sending email:', error);
  //     alert('Email sending failed');
  //   }
  // };
  
  
  return (
    <>
     <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={img3} class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src={img} class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src={img2} class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
   
    </>
  );
};

//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [subject, setSubject] = useState("");
//   const [message, setMessage] = useState("");
//   const [attachment, setAttachment] = useState(null);

//   const handleAttachmentChange = (event) => {
//     setAttachment(event.target.files[0]);
//   };

//   const handleSubmit = event => {
//     event.preventDefault();

//     // Create the email body
//     const emailBody = `
//       Name: ${name}
//       Email: ${email}
//       Subject: ${subject}
//       Message: ${message}
//     `;

//     // Prepare the email options
//     const emailOptions = {
//       SecureToken: 'your-secure-token',
//       To: 'recipient@example.com',
//       From: 'sender@example.com',
//       Subject: `Contact Form Submission - ${subject}`,
//       Body: emailBody,
//       Attachments: []
//     };

//     // Add attachment if provided
//     if (attachment) {
//       const reader = new FileReader();
//       reader.onload = event => {
//         emailOptions.Attachments.push({
//           name: attachment.name,
//           data: event.target.result.split(',')[1]
//         });
//         sendEmail(emailOptions);
//       };
//       reader.readAsDataURL(attachment);
//     } else {
//       sendEmail(emailOptions);
//     }
//   };

//   const sendEmail = options => {
//     Email.send({
//       ...options
//     }).then(response => {
//       console.log('Email sent successfully:', response);
//     }).catch(error => {
//       console.error('Error sending email:', error);
//     });
//   };

//   return <div>
//         <div>
//       <h2>Contact Us</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Name:</label>
//           <input type="text" value={name} onChange={e => setName(e.target.value)} />
//         </div>
//         <div>
//           <label>Email:</label>
//           <input type="email" value={email} onChange={e => setEmail(e.target.value)} />
//         </div>
//         <div>
//           <label>Subject:</label>
//           <input type="text" value={subject} onChange={e => setSubject(e.target.value)} />
//         </div>
//         <div>
//           <label>Message:</label>
//           <textarea value={message} onChange={e => setMessage(e.target.value)} />
//         </div>
//         <div>
//           <label>Attachment:</label>
//           <input type="file" onChange={handleAttachmentChange} />
//         </div>
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   </div>;
// };
