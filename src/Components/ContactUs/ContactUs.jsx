import { useState } from "react";
import { BlueFooter } from "../CommonComponents";
import "./ContactUs.css";
const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [Contact, setContect] = useState("");
  const [filelink, setfilelink] = useState("");
  const [Requirements, setRequirements] = useState("");
  const [attachment, setAttachment] = useState(null);

  const handleAttachmentChange = (e) => {
    setAttachment(e.target.files[0]);
  };

  const onFormSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("Contact", Contact);
    formData.append("attachment", attachment);
    formData.append("link", filelink);
    formData.append("Requirements", Requirements);

    formData.append("Subject", "Message From BlueBook Estimators");

    formData.append("recipient_name1", "MahRukh Tariq");
    formData.append("recipient_email1", "Director.mfbzone@gmail.com");

    formData.append("recipient_name2", "Muhammad Fiaz");
    formData.append("recipient_email2", "bluebookestimators@gmail.com");

    try {
      const response = await fetch("https://api.bluebookestimators.com/", {
        method: "POST",
        body: formData,
      });

      if (response.status === 200) {
        alert("Email sent successfully");
      } else {
        alert("Email sending failed");
      }
    } catch (error) {
      console.error("Error sending email:", error);
      alert("Email sending failed");
    }
  };

  return (
    <>
      <div>
        <div className="container">
          <h1 className="mt-4 fw-bold">Contact Us</h1>
          <div className="row w-100 p-3 m-3">
            <div className="col-md-6">
              <form onSubmit={onFormSubmit}>
                <div class="mb-3">
                  <label for="Name" class="form-label fw-bold">
                    Your Name
                  </label>
                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    type="text"
                    class="form-control"
                    id="Name"
                    aria-describedby="emailHelp"
                  />
                </div>
                <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label fw-bold">
                    Your Email
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                  <div id="emailHelp" class="form-text">
                    We'll never share your email with anyone else.
                  </div>
                </div>
                <div class="mb-3">
                  <label for="Contact" class="form-label fw-bold">
                    Your Contact number (Required)
                  </label>
                  <input
                    type="number"
                    value={Contact}
                    onChange={(e) => setContect(e.target.value)}
                    required
                    class="form-control"
                    id="Contact"
                    aria-describedby="emailHelp"
                  />
                </div>

                <div class="mb-3">
                  <label for="Message" class="form-label fw-bold">
                    Your Message
                  </label>
                  <textarea
                    rows={4}
                    value={Requirements}
                    onChange={(e) => setRequirements(e.target.value)}
                    type="text"
                    class="form-control"
                    id="Message"
                    aria-describedby="emailHelp"
                  />
                </div>

                <div class="mb-3">
                  <label for="FileLink" class="form-label fw-bold">
                    Your FileLink (Optional)
                  </label>
                  <input
                    type="text"
                    onChange={(e) => setfilelink(e.target.value)}
                    value={filelink}
                    class="form-control"
                    id="FileLink"
                    aria-describedby="emailHelp"
                  />
                </div>

                <div class="mb-3">
                  <label for="file" class="form-label fw-bold">
                    Choose Your File
                  </label>
                  <input
                    type="file"
                    onChange={handleAttachmentChange}
                    required
                    class="form-control"
                    id="FileLfileink"
                    aria-describedby="emailHelp"
                  />
                </div>

                <button type="submit" class="btn btn-primary mt-3">
                  Submit
                </button>
              </form>
            </div>
            <div className="col-md-6 AboutUsRightPart">
              <h2>Head Office</h2>
              <p>Head Office: 2505 Bedford Ave, Brooklyn, NY 11226, USA</p>
              <hr />
              <h2>Contact Us</h2>
              <p>
                <a style={{ color: "black" }} href="tel:+1 917 300 1079">
                  +1 917 300 1079
                </a>
              </p>
              <p>
                <a
                  style={{ color: "black" }}
                  href="mailto:bluebookestimators@gmail.com"
                >
                  bluebookestimators@gmail.com{" "}
                </a>
              </p>
              <hr />
              <h2>Let’s Talk</h2>
              <p>
                No more waiting, no more delays. We deliver on time, every time
              </p>
              <hr />
            </div>
          </div>
        </div>
      </div>
      <BlueFooter />
    </>
  );
};

export default ContactUs;
