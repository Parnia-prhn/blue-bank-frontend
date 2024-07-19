import React, { useEffect, useState } from "react";
import { Carousel } from "antd";
import { Button } from "antd";
import { Card } from "antd";
import { DownloadOutlined, QuestionCircleOutlined } from "@ant-design/icons";
import type { CollapseProps } from "antd";
import { Collapse } from "antd";
import axios from "axios";
import Image from "next/image";

interface IComment {
	profilePic: string;
	socialMedia: string;
	id: string;
	comment: string;
}

export default function MainPage() {
	const [isMobile, setIsMobile] = useState(false);
	const [cardColor, setCardColor] = useState<string>("blue");
	const [comments, setComments] = useState<IComment[]>([]);

	const genExtra = () => (
		<QuestionCircleOutlined
			style={{ fontSize: "30px", color: "#3094ea" }}
			onClick={event => {
				event.stopPropagation();
			}}
		/>
	);

	const items: CollapseProps["items"] = [
		{
			key: "1",
			label: (
				<h2 className="text-blue-400 font-bold text-xl">
					چگونه می‌توانم حساب بازکنم؟
				</h2>
			),
			children: (
				<p className="text-gray-500" style={{ fontSize: "16px" }}>
					مراحل بازکردن حساب : ١.دانلود و نصب اپلیکیشن بلو ٢.داشتن یک خط تلفن
					همراه فعال که به نام خودتان است ٣.همراه داشتن اصل کارت ملی (برای کارت
					ملی‌های قدیمی، کد رهگیری درخواست صدور کارت هوشمند) برای ارسال تصاویر
					مربوطه
				</p>
			),
			extra: genExtra(),
		},
		{
			key: "2",
			label: (
				<h2 className="text-blue-400 font-bold text-xl">
					برای بازکردن حساب چه مدارکی لازم است؟
				</h2>
			),
			children: (
				<p className="text-gray-500" style={{ fontSize: "16px" }}>
					{" "}
					اصل کارت ملی (برای کارت ملی‌های قدیمی، کد رهگیری درخواست صدور کارت
					هوشمند) برای ارسال تصاویر مربوطه و داشتن یک خط تلفن همراه فعال که به
					نام خودتان است.
				</p>
			),
			extra: genExtra(),
		},
		{
			key: "3",
			label: (
				<h2 className="text-blue-400 font-bold text-xl">
					من کارت ملی هوشمند دریافت نکرده‌ام، آیا می‌توانم حساب بازکنم؟
				</h2>
			),
			children: (
				<p className="text-gray-500" style={{ fontSize: "16px" }}>
					{" "}
					بله، اگر درخواست کارت ملی هوشمند را ثبت کردید، از راه ثبت کد رهگیری
					نوشته شده روی رسید ثبت‌نام کارت ملی هوشمند، امکان بازکردن حساب را
					دارید.
				</p>
			),
			extra: genExtra(),
		},
		{
			key: "4",
			label: (
				<h2 className="text-blue-400 font-bold text-xl">
					من کارت ملی هوشمند ندارم و برگه رسید کارت ملی هوشمند را گم کرده‌ام،
					چطور می‌توانم حساب بازکنم؟
				</h2>
			),
			children: (
				<p className="text-gray-500" style={{ fontSize: "16px" }}>
					{" "}
					در وب‌سایت سازمان ثبت و احوال کد رهگیری کارت ملی خو را پیداکنید و
					فرآیند بازکردن حساب را انجام دهید.
				</p>
			),
			extra: genExtra(),
		},
		{
			key: "5",
			label: (
				<h2 className="text-blue-400 font-bold text-xl">
					مراحل بازکردن حساب چقدر زمان می‌برد؟
				</h2>
			),
			children: (
				<p className="text-gray-500" style={{ fontSize: "16px" }}>
					باز کردن حساب در کمتر از ۷ دقیقه، بررسی مدارک، شناسایی هویت و فعال شدن
					حساب(در صورت تایید استعلام بانک مرکزی) حداکثر تا ۳ روز انجام می‌شود.{" "}
				</p>
			),
			extra: genExtra(),
		},
	];

	useEffect(() => {
		axios
			.get("http://[::1]:3300/comments/getAll")
			.then((res: any) => {
				setComments(res.data.data);
			})
			.catch((error: any) => {
				console.log("in catch");
			});
	}, [comments]);

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
								بلو، پلتفرمی تمام دیجیتال است که همه‌ی ملیات بانکداری روی
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
										<h2 className="font-bold">۵ درصد سو سپرده</h2>
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
									تعیین شده، مورد تضین صندوق ضمانت سپرده‌های بانک مرکزی است.
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
				<div className="mb-10">
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
				<div className="mb-10">
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

			{/* FAQ */}
			<div
				className="md:px-56 grid grid-cols-1"
				style={{
					position: "relative",
					backgroundColor: "#fbfafb",
				}}
			>
				<h2 className="font-bold text-blue-400 text-4xl mt-20 text-center">
					سوالات متداول
				</h2>
				<div className="flex justify-center">
					<Collapse
						items={items}
						className="my-10 w-4/5"
						style={{ border: "none" }}
					/>
				</div>
				<div className="flex justify-end">
					<a className="text-blue-500 ml-20 text-lg" href="#">
						سوالات بیشتر ...
					</a>
				</div>
				<div className="mb-16">
					<h2 className="font-bold text-gray-400 text-2xl mt-10 text-center">
						خط ارتباطی برای پاسخ به سوالات شما
					</h2>
					<div className="flex justify-center">
						<Button
							type="primary"
							className="mt-5"
							style={{ borderRadius: "30px" }}
						>
							بلولاین
						</Button>
					</div>
				</div>
			</div>

			{/* COMMENTS */}
			<div
				className="grid grid-cols-1"
				style={{
					position: "relative",
				}}
			>
				<h2 className="font-bold text-blue-400 text-4xl mt-20 text-center">
					ما را در شبکه‌های اجتماعی دنبال کنید:
				</h2>
				<div
					className="flex my-20 cards-container"
					style={{
						overflow: "scroll",
					}}
				>
					{comments.length > 0 &&
						comments.map((comment: IComment, index: number) => {
							let borderColor;
							if (comment.socialMedia === "instagram") borderColor = "#e7406d";
							else borderColor = "#3094ea";

							return (
								<div
									key={index}
									style={{
										boxShadow: "0 0 12px 0 #ddd",
										width: "390px",
										height: "250px",
										padding: "50px 20px 30px",
										borderRadius: "15px",
										marginRight: "40px",
										flexShrink: "0",
										margin: "2rem",
										position: "relative",
									}}
								>
									<div style={{ marginTop: "-25px", marginRight: "10px" }}>
										<Image
											src={`/media/images/${comment.socialMedia}.png`}
											alt={comment.socialMedia}
											width={30}
											height={30}
										/>
									</div>
									<div
										style={{
											backgroundColor: "#fff",
											position: "absolute",
											right: "39%",
											top: "-30px",
										}}
									>
										<Image
											src={`/media/images/profiles/${comment.profilePic}.png`}
											alt={`Profile picture of ${comment.id}`}
											width={75}
											height={75}
											style={{
												borderRadius: "100%",
												border: `4px solid ${borderColor}`,
											}}
										/>
									</div>
									<p
										className="mt-3 flex justify-center font-bold"
										style={{ fontSize: "18px" }}
									>
										{comment.id}
									</p>
									<p
										style={{
											color: "#34479c",
											fontSize: "16px",
											margin: "1rem",
										}}
									>
										{comment.comment}
									</p>
								</div>
							);
						})}
				</div>
			</div>
		</div>
	);
}
