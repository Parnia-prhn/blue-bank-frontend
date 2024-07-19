import React from "react";
import { Button } from "antd";
import Link from "next/link";
export default function NavHeader() {
	return (
		<div>
			<div className="">
				<ul className="flex  flex-col justify-end space-y-3 ">
					<li>
						<Link href="/">
							<Button type="link">خانه</Button>
						</Link>
					</li>
					<li>
						<Link href="/jobs">
							<Button type="link">موقعیت های شغلی</Button>
						</Link>
					</li>
					<li>
						<Link href="/faq">
							<Button type="link">سوالات متداول</Button>
						</Link>
					</li>
					<li>
						<Link href="/blogs">
							<Button type="link">بلاگ</Button>
						</Link>
					</li>
					<li>
						<Link href="/aboutUs">
							<Button type="link">درباره ما</Button>
						</Link>
					</li>
					<li>
						<Link href="/commercial-coperation">
							<Button type="link">همکاری تجاری</Button>
						</Link>
					</li>
					<li>
						<div>
							<Button type="primary" className="p-5">
								باز کردن حساب بلو
							</Button>
						</div>
					</li>
				</ul>
			</div>
		</div>
	);
}
