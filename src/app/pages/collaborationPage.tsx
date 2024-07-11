import React, { useState } from "react";
import { Layout } from "antd";
import HeaderPage from "./parts/headers/header";
import NormalFooter from "./parts/footers/normalFooter";
import Collaboration from "./parts/contents/collaboration";
const { Header, Footer, Content } = Layout;
export default function CollaborationPage() {
  return (
    <div>
      <Layout>
        <Header
          style={{
            position: "sticky",
            width: "100%",
            alignItems: "center",
          }}
        >
          <HeaderPage />
        </Header>
        <Content>
          <Collaboration />
        </Content>
        <Footer
          style={{
            width: "100%",
          }}
        >
          <NormalFooter />
        </Footer>
      </Layout>
    </div>
  );
}
