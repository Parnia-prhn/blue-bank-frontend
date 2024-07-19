"use client";
import React, { useState } from "react";
import { Layout } from "antd";
import HeaderPage from "../pages/parts/headers/header";
import NormalFooter from "../pages/parts/footers/normalFooter";
import { JobsPage } from "../pages/parts/jobs/JobsPage";
const { Header, Footer, Content } = Layout;
export default function Jobs() {
	return (
		<div>
			<Layout>
				<Header
					style={{
						position: "absolute",
						height: "fit-content",
						padding: "0px",
						backgroundColor: "transparent",
						marginLeft: "18rem",
					}}
				>
					<HeaderPage bg={"transparent"} />
				</Header>
				<Content>
					<JobsPage />
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
