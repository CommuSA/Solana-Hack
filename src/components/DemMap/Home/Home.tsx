import React from "react";
import {
  Layout,
  Menu,
  theme,
  Col,
  Row,
  ConfigProvider,
  Typography,
  Image,
} from "antd";

import "./assets/Home.css";
const { Header, Content, Footer, Sider } = Layout;
const { Text, Paragraph } = Typography;

export default function Home() {
  return (
    <>
      <Content style={{ padding: "0 24px", minHeight: 280 }}>
        <Row
          style={{
            background:
              "radial-gradient(2735.62% 141.42% at 0% 0%,#034A81 0%,rgba(0,0,0,0) 100%),#008B8B",
            height: "145px",
            borderRadius: "15px",
            padding: "14px 20px 14px 20px",
          }}
        >
          <Col span={18}>
            <Typography.Title level={2} style={{ color: "#fff" }}>
              Welcome to Trypto Network.
            </Typography.Title>

            <Text
              style={{
                color: "#fff",
              }}
            >
            Trypto is a collaborative management system for secret sharing based on user's personalized characteristics, 
            designed to provide a secure, reliable and user-friendly way for users to share secret information in a decentralized
            environment and protect their personal privacy and data security.            </Text>
          </Col>
        </Row>
      </Content>
    </>
  );
}
