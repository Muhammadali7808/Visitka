import { Button, Flex, message, Table, Image, Popconfirm } from "antd";
import { Link } from "react-router-dom";
import { useQueryClient } from "@tanstack/react-query";
import { BrandType, columnType } from "../../Types/data-types";
import { useBrandGetType } from "../../Service/Query/useBrandGetType";
import { useBrandDeleteData } from "../../Service/Mutation/useBrandDeleteData";

export const BrandList = () => {
  const { data } = useBrandGetType();

  const dataSource = data?.results.map((item: BrandType) => ({
    key: item.id,
    id: item.id,
    img: item.image,
    title: item.title,
  }));

  const { mutate } = useBrandDeleteData();
  const client = useQueryClient();

  const DeleteCategory = (id: number) => {
    mutate(id, {
      onSuccess: () => {
        message.success("Category deleted successfully");
        client.invalidateQueries({ queryKey: ["get-data"] });
      },
      onError: (error) => {
        console.error("Error deleting category:", error);
        message.error("Error occurred during delete");
      },
    });
  };

  const columns: columnType[] = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
      width: "40px",
    },
    {
      title: "Image",
      dataIndex: "img",
      align: "center",
      key: "image",
      render: (image: string) => (
        <div style={{ textAlign: "center" }}>
          <Image
            style={{
              width: "70px",
            }}
            src={image}
            alt="Brand"
          />
        </div>
      ),
    },
    {
      title: "Name",
      dataIndex: "title",
      key: "title",
      align: "center",
      render: (title: string) => (
        <div style={{ textAlign: "center" }}>
          <h3 style={{ fontSize: "20px", fontWeight: "600" }}>{title}</h3>
        </div>
      ),
    },
    {
      title: "Actions",
      dataIndex: "actions",
      key: "actions",
      align: "center",
      render: (_: any, record: BrandType) => (
        <Flex gap="20px" justify="center">
          <div>
            <Link to={`/app/edit-brand/${record.id}`}>
              <Button
                type="primary"
                style={{ backgroundColor: "#048b04", fontSize: "20px" }}
              >
                EDIT
              </Button>
            </Link>
          </div>
          <div>
            <Popconfirm
              title="Do you want to delete this brand?"
              onConfirm={() => DeleteCategory(record.id)}
              okText="Yes"
              cancelText="No"
            >
              <Button
                type="primary"
                style={{ backgroundColor: "red", fontSize: "20px" }}
              >
                DELETE
              </Button>
            </Popconfirm>
          </div>
        </Flex>
      ),
    },
  ];

  return (
    <div>
      <div style={{ marginBottom: "20px" }}>
        <Link to="/app/create-brand">
          <Button type="primary">Create Brand</Button>
        </Link>
      </div>
      <Table
        dataSource={dataSource}
        columns={columns}
        bordered
        size="large"
        pagination={{ pageSize: 10 }}
      />
    </div>
  );
};
