import { Button, Form, Input, message, Spin } from "antd";
import { useEffect, useState } from "react";
import axios from "axios";
import TemplateModal from "./TemplateModal";

const DynamicForm = () => {
  // states
  const [fields, setFields] = useState([]);
  const [loading, setLoading] = useState(true);
  const [templateContent, setTemplateContent] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  // hooks
  const [form] = Form.useForm();

  // useEffects
  useEffect(() => {
    axios
      .get("http://localhost:8080/api/fields")
      .then((res) => {
        setLoading(false);
        const result = Object.keys(res.data).map((key) => {
          return {
            key,
            ...res.data[key],
          };
        });
        setFields(result);
      })
      .catch((err) => {
        err.response.data.errors?.map((errorItem) => {
          message.error(errorItem.msg);
        });
        console.error(err);
      });
  }, []);

  // helper functions
  const handleSubmit = () => {
    const values = form.getFieldsValue();
    axios
      .post("http://localhost:8080/api/template-preview", values)
      .then((res) => {
        setIsModalOpen(true);
        setTemplateContent(res.data.template);
      })
      .catch((err) => {
        err.response.data.errors?.map((errorItem) => {
          message.error(errorItem.msg);
        });
        console.error(err.response.data.errors);
      });
  };

  if (loading) {
    return <Spin />;
  }
  return (
    <>
      <Form
        layout={"vertical"}
        form={form}
        style={{
          maxWidth: 600,
          margin: "30px",
        }}
      >
        {fields.map((fieldItem) => {
          const { key, label, placeholder } = fieldItem;
          return (
            <Form.Item key={key} label={label} name={key}>
              <Input placeholder={placeholder} />
            </Form.Item>
          );
        })}
        <Form.Item>
          <Button onClick={handleSubmit} type="primary">
            Submit
          </Button>
        </Form.Item>
      </Form>
      <TemplateModal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        templateContent={templateContent}
      />
    </>
  );
};

export default DynamicForm;
