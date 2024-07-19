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
						height: "fit-content",
						padding: "0px",
					}}
				>
					<HeaderPage bg={"white"} />
				</Header>
				<Content>
					<Blog />
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
