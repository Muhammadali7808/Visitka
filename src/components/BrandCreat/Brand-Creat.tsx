import { Form, message,  } from "antd";
import { useNavigate } from "react-router-dom";
import { useCreateBrandList } from "../../Service/Mutation/useCreateBrandList";
import { FromBrend } from "../FromBrend";

export const CreateBrandList = () => {
  const { mutate} = useCreateBrandList();
  const Navigate = useNavigate();
  const [form] = Form.useForm();

  const submit = (values: { title: string; image: any[] }) => {
    const formData = new FormData();

    formData.append("title", values.title);

    if (values.image && values.image.length > 0) {
        const file = values.image[0].originFileObj;
        formData.append("image", file);
    } else {
        console.error("Image is undefined or empty.");
        return;
    }

    mutate(formData, {
        onSuccess: () => {
            message.success("Brand added successfully!");
            form.resetFields();
            Navigate("/app/brand-list");
        },
        onError: (error) => {
            message.error(`Failed to add brand: ${error.message}`);
        },
    });
};



  return (
    <>
      <Form form={form} layout="vertical">
        <FromBrend submit={submit} form={form}/>
      </Form>
    </>
  );
};
