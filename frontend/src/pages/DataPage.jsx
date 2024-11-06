import React, { useState } from "react";
import { EnvironmentOutlined, TagsOutlined } from "@ant-design/icons";
import { Layout, Menu, Button, theme } from "antd";
import { useNavigate } from "react-router-dom";
import TreeData from "../components/TreeData";

const { Header, Content, Sider } = Layout;

const items = [
  {
    key: "1",
    icon: <EnvironmentOutlined />,
    label: "Arbres par Arrondissement",
  },
  {
    key: "2",
    icon: <TagsOutlined />,
    label: "Arbres par type",
  },
];

const DataPage = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const [selectedKey, setSelectedKey] = useState("1");
  const navigate = useNavigate();

  const handleMenuClick = (e) => {
    setSelectedKey(e.key);
  };

  const handleBackHome = () => {
    navigate("/");
  };

  const getTitle = () => {
    const item = items.find((item) => item.key === selectedKey);
    return item ? item.label : "";
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider collapsedWidth="0" width={250}>
        <Button
          type="primary"
          onClick={handleBackHome}
          style={{
            marginTop: 16,
            marginBottom: 16,
            paddingTop: 20,
            paddingBottom: 20,
            width: "98%",
          }}
        >
          Page d'accueil
        </Button>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={items}
          onClick={handleMenuClick}
        />
      </Sider>
      <Layout>
        <Header style={{ background: colorBgContainer }}>
          <h2>{getTitle()}</h2>
        </Header>
        <Content
          style={{
            margin: "24px 16px 0",
            paddingBottom: "24px",
            height: "100%",
          }}
        >
          <div
            style={{
              padding: 24,
              minHeight: "calc(100vh - 112px)",
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            <TreeData selectedKey={selectedKey} />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default DataPage;
