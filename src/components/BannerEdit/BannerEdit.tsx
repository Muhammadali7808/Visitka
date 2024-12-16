import { Tabs } from "antd";
import { ReusableForm } from "../Form";
import { useParams, useNavigate } from "react-router-dom";
import { FormDatas } from "../../Types/data-types";
import { message, UploadFile } from "antd";
import { AttributeForm } from "../CreateAttribute";
import { useGetSingleBannerData } from "../../Service/Query/useGetSingleBannerData";
import { useBannerCategory } from "../../Service/Mutation/useBannerEditCategoryData";

export const BannerEdit = () => {
  const { id } = useParams();
  const { data: singleData, isLoading } = useGetSingleBannerData(id);
  console.log(singleData);
  
  const { mutate } = useBannerCategory();
  const navigate = useNavigate();

  const submit = (data: FormDatas) => {
    const formData = new FormData();
    formData.append("title", data.title);

    if (data.image) {
      formData.append("image", data.image.file);
    }

    mutate(
      { id, data: formData },
      {
        onSuccess: () => {
          navigate("/app/sub-category-list");
          message.success("U just edited sub-category");
        },
        onError: (err) => {
          message.error("You might miss to edit something ");
          console.log(err);
        },
      }
    );
  };

  const defaultFileList: UploadFile[] = [
    {
      uid: "-1",
      status: "done",
      name: singleData?.title || "",
      url: singleData?.image || undefined,
    },
  ];

  return (
    <>
      <Tabs
        defaultActiveKey="1"
        items={[
          {
            key: "1",
            label: "Edit Category",
            children: (
              <ReusableForm
                submit={submit}
                data={singleData}
                isLoading={isLoading}
                defaultFileList={defaultFileList}
              />
            ),
          },
          {
            key: "2",
            label: "Edit Sub Category",
            children: (
              <AttributeForm
                data={singleData}
                isLoading={isLoading}
              />
            ),
          },
        ]}
      ></Tabs>
    </>
  );
};
