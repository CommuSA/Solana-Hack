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
import exp1 from "./assets/exp1.png";
import exp2 from "./assets/exp2.png";
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
              "radial-gradient(2735.62% 141.42% at 0% 0%,#034A81 0%,rgba(0,0,0,0) 100%),#0064B2",
            height: "235px",
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
              DB3 Network is a lightweight, permanent JSON document database for
              Web3. It is designed to store and retrieve data for decentralized
              applications built on blockchain technology. Now building a fully
              on-chain application is an easy thing. You can create a fully
              on-chain game or a fully on-chain social network, or any other
              application you desire.
            </Text>
          </Col>
          <Col span={6}>logo</Col>
        </Row>
        <Row>
          <Typography.Title
            level={3}
            style={{ color: "#fff", padding: "20px 0 20px 20px" }}
          >
            Examples
          </Typography.Title>
        </Row>

        <Row>
          <Col span={12}>
            <Image
              width={537}
              preview={{
                visible: false,
                mask: <h1>A short introduction for this example</h1>,
              }}
              src={exp1}
            />
          </Col>
          <Col span={12}>
            <Image
              width={537}
              preview={{
                visible: false,
                mask: <h1>A short introduction for this example</h1>,
              }}
              src={exp2}
            />
          </Col>
        </Row>

        <Row>
          <Typography.Title
            level={3}
            style={{ color: "#fff", padding: "20px 0 20px 20px" }}
          >
            Builds
          </Typography.Title>
        </Row>

        <Row
          style={{
            color: "#fff",
          }}
        >
          <Col span={12}>
            <Row>
              <Col span={3}>card1</Col>
              <Col span={19}>
                <Typography.Title
                  level={5}
                  style={{ color: "#fff", padding: "20px 0 20px 20px" }}
                >
                  DB3.js Library
                </Typography.Title>
                Here are some sentence to introduce this products long or
                short.Here are some sentence Here…
              </Col>
              <Col span={2}>card2</Col>
            </Row>
          </Col>
          <Col span={12}>
            <Row>
              <Col span={3}>card1</Col>
              <Col span={19}>
                <Typography.Title
                  level={5}
                  style={{ color: "#fff", padding: "20px 0 20px 20px" }}
                >
                  DB3.js Library
                </Typography.Title>
                Here are some sentence to introduce this products long or
                short.Here are some sentence Here…
              </Col>
              <Col span={2}>card2</Col>
            </Row>
          </Col>
        </Row>
      </Content>
    </>
  );
}
