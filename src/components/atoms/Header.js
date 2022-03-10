import React from "react";
import { Input, Layout, Avatar, Image } from "antd";
import { UserOutlined } from "@ant-design/icons";
import "../../index.css";

const { Header } = Layout;
const { Search } = Input;

const Head = () => {
  const onSearch = (value) => console.log(value);

  return (
    <div className="">
      <Header
        className="bgwhite flex justify-between "
        style={{ position: "fixed", zIndex: 1, width: "85%" }}
      >
        <div> </div>
        <div className="justify-between flex">
          <div>
            <Search
              className="grid grid justify-items-end p-4 "
              placeholder="input search text"
              onSearch={onSearch}
              style={{ width: 400 }}
            />
            <Avatar size="medium" icon={<UserOutlined />} />
          </div>
          <div className="grid grid justify-items-end p-2 "></div>
        </div>
      </Header>
    </div>
  );
};

export default Head;
