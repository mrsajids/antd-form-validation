import React from "react";
import { Form, Input, Button, message } from "antd";
import {
  numberLettersWithSpacesValidation,
  textWithoutSpacesValidation,
  validations,
} from "./formValidation";

const handleBeforeInput = (regx, max) => (e) => {
  const inputValue = e.target.value + e.data;
  if (inputValue.length > max || !regx.test(e.data)) {
    e.preventDefault();
  }
};

const AntFormValidationAllControls = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log("Received values of form: ", values);
    message.success("Form submitted successfully!");
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
    message.error("Please fix the errors in the form.");
  };

  // Memoized validation rules
  // const nameValidationRules = React.useMemo(
  //   () => textWithoutSpacesValidation("name", 2, 9),
  //   []
  // );

  return (
    <div className="form-container">
      <Form
        form={form}
        name="basic"
        initialValues={{ name: "", age: null }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        Letter without space
        <Form.Item
          label="Name"
          name="name"
          rules={textWithoutSpacesValidation("name", 2)}
        >
          <Input
            onBeforeInput={handleBeforeInput(
              validations.letterswithoutspaces,
              5
            )}
            placeholder="Enter your name"
          />
        </Form.Item>
        Letter Number space
        <Form.Item
          label="Description"
          name="description"
          rules={numberLettersWithSpacesValidation("description", 3)}
        >
          <Input.TextArea
            onBeforeInput={handleBeforeInput(validations.numberletterspace, 10)}
            placeholder="Enter a description"
            rows={1}
          />
        </Form.Item>
        Email
        <Form.Item
          name="email"
          label="Email"
          rules={[
            {
              type: "email",
            },
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Password"
          name="password"
          rules={textWithoutSpacesValidation("Password", 6)}
        >
          <Input.Password
            onBeforeInput={handleBeforeInput(validations.allwithoutspace, 8)}
          />
        </Form.Item>
        Number
        <Form.Item
          label="Mobile No"
          name="mobno"
          rules={textWithoutSpacesValidation("Mobile No", 10)}
        >
          <Input
            onBeforeInput={handleBeforeInput(
              validations.numberwithoutpoint,
              10
            )}
            placeholder="Enter your name"
          />
        </Form.Item>
        Float Number
        <Form.Item
          label="Float No"
          name="floatno"
          rules={textWithoutSpacesValidation("Float No", 5)}
        >
          <Input
            onBeforeInput={handleBeforeInput(
              validations.numberrwithpoint,
              10
            )}
            placeholder="Enter your name"
          />
        </Form.Item>
        {/* Submit and Reset Buttons */}
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            style={{ marginRight: "10px" }}
          >
            Submit
          </Button>
          <Button htmlType="button" onClick={() => form.resetFields()}>
            Reset
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default AntFormValidationAllControls;
