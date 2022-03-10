import { Layout, Menu, Breadcrumb } from "antd";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
} from "@ant-design/icons";
import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";

const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;

const BreadcrumbComponent = () => {
  return (
    <Breadcrumb style={{ margin: "16px 0" }}>
      <Breadcrumb.Item>Home</Breadcrumb.Item>
      <Breadcrumb.Item>List</Breadcrumb.Item>
      <Breadcrumb.Item>App</Breadcrumb.Item>
    </Breadcrumb>
  );
};

const SidebarComponent = () => {
  return (
    <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
      <Menu.Item key="1" icon={<PieChartOutlined />}>
        <Link to="/">Dashboard</Link>
      </Menu.Item>
      <SubMenu key="sub1" icon={<UserOutlined />} title="Honorarium">
        <Menu.Item key="2">Usulan</Menu.Item>
        <Menu.Item key="3">Proses</Menu.Item>
      </SubMenu>
      <SubMenu key="sub2" icon={<TeamOutlined />} title="Perjalanan Dinas">
        <Menu.Item key="4">
          <Link to="/surat-tugas">Surat Tugas</Link>
        </Menu.Item>
        <Menu.Item key="5">
          <Link to="/usulan">Usulan</Link>
        </Menu.Item>
        <Menu.Item key="6">SPJ</Menu.Item>
      </SubMenu>
      <Menu.Item key="7" icon={<FileOutlined />}>
        Barang dan jasa
      </Menu.Item>
      <Menu.Item key="8" icon={<FileOutlined />}>
        Modal
      </Menu.Item>
    </Menu>
  );
};

const FooterComponent = () => {
  return (
    <Footer>
      <p>@2022 | Universitas Terbuka</p>
    </Footer>
  );
};

const MainLayout = () => {
  const [collapsed, setCollapse] = useState(false);
  const toggle = () => {
    setCollapse(!collapsed);
  };
  return (
    <Layout style={{ height: "100vh" }}>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div style={{ marginBottom: 80 }} />

        <SidebarComponent />
      </Sider>

      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }}>
          <div style={{ marginLeft: 10 }}>
            {React.createElement(
              collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
              {
                className: "trigger",
                onClick: toggle,
              }
            )}
          </div>
        </Header>
        <div style={{ marginLeft: 10 }}>
          <BreadcrumbComponent />
        </div>
        <Content
          className="site-layout-background"
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
          }}
        >
          <Outlet />
        </Content>
        <FooterComponent />
      </Layout>
    </Layout>
  );
};

export default MainLayout;
