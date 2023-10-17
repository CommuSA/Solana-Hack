import WalletContextProvider from "./WalletContextProvider";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import {
  LaptopOutlined,
  NotificationOutlined,
  UserOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import {
  Layout,
  Menu,
  theme,
  Col,
  Row,
  ConfigProvider,
  Typography,
} from "antd";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { MenuItemType } from "antd/es/menu/hooks/useItems";
import MenuItem from "antd/es/menu/MenuItem";
import Home from "./Home/Home";
import Database from "./Database/Database";
import TTDB from "./TTDB/TTDB";
import Node from "./Node/Node";

const { Header, Content, Footer, Sider } = Layout;
const { Text, Paragraph } = Typography;

const items: MenuProps["items"] = [
  getItem("Home", "/DeMap/Home", <LaptopOutlined />),
  getItem("Database", "/DeMap/Database", <LaptopOutlined />),
  getItem("TTDB", "/DeMap/TTDB", <LaptopOutlined />),
  getItem("Node", "/DeMap/Node", <LaptopOutlined />),
];

// const items: MenuProps["items"] = [
//   UserOutlined,
//   LaptopOutlined,
//   NotificationOutlined,
// ].map((icon, index) => {
//   const key = String(index + 1);

//   return {
//     key: `sub${key}`,
// icon: React.createElement(icon),
//     label: `subnav ${key}`,

//     children: new Array(4).fill(null).map((_, j) => {
//       const subKey = index * 4 + j + 1;
//       return {
//         key: subKey,
//         label: `option${subKey}`,
//       };
//     }),
//   };
// });

export const DeMap = (props: any) => {
  console.log("props:: ", props);
  // const [renderPage, setRenderPage] = useState(switchPageFromPath(props.path));
  const renderPage = switchPageFromPath(props.path);

  console.log(renderPage);
  const navigate = useNavigate();
  const changeMainPage = (e) => {
    const { key } = e;
    console.log(key);
    navigate(key);
  };
  return (
    <ConfigProvider
      theme={{
        token: {
          colorText: "#fff",
          colorSplit: "#041527",
          colorBgContainer: "#041527",
        },
        components: {
          Layout: {
            lightSiderBg: "red",
          },
        },
      }}
    >
      <WalletContextProvider>
        <Layout>
          <Header>
            <Row justify="center" align="middle">
              <Col span={4} offset={0}>
                <div style={title}> Trypto </div>{" "}
              </Col>

              <Col span={4} offset={15} style={walletButton}>
                <WalletMultiButton />{" "}
              </Col>
            </Row>
          </Header>
          <Content>
            <Layout style={{ padding: "24px 0", background: "#00090F" }}>
              <Sider style={{}} width={200}>
                <Menu
                  mode="inline"
                  defaultSelectedKeys={["1"]}
                  defaultOpenKeys={["sub1"]}
                  style={{ height: "100%" }}
                  items={items}
                  onClick={changeMainPage}
                />
              </Sider>
              {/* TODO */}
              {renderPage}
            </Layout>
          </Content>
          <Footer style={{ textAlign: "center" }}>
            Trypto ©2023 Created by Ant UED
          </Footer>
        </Layout>
      </WalletContextProvider>
    </ConfigProvider>
  );
};

const title = {
  fontFamily: "Microsoft JhengHei	",
  fontSize: "26px",
  color: "white",
};

const walletButton = {
  position: "relative",
  top: "8px",
  left: "110px",
};

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItemType[],
  type?: "group"
): MenuItemType {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItemType;
}

function switchPageFromPath(path: string) {
  console.log(path);
  switch (path) {
    case "/DeMap/Home":
      return <Home />;
    case "/DeMap/Database":
      return <Database />;
    case "/DeMap/TTDB":
      return <TTDB />;
    case "/DeMap/Node":
      return <Node />;
    default:
      return <Home />;
  }
}

export default DeMap;
