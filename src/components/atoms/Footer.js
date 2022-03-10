import React from "react";
import { Layout } from "antd";
const { Footer } = Layout;

const Foot = () => {
  return (
    <div>
      <Footer style={{ textAlign: "center" }}>
        {" "}
        ©2022 Universitas Terbuka
      </Footer>
    </div>
  );
};

export default Foot;
