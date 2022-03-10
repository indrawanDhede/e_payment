import { Layout, Menu } from "antd";
import "../../index.css";
import {
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/img/logo.svg";

const { Sider } = Layout;
const { SubMenu } = Menu;

const SideBar = () => {
  return (
    <Sider
      className="bg-color-sidebar "
      style={{
        overflow: "auto",
        height: "200vh",
        position: "fixed",
        left: 0,
        top: 0,
        bottom: 0,
      }}
    >
      <div className="font-bold px-5 py-8 flex ">
        <div>
          <img className="logo" src={logo} alt="Logo" />
          <h6 className="font-medium leading-tight text-3xl text-color">
            {" "}
            E-Payment{" "}
          </h6>
        </div>
      </div>
      <Menu
        className="bg-bening ml-2 text-color"
        defaultSelectedKeys={["1"]}
        mode="inline"
      >
        <Menu.Item
          key="1"
          icon={<PieChartOutlined />}
          className="rounded-l-full ml-10 text-color"
        >
          <Link to="/" title="Beranda">
            <span className="font-bold text-blue-500"> Dashboard </span>
          </Link>
        </Menu.Item>
        <Menu.Item
          key="2"
          icon={<PieChartOutlined />}
          className="rounded-l-full ml-10 text-color"
        >
          <Link to="/perjadin/rka" title="Perjadin">
            <span className="font-bold text-blue-500"> Perjalanan Dinas </span>
          </Link>
        </Menu.Item>
        <SubMenu
          key="sub1"
          icon={<UserOutlined />}
          title="Honorarium"
          className="menu-item rounded-l-full text-blue-500 font-bold "
        >
          <Menu.Item key="3">
            <Link to="" title="Usulan">
              <span className="font-bold active:text-indigo-600"> Usulan </span>
            </Link>
          </Menu.Item>
          <Menu.Item key="4">
            <Link to="" title="Proses">
              <span className="font-bold"> Proses </span>
            </Link>
          </Menu.Item>
        </SubMenu>
        <SubMenu
          key="sub2"
          icon={<TeamOutlined />}
          title="Perjalanan Dinas"
          className="menu-item rounded-l-full text-blue-500 font-bold "
        >
          <Menu.Item key="5">Usulan</Menu.Item>
          <Menu.Item key="6">Proses</Menu.Item>
        </SubMenu>
        <SubMenu
          key="sub3"
          icon={<TeamOutlined />}
          title="Barang dan Jasa"
          className="menu-item rounded-l-full text-blue-500 font-bold "
        >
          <Menu.Item key="7">Usulan</Menu.Item>
          <Menu.Item key="8">Proses</Menu.Item>
        </SubMenu>
        <SubMenu
          key="sub4"
          icon={<TeamOutlined />}
          title="Modal"
          className="menu-item rounded-l-full text-blue-500 font-bold "
        >
          <Menu.Item key="9">Usulan</Menu.Item>
          <Menu.Item key="10">Proses</Menu.Item>
        </SubMenu>
      </Menu>
    </Sider>
  );
};
export default SideBar;
