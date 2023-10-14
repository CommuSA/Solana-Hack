import WalletContextProvider from './WalletContextProvider'
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Layout, Menu, theme, Col, Row } from 'antd';
import React from 'react';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui'


const { Header, Content, Footer, Sider } = Layout;


const items: MenuProps['items'] = [UserOutlined, LaptopOutlined, NotificationOutlined].map(
  (icon, index) => {
    const key = String(index + 1);

    return {
      key: `sub${key}`,
      icon: React.createElement(icon),
      label: `subnav ${key}`,

      children: new Array(4).fill(null).map((_, j) => {
        const subKey = index * 4 + j + 1;
        return {
          key: subKey,
          label: `option${subKey}`,
        };
      }),
    };
  },
);


export const DeMap = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <WalletContextProvider>

    <Layout>
      <Header >
      <Row justify="center" align="middle">

      <Col span={4} offset={0}> <div style={title}> Trypto </div> </Col>

       
      <Col span={4} offset={15} style={walletButton} > <WalletMultiButton /> </Col>
      </Row>
      </Header>
      <Content style={{ padding: '0 50px' }}>
        <Layout style={{ padding: '24px 0', background: colorBgContainer }}>
          <Sider style={{ background: colorBgContainer }} width={200}>
            <Menu
              mode="inline"
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              style={{ height: '100%' }}
              items={items}
            />
          </Sider>
          <Content style={{ padding: '0 24px', minHeight: 280 }}>Content</Content>
        </Layout>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Trypto ©2023 Created by Ant UED</Footer>
    </Layout>
    </WalletContextProvider >

  );

}

const title = {
  fontFamily: 'Microsoft JhengHei	',
  fontSize: '26px', 
  color: 'white', 
};

const walletButton = {
  position: 'relative',
  top: '8px',
  left: '110px',
};




export default DeMap;