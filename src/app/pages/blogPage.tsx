import React, { useState } from "react";
import { Layout } from "antd";
import HeaderPage from "./parts/headers/header";
import NormalFooter from "./parts/footers/normalFooter";
import Blog from "./parts/contents/blog";
const { Header, Footer, Content } = Layout;
export default function BlogPage() {
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
          <Blog />
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
