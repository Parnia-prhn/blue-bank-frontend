import React, { useState } from "react";
import { Layout } from "antd";
import HeaderPage from "../../../components/headers/header";
import MainFooter from "../../../components/footers/mainFooter";
const { Header, Footer, Content } = Layout;
export default function HomePage() {
	return (
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
				<MainPage />
			</Content>
			<Footer
				style={{
					height: "fit-content",
					padding: "0px",
				}}
			>
				<MainFooter />
			</Footer>
		</Layout>
	);
}
