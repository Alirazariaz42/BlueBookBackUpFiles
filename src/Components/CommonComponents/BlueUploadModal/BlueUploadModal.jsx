import "./BlueUploadModal.css";
import { Modal } from "antd";
import { Form, Input, Upload, Spin, Button } from "antd";
import { UploadOutlined, LoadingOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import { Images } from "../../../Assests/Constant";
import BlueButton from "../BlueButton/BlueButton";

const BlueUploadModal = (props) => {
  const antIcon = (
    <LoadingOutlined
      style={{
        fontSize: 32,
        color: "black",
      }}
      spin
    />
  );

  const [details, setDetails] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingSubmit, setIsLoadingSubmit] = useState(false);
  const [isLink, setIsLink] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [Contact, setContect] = useState("");
  const [filelink, setfilelink] = useState("");
  const [Requirements, setRequirements] = useState("");
  const [attachment, setAttachment] = useState(null);

  const handleAttachmentChange = (e) => {
    setAttachment(e.target.files[0]);
  };

  // const onChangeUpload = (event, name) => {
  //   setIsLoading(true);
  //   setDetails({ ...details, [name]: event.fileList });
  //   setIsLoading(false);
  // };

  const onRemoveUpload = async (name, event) => {
    console.log("remove file from list working in Blue Upload Modal File");
  };

  const onChangeValue = (event) => {
    const { value, name } = event.target;
    setDetails({ ...details, [name]: value });
  };

  const onFormSubmit = async (e) => {
    setIsLoadingSubmit(true);
    // e.preventDefault();
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
    setIsLoadingSubmit(false);
  };

  return (
    <>
      <Modal
        open={props.isModalOpen}
        className="modalMainContainer"
        footer={false}
        style={{ marginTop: "-30px" }}
        onCancel={() => {
          props.setIsModalOpen(!props.isModalOpen);
        }}
      >
        <div className="modalTitle">Upload your Drawings here</div>

        <div className="modalInputContainer">
          <Form
            name="basic"
            layout="vertical"
            initialValues={{
              remember: true,
            }}
            autoComplete="off"
            onFinish={onFormSubmit}
          >
            <Form.Item
              label="Your Name"
              name="name"
              className="modalInput mt-2"
            >
              <Input
                placeholder="Please enter your name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Item>

            <Form.Item label="Your Email" name="email" className="modalInput">
              <Input
                placeholder="Please enter your email address"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Item>

            <Form.Item
              label="Your Contact Number (Required)"
              name="contact"
              className="modalInput"
              rules={[
                {
                  required: true,
                  message: "please enter contact details before submit",
                },
              ]}
            >
              <Input
                placeholder="Please enter your contact number"
                name="contact"
                value={Contact}
                onChange={(e) => setContect(e.target.value)}
              />
            </Form.Item>

            <Form.Item
              label="Your File link (optional)"
              name="filelink"
              className="modalInput"
            >
              <Input
                placeholder="Please enter your filelink"
                name="filelink"
                value={filelink}
                onChange={(e) => setfilelink(e.target.value)}
              />
            </Form.Item>

            <Form.Item
              label="Enter your Requirement"
              name="link"
              className="modalInput"
            >
              <Input
                placeholder="Please enter your Requirement"
                name="Requirement"
                value={"Requirement"}
                onChange={(e) => setRequirements(e.target.value)}
              />
            </Form.Item>

            <Form.Item
              className="modalUpload"
              rules={[
                {
                  required: true,
                  message: "please select a ",
                },
              ]}
            >
              <input
                type="file"
                className="uploadStyle"
                required
                onChange={handleAttachmentChange}
              />
            </Form.Item>

            <div className="appJustifyCenterItem">
              <div style={{ width: "40%" }}>
                <Form.Item>
                  <Button className="modalSubmitButton" htmlType="submit">
                    Submit
                  </Button>
                </Form.Item>
              </div>
            </div>
          </Form>
        </div>
      </Modal>
    </>
  );
};

export default BlueUploadModal;
