import { Button } from "antd";
import React from "react";

export const JobsPage = () => {
	const list1 = [
		"پاسخگویی به مسائل و مشکلات بانکی و فنی مشتریان از طریق تلفن و چت آنلاین",
		"ایجاد ارتباط حرفه ای و موثر با مشتری در جهت رفع ابهامات مشتری",
		"ثبت مشکلات مشتریان در نرم افزار پشتیبانی",
		"به حداقل رساندن زمان انتظار مشتری در مکالمه های تلفنی و نوشتاری (چت)",
		"استفاده از پنل‌های مختلف مالی و عملیاتی به جهت حل مسئله مشتری اعم از مسائل بانکی و پرداختی و رفع مشکلات استفاده از اپلیکیشن ",
		"بازه سنی بین 21 سال تا 26 سال",
		"آشنایی کلی با نرم افزارهای Word, Excel, Outlook",
		"توانایی بالا در مذاکره و مکالمه ی موثر با مشتریان",
		"توانایی حل مسئله و برخورداری از هوش هیجانی مناسب",
		"توانایی مدیریت استرس در شرایط سخت کاری",
		"علاقه‌مند به تکنولوژی و حوزه‌های بانکی",
		"علاقه مند به کار تیم",
		"ترجیحا آشنا با زبان انگلیسی",
	];
	const list2 = [
		"حداقل ۲ سال سابقه کار بعنوان اسکرام مستر",
		"تجربه کار با تیم در حال گذار از روش‌های مدیریت پروژه سنتی به Agile امتیاز محسوب می‌شود.",
		"تجربه کار با ابزارهای Jira , Confluence",
		"ماهر در مذاکره، متقاعدسازی و ایجاد ارتباط موثر",
	];
	return (
		<div dir="rtl">
			<div
				style={{
					backgroundImage: "url('/media/images/jobs.webp')",
					minHeight: "150vh",
					backgroundRepeat: "no-repeat",
					backgroundSize: "cover",
					marginTop: "-20rem",
				}}
			>
				<div>
					<h2 className="text-white font-bold text-2xl flex justify-start">
						همکاری با بلو
					</h2>
				</div>
			</div>

			<div className="m-32">
				<p
					style={{
						fontSize: "18px",
						lineHeight: "30px",
						color: "#253035",
						marginTop: "2rem",
					}}
				>
					ما معتقدیم که در دنیای امروز، باید جایگزینی برای ساختار بانکی فعلی
					وجود داشته باشد و این دقیقا دلیل وجود ماست تا رویکردی مدرن و به‌روز
					برای کشورمان ایجاد کنیم. نقطه‌ی آغازین این رسالت مهم با همکاران ما در
					بلو شروع می‌شود. ما به‌دنبال آفرینش گونه‌ی جدیدی از راهکارهای پرداخت و
					مدیریت مالی هستیم که هم‌راستا با نیازهای شما در دنیای مدرن امروز، سریع
					و به‌دور از نیازهای بروکراتیک فعلی باشد.
				</p>
				<p
					style={{
						fontSize: "18px",
						lineHeight: "30px",
						color: "#253035",
						marginTop: "2rem",
					}}
				>
					ما باور داریم که سازمان و محصول ما، به همان خوبی خواهد بود که همکاران
					ما در تیم‌های خود برای فروش و مهندسی بازار، پشتیبانی مشتریان، بهبود
					تکنولوژی و توسعه‌ی کسب‌وکار تلاش می‌کنند. از اینکه توانسته‌ایم
					همکارانی را با پیشینه‌های گوناگون کاری و توانایی‌های خارق‌العاده، بدون
					توجه به جنسیت و سنشان دور هم جمع کنیم به خود می‌بالیم. ما این‌جا در
					«بلو» کنارهم هستیم تا تنها روی یک چیز تمرکز داشته باشیم؛ تجربه‌ی یک
					فرهنگ دوست‌داشتنی!
				</p>
				<p
					style={{
						fontSize: "18px",
						lineHeight: "30px",
						color: "#253035",
						marginTop: "2rem",
					}}
				>
					ما در«بلو» با فرهنگی رشد می‌کنیم که در آن، دو روز کاری هیچ شباهتی با
					هم ندارند؛ ما در حل چالش‌ها و انجام کارهاست، نه فقط دنبال کردن
					پروسه‌های کاری تعریف‌شده و یکنواخت! فرهنگ کاری ما همکاران را تشویق
					می‌کند تا ایده‌هایشان را با ما در میان بگذارند؛ چه ایده‌های خلاقانه‌ی
					بزرگشان و چه ایده‌هایی که لزوما فقط بزرگ به‌نظر می‌رسند! اینجا سفری را
					تجربه می‌کنید که با هیجان، خلاقیت و به‌سرعت اتفاق می‌افتد. پس اگر دوست
					دارید در این تجربه با ما همراه باشید، این چند گام ساده و دوست‌داشتنی
					را به خاطر بسپارید.
				</p>
			</div>
			<div className="grid grid-cols-3 gap-3">
				<h2
					className="flex justify-end mx-auto mt-2 text-xl"
					style={{ color: "#001b40" }}
				>
					کارشناس پشتیبانی مشتریان
				</h2>
				<div>
					<ul>
						{list1.map((list: string, index: number) => {
							return (
								<li
									key={index}
									style={{
										listStyle: "disc",
										fontSize: "18px",
										color: "#7f8fab",
										marginTop: "8px",
									}}
								>
									{list}
								</li>
							);
						})}
					</ul>
				</div>
				<div className="flex justify-end mx-auto mt-2 text-xl">
					<Button
						type="primary"
						style={{
							color: "#0a56c7",
							border: "2px solid #edf4fe",
							backgroundColor: "#edf4fe",
							width: "150px",
							height: "40px",
						}}
					>
						ارسال رزومه
					</Button>
				</div>
			</div>

			<div className="grid grid-cols-3 gap-3 mt-5">
				<h2
					className="flex justify-end mx-auto mt-2 text-xl"
					style={{ color: "#001b40" }}
				>
					اسکرام مستر{" "}
				</h2>
				<div>
					<ul>
						{list2.map((list: string, index: number) => {
							return (
								<li
									key={index}
									style={{
										listStyle: "disc",
										fontSize: "18px",
										color: "#7f8fab",
										marginTop: "8px",
									}}
								>
									{list}
								</li>
							);
						})}
					</ul>
				</div>
				<div className="flex justify-end mx-auto mt-2 text-xl">
					<Button
						type="primary"
						style={{
							color: "#0a56c7",
							border: "2px solid #edf4fe",
							backgroundColor: "#edf4fe",
							width: "150px",
							height: "40px",
						}}
					>
						ارسال رزومه
					</Button>
				</div>
			</div>
		</div>
	);
};
