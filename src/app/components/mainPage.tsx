import React, { useEffect, useState } from "react";
import { Carousel } from "antd";
import { Button } from "antd";
import { Card } from "antd";
import { DownloadOutlined } from "@ant-design/icons";

export default function MainPage() {
	const [isMobile, setIsMobile] = useState(false);
	const [cardColor, setCardColor] = useState<string>("blue");

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
			<div
				className="md:px-56 md:mt-24"
				style={{ position: "relative", display: "block" }}
			>
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
			<div
				className="grid grid-cols-1 md:grid-cols-2 px-56 pt-24"
				style={{ position: "relative" }}
			>
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

			{/* Different cards */}
			<div
				className="mt-32"
				style={{
					position: "relative",
					display: "block",
					height: "350px",
				}}
			>
				<div
					style={{
						marginTop: "16rem",
						position: "absolute",
						width: "750px",
						backgroundColor: "#fafafa",
						borderRadius: "100%",
						height: "750px",
						left: "-160px",
						top: "-300px",
					}}
				></div>
				<div className="grid grid-cols-2">
					<div
						style={{ marginRight: "25rem", marginTop: "3rem", width: "500px" }}
					>
						<p className="font-bold text-4xl text-blue-400">
							بلو، فقط آبی نیست ...
						</p>
						<div className="flex gap-3 mt-5">
							<div
								style={{
									marginTop: "15px",
									width: "15px",
									height: "3px",
									backgroundColor: "#4b94ea",
								}}
							></div>
							<p
								style={{ fontSize: "16px" }}
								className="tracking-wider text-gray-500"
							>
								عضو سامانه شتاب بانک مرکزی
							</p>
						</div>
						<div className="flex gap-3 mt-3">
							<div
								style={{
									marginTop: "15px",
									width: "20px",
									height: "3px",
									backgroundColor: "#4b94ea",
								}}
							></div>
							<p
								style={{ fontSize: "16px" }}
								className="tracking-wider text-gray-500"
							>
								ارسال رایگان کارت بانکی به آدرس دلخواه شما در کمتر از ۵ روز کاری
								در تهران و ۱۰ روز کاری در سایر نقاط کشور
							</p>
						</div>
						<div className="flex gap-3 mt-3">
							<div
								style={{
									marginTop: "15px",
									width: "15px",
									height: "3px",
									backgroundColor: "#4b94ea",
								}}
							></div>
							<p
								style={{ fontSize: "16px" }}
								className="tracking-wider text-gray-500"
							>
								دریافت و فعال‌سازی آنلاین رمزهای کارت از طریق اپلیکیشن بلو
							</p>
						</div>
						<div className="flex gap-3 mt-3">
							<div
								style={{
									marginTop: "15px",
									width: "15px",
									height: "3px",
									backgroundColor: "#4b94ea",
								}}
							></div>
							<p
								style={{ fontSize: "16px" }}
								className="tracking-wider text-gray-500"
							>
								امکان مسدودکردن کارت از طریق اپلیکیشن بلو
							</p>
						</div>

						<div className="flex justify-end mt-6 gap-3">
							<div
								style={{
									width: "12px",
									height: "12px",
									backgroundColor: "#3094ea",
									borderRadius: "100%",
									cursor: "pointer",
								}}
								onClick={() => {
									setCardColor("blue");
								}}
							></div>
							<div
								style={{
									width: "12px",
									height: "12px",
									backgroundColor: "#0fa581",
									borderRadius: "100%",
									cursor: "pointer",
								}}
								onClick={() => {
									setCardColor("green");
								}}
							></div>
							<div
								style={{
									width: "12px",
									height: "12px",
									backgroundColor: "red",
									borderRadius: "100%",
									cursor: "pointer",
								}}
								onClick={() => {
									setCardColor("red");
								}}
							></div>
						</div>
					</div>
					<div
						style={{
							position: "absolute",
							width: "600px",
							left: "150px",
							marginTop: "32rem",
						}}
					>
						<img
							className="card-move"
							src={`/media/images/${cardColor}-card.png`}
							alt="cardColor"
						/>
					</div>
				</div>
			</div>

			{/* Blu line */}
			<div
				className="md:px-56 md:mt-24"
				style={{
					position: "relative",
					display: "block",
					height: "600px",
					backgroundColor: "#3997e9",
				}}
			>
				<div className="grid grid-cols-2 mt-20 gap-5">
					<img src="/media/images/blu-line.png" alt="blu-line" />
					<div>
						<h2 className="font-bold text-white text-4xl mt-36">
							بلولاین؛ همیشه به وقت همه‌جا
						</h2>
						<p className="text-white mt-10 tracking-wider">
							اگر سوالی دارید، در چت اپلیکیشن بلو پیام صوتی و یا متنی بگذارید،
							یا با شماره ۹۱۰۳۶۰۶۰-۰۲۱ تماس بگیرید. کارشناسان بلولاین همیشه
							آماده‌ی پاسخ‌گویی و حل مشکلات احتمالی شما هستند.
						</p>
					</div>
				</div>
			</div>

			{/* Identify */}
			<div
				className="md:px-56 grid grid-cols-2 gap-5"
				style={{
					position: "relative",
					backgroundColor: "#fbfafb",
				}}
			>
				<div style={{ width: "500px" }} className="mr-10 mt-16">
					<h2 className="font-bold text-blue-400 text-4xl mt-36">
						شناسایی هویت
					</h2>
					<p className=" mt-10 tracking-wider text-lg text-gray-500">
						“اینجانب مهرداد اندامی با کد ملی ۱۲۳۴۵۶۷۸۹۰ درخواست بازکردن حساب در
						بلو را دارم.” یک ویدیو ۴۵ ثانیه‌ای با عبارت خواسته مشابه نمونه بالا
						ضبط و ارسال کنید.
					</p>
				</div>
				<div>
					<video
						src="/media/videos/identify.mp4"
						autoPlay
						className="mt-20"
					></video>
				</div>
			</div>

			{/* transfer money */}
			<div
				className="md:px-56 grid grid-cols-2 gap-5"
				style={{
					position: "relative",
				}}
			>
				<div>
					<video
						src="/media/videos/smart-transfer.mp4"
						autoPlay
						className="mt-20 mr-10"
						style={{ width: "60%" }}
					></video>
				</div>
				<div style={{ width: "500px" }} className="mr-10 mt-16">
					<h2 className="font-bold text-blue-400 text-4xl mt-36">
						انتقال هوشمند پول
					</h2>
					<p className=" mt-10 tracking-wider text-lg text-gray-500">
						«انتقال هوشمند پول» یعنی راحت و بدون دردسر پولی را که می‌خواهید،
						جابه جا کنید. در بلو، لازم نیست شما بدانید پایا، ساتنا یا شبا چیست و
						برای انتقال چه میزان پول از کدامیک از آنها باید استفاده کرد. ما این
						کار را برای شما انجام می‌دهیم.
					</p>
				</div>
			</div>
		</div>
	);
}
