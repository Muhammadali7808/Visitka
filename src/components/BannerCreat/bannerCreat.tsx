import { Form, message,  } from "antd";
import { useNavigate } from "react-router-dom";
import { BannerForm } from "../BannerForm/BannerForm";
import { useCreateBannerList } from "../../Service/Mutation/useCreatBannerList";

export const CreateBannerList = () => {
  const { mutate} = useCreateBannerList();
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
            Navigate("/app/banner");
        },
        onError: (error) => {
            message.error(`Failed to add brand: ${error.message}`);
        },
    });
};



  return (
    <>
      <Form form={form} layout="vertical">
        <BannerForm submit={submit} form={form}/>
      </Form>
    </>
  );
};
