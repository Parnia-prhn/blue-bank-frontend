import React, { useEffect, useState } from "react";
import { Carousel } from "antd";
import { Button } from "antd";
import { Card } from "antd";
import { DownloadOutlined } from "@ant-design/icons";

export default function MainPage() {
	const [isMobile, setIsMobile] = useState(false);

	const handleResize = () => {
		setIsMobile(window.innerWidth <= 768);
	};

	useEffect(() => {
		handleResize();
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	return (
		<div className="grid grid-cols-1">
			{/* Main Banner */}
			<div className="md:px-56 md:mt-24">
				<a href="#">
					<img
						src={
							isMobile
								? "/media/images/main-banner-mobile.jpeg"
								: "/media/images/main-banner.jpeg"
						}
						alt="banner"
						className="rounded-2xl"
					/>
				</a>
			</div>

			{/* Slider */}
			<div className="grid grid-cols-1 md:grid-cols-2 px-56 pt-24">
				<video
					src="/media/videos/blue-cards.mp4"
					autoPlay
					style={{ width: "60%" }}
				></video>
				<div className="mt-12">
					<Carousel draggable infinite autoplay>
						<div dir="rtl">
							<h2 className="font-extrabold text-4xl text-blue-400">
								بلو؛ بانک ولی دوست‌داشتنی
							</h2>
							<p
								style={{ fontSize: "16px" }}
								className="tracking-wider text-gray-500 mt-10"
							>
								بلو، پلتفرمی تمام دیجیتال است که همه‌ی عملیات بانکداری روی
								اپلیکیشن موبایل و کاملا آنلاین انجام می‌شود. به زبان ساده، بانکی
								است که همیشه همراه شما خواهد بود.
							</p>
							<div className="text-center">
								<Button
									type="primary"
									className="mt-20"
									style={{ borderRadius: "30px" }}
									icon={<DownloadOutlined />}
								>
									<span className="text-xl"> دانلود اپلیکیشن</span>{" "}
								</Button>
							</div>
						</div>

						<div dir="rtl">
							<div className="flex gap-3">
								<div className="w-1/3">
									<div className="flex justify-center">
										<img
											src="/media/images/slide-card-pic-1.svg"
											alt="slide-calrd-pic-1"
											style={{ width: "35%" }}
										/>
									</div>
									<Card
										className="rounded-3xl bg-blue-100 mt-3 text-center opacity-75"
										style={{ height: "180px" }}
									>
										<h2 className="font-bold">۵ درصد سود سپرده</h2>
										<p className="text-blue-500 mt-3">
											در بلو برای حداقل مانده موجودی در ماه، سود سالیانه ۵ درصد
											به صورت ماه‌شمار پرداخت می‌شود.
										</p>
									</Card>
								</div>
								<div className="w-1/3">
									<div className="flex justify-center">
										<img
											src="/media/images/slide-card-pic-2.svg"
											alt="slide-calrd-pic-1"
											style={{ width: "35%" }}
										/>
									</div>
									<Card
										className="rounded-3xl bg-blue-100 mt-3 text-center opacity-75"
										style={{ height: "180px" }}
									>
										<h2 className="font-bold">۵ درصد سود سپرده</h2>
										<p className="text-blue-500 mt-3">
											در بلو بازکردن حساب کاملا رایگان است و نیاز به پرداخت هیچ
											کارمزدی ندارد.
										</p>
									</Card>
								</div>
								<div className="w-1/3">
									<div className="flex justify-center ">
										<img
											src="/media/images/slide-card-pic-3.svg"
											alt="slide-calrd-pic-1"
											style={{ width: "35%" }}
										/>
									</div>
									<Card
										className="rounded-3xl bg-blue-100 mt-3 text-center opacity-75"
										style={{ height: "180px" }}
									>
										<h2 className="font-bold">۵ درصد سود سپرده</h2>
										<p className="text-blue-500 mt-3">
											در بلو برای بازکردن حساب، نیاز به حتی یک ریال موجودی نیست.
										</p>
									</Card>
								</div>
							</div>
						</div>

						<div dir="rtl">
							<h2 className="font-extrabold text-4xl text-blue-400">
								حفاظت از سرمایه مشتریان
							</h2>
							<div className="flex gap-3 mt-10">
								<div
									style={{
										marginTop: "10px",
										width: "15px",
										height: "3px",
										backgroundColor: "#4b94ea",
									}}
								></div>
								<p
									style={{ fontSize: "16px" }}
									className="tracking-wider text-gray-500"
								>
									مبالغ سپرده‌های مشتریان در چارچوب ضوابط قانونی و تا سقف قانونی
									تعیین شده، مورد تضمین صندوق ضمانت سپرده‌های بانک مرکزی است.
								</p>
							</div>
							<div className="flex gap-3 mt-5">
								<div
									style={{
										marginTop: "10px",
										width: "15px",
										height: "3px",
										backgroundColor: "#4b94ea",
									}}
								></div>
								<p
									style={{ fontSize: "16px" }}
									className="tracking-wider text-gray-500"
								>
									ما همه‌ی اطلاعات حساب‌ها و مدارک هویتی مشتریان خود را محرمانه
									تلقی کرده و متعهد می‌شویم تحت هر شرایطی جز در موارد قانونی از
									انتشار آن جلوگیری کرده و مسئولیت این موضوع را به طور کامل
									می‌پذیریم.
								</p>
							</div>
						</div>
					</Carousel>
				</div>
			</div>
		</div>
	);
}
