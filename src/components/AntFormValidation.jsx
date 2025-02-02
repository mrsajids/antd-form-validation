import React, { useRef } from "react";
import { Form, Input, Button, InputNumber, message } from "antd";
import { textWithoutSpacesValidation } from "./formValidation";

const MyForm = () => {
  const [form] = Form.useForm();
  const timerRef = useRef(null);
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
    message.success("Form submitted successfully!");
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
    message.error("Please fix the errors in the form.");
  };

  // Generic handler to block invalid input and show errors
  const handleBeforeInput = (field, regex, errorMessage) => (e) => {
    if (!regex.test(e.data)) {
      e.preventDefault();
      form.setFields([{ name: field, errors: [errorMessage] }]);
      if (timerRef.current) {
        console.log("timeout");
        clearTimeout(timerRef.current);
      }

      // Set a new timer to clear the error after 3 seconds
      timerRef.current = setTimeout(() => {
        form.setFields([{ name: field, errors: [] }]);
      }, 3000);
    } else {
      form.setFields([{ name: field, errors: [] }]);
    }
  };

  return (
    <div
      style={{
        margin: "20px",
        padding: "20px",
        width: "50%",
        border: "1px solid lightblue",
        borderRadius: "12px",
      }}
    >
      <Form
        form={form}
        name="basic"
        initialValues={{ name: "", age: null }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        {/* Name Field */}
        <Form.Item
          label="Name"
          name="name"
          rules={textWithoutSpacesValidation("name", 5, 9)}
        >
          <Input
            onBeforeInput={handleBeforeInput(
              "name",
              /^[A-Za-z\s]*$/,
              "Name can only contain letters and spaces!"
            )}
            placeholder="Enter your name"
          />
        </Form.Item>

        {/* Age Field */}
        <Form.Item
          label="Age"
          name="age"
          rules={[
            { required: true, message: "Please input your age!" },
            {
              type: "number",
              min: 18,
              max: 100,
              message: "Age must be between 18 and 100!",
            },
          ]}
        >
          <InputNumber
            onBeforeInput={handleBeforeInput(
              "age",
              /^[0-9]*$/,
              "Age can only contain numbers!"
            )}
            placeholder="Enter your age"
          />
        </Form.Item>

        {/* Submit Button */}
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default MyForm;
