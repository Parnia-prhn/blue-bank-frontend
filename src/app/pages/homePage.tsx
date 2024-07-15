import React, { useState } from "react";
import { Layout } from "antd";
import HeaderPage from "./parts/headers/header";
import MainFooter from "./parts/footers/mainFooter";

const { Header, Footer, Content } = Layout;
export default function HomePage() {
	return (
		<div>
			<Layout>
				<Header
					style={{
						position: "sticky",
					}}
				>
					<HeaderPage />
				</Header>
				<Content>main content newww</Content>
				<Footer>
					<MainFooter />
				</Footer>
			</Layout>
		</div>
	);
}
