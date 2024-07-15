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
            height: "fit-content",
            padding: "0px",
          }}
        >
          <HeaderPage />
        </Header>
        <Content>
          <BlogsPreview />
        </Content>
        <Footer
          style={{
            height: "fit-content",
            padding: "0px",
          }}
        >
          <NormalFooter />
        </Footer>
      </Layout>
    </div>
  );
}
