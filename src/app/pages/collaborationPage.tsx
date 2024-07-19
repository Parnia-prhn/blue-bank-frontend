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
						height: "fit-content",
						padding: "0px",
					}}
				>
					<HeaderPage bg={"white"} />
				</Header>
				<Content>
					<Collaboration />
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
