import React, { useState } from "react";
import { Layout } from "antd";
import HeaderPage from "./parts/headers/header";
import NormalFooter from "./parts/footers/normalFooter";
import BlogsPreview from "./parts/contents/blogsPreview";
const { Header, Footer, Content } = Layout;
export default function blogsPreviewPage() {
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
          <BlogsPreview />
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
