import React, { useState } from "react";
import { Layout } from "antd";
import HeaderPage from "./parts/headers/header";
import NormalFooter from "./parts/footers/normalFooter";
import FAQ from "./parts/contents/faq";
const { Header, Footer, Content } = Layout;
export default function FAQPage() {
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
          <FAQ />
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
