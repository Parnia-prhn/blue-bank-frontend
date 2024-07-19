import React, { useState } from "react";
import { Layout } from "antd";
import MainPage from "./parts/mainPage/mainPage";
import MainFooter from "./parts/footers/mainFooter";
import HeaderPage from "./parts/headers/header";
const { Header, Footer, Content } = Layout;
export default function HomePage() {
	return (
		<Layout dir="rtl" className="bg-white">
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
