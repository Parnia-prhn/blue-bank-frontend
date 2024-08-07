import React, { useEffect, useState } from "react";
import { Pagination, Card } from "antd";
import axios from "axios";
import Link from "next/link";
// const blogs = [
//   {
//     id: 1,
//     name: "نحوه دریافت کد ثنا",
//     description:
//       "کد ثنا، کدی است که می‌توانید با استفاده از آن وارد سامانه‌‌های قضایی شده و پرونده‌های قضایی خود را پیگیری کنید. کد ثنا به‌صورت حضوری و غیر حضوری قابل دریافت است. با ثبت‌نام در سامانه‌ی ثنا و طی کردن مراحل احراز هویت، با استفاده از کدی که به شما تعلق می‌گیرد، می‌توانید از برخی بانک‌ها و موسسه‌های اعتباری وام دریافت کنید.",
//     imagePreview:
//       "https://blubank.sb24.ir/templates/yootheme/cache/03-d44d1261.webp",
//     paragraph: [
//       {
//         id: 1,
//         title: "دریافت کد ثنا به صورت حضوری",
//         text: "اگر می‌خواهید به‌صورت حضوری کد ثنای خود را دریافت کنید، باید به یکی از دفاتر خدمات قضایی مراجعه کرده و بعد از تکمیل مدارک، منتظر تایید اعتبارسنجی بمانید تا کد ثنا به شماره‌ی همراه شما پیامک شود. مدارک لازم برای دریافت کد ثنا به‌صورت حضوری شامل: مدارک شناسایی، یکی از قبوض آب، برق یا گاز، اطلاعات تماس و یک قطعه عکس است.",
//         image: "",
//       },
//       {
//         id: 1,
//         title: "دریافت کد ثنای الکترونیکی",
//         text: "همچنین شما می‌توانید به‌صورت الکترونیکی و با مراجعه به سایت sana.adliran.ir کد ثنای خود را دریافت کنید.(لینک سایت ثنا) در ابتدا اگر برای خودتان می‌خواهید درخواست کد ثنا دهید، باید گزینه‌ی «بر خط شخص را انتخاب کنید»، اما اگر می‌خواهید موسسه یا شرکت خود را درسامانه‌ ثبت کنید باید گزینه‌ی« شخص حقوقی» را انتخاب کنید.(عکس صفحه‌ی اصلی سایت ثنا) بعد از وارد کردن اطلاعات هویتی خود مانند: شماره ملی، تاریخ تولد، سریال شناسنامه و کد امنیتی، می‌توانید وارد حساب کاربری خود شوید. (عکس مرتبط با توضیحات) با انتخاب احراز هویت غیر حضوری، از شما خواسته می‌شود تا یک ویدیوی سلفی از خود با نور و صدای واضح ضبط کنید تا احراز هویت شما تایید شود. در مرحله‌ی آخر با ثبت امضای خود به‌صورت دیجیتال مراحل درخواست شما تکمیل می‌شود. بعد از بررسی و تایید احراز هویت، کد ثنا به شماره‌ی همراه شما پیامک می‌شود .",
//         image: "",
//       },
//     ],
//   },
//   {
//     id: 2,
//     name: "نحوه‌ دریافت کد سخا ",
//     description:
//       " کد سخا، یک کد اختصاصی برای سربازها و افراد مشمول سربازی است. همه‌ی مشمولین نظام وظیفه با دریافت این کد 5 رقمی می‌توانند برای خرید و فروش یا تعویض پلاک و همچنین برای اطلاع و پیگیری وضعیت نظام وظیفه‌ی خود اقدام کنند. برای دریافت کد سخا به‌صورت حضوری، می‌توانید با مراجعه به یکی از دفاتر پلیس+10 و به‌صورت غیر حضوری از طریق سامانه و پیامک اقدام کنید.",
//     imagePreview:
//       "https://blubank.sb24.ir/templates/yootheme/cache/02-83885a78.webp",
//     paragraph: [],
//   },
//   {
//     id: 3,
//     name: "۷۵ میلیون تومان وام کالا بلوبانک با ازکی‌وام ",
//     description:
//       "اگر برای خرید کالایی، هر چقدر هم که پس‌انداز کرده‌اید، باز هم نتوانستید آن را تهیه کنید، می‌توانید وام 75 میلیونی خرید کالای بلوبانک را از طریق سایت «ازکی‌وام» دریافت کنید. بلوبانک از طریق سایت « ازکی‌وام » آسان و بدون ضامن از 10 تا 75 میلیون وام خرید کالا به کاربران ارائه می‌دهد. با دریافت این اعتبار می‌توانید از طریق سایت « ازکی‌وام » و یا به‌صورت حضوری از پنج فروشگاه طرف قرارداد، خرید خود را انجام دهید.",
//     imagePreview:
//       "https://blubank.sb24.ir/templates/yootheme/cache/75m_loan-23031a77.webp",
//     paragraph: [],
//   },
//   {
//     id: 4,
//     name: "از بلو به جونیور ",
//     description:
//       "وقتی بحث از مسائل مالی کودکان می‌شود اغلب والدین با چالش‌هایی در مورد آموزش به فرزند خود روبه‌رو می‌شوند. چالش‌هایی که ناشی از کمبود اطلاعات و امکانات مناسب برای کسب تجربه توسط کودکان است. سیستم مالی که در عصر حاضر با حساب‌های بانکی، کارت‌های بانکی و اپلیکیشن‌های مختلف کار می‌کند با آموزش‌های سنتی مالی که برای کودکان انجام می‌شود، کاملا متفاوت است.",
//     imagePreview:
//       "https://blubank.sb24.ir/templates/yootheme/cache/blujunior-cover-641a8513.webp",
//     paragraph: [],
//   },
//   {
//     id: 5,
//     name: "بلوباکس، فضایی برای پس‌انداز ",
//     description:
//       "اکثر ما در زندگی اهدافی داریم که به‌خاطر آن‌ها بخشی از درآمدمان را کنار می‌گذاریم یا به اصطلاح پس‌انداز می‌کنیم. این کنار گذاشتن به روش‌های مختلفی اتفاق می‌افتد. بعضی از ما، مبلغ مورد نظر را در یک حساب بانکی جدا از حساب بانکی روزانه خود نگهداری می‌کنیم؛ بعضی از ما ترجیح می‌دهیم که این مبلغ را به صورت نقدی و در یک صندوق یا قلک نگه داریم؛ گاهی هم آن را به شخص دیگری امانت می‌دهیم تا به جای ما از این مبلغ نگهداری کند. نکته مشترک همه آن‌ها، این است که اگر این مبلغ در حساب جاری و روزانه ما باقی بماند، به احتمال زیاد پس‌اندازی در کار نخواهد بود و خیلی زود بین باقی هزینه‌های روزانه خرج خواهد شد.",
//     imagePreview:
//       "https://blubank.sb24.ir/templates/yootheme/cache/box-98afcc4a.webp",
//     paragraph: [],
//   },
//   {
//     id: 6,
//     name: "نئوبانک چیست و از کجا می‌آید؟",
//     description:
//       "انتظار برای فرا رسیدن نوبت، گفت‌وگو با گیشه‌داری که گاه به‌دلیل حضور ارباب رجوع‌های مختلف خسته یا عصبانی ا‌ست، پر کردن فرم کاغذی با خودکاری که به نخ بسته شده تا مبادا به سرقت برود و تجربه‌های تلخ و مرارت‌بار ساعت‌ها حضور در شعب بانک‌ها تاثیری ماندگار بر ذهن تمامی مشتریان بانکی گذاشته است. سوال این است آیا می‌توان این تجربه‌ی مرارت‌بار و زمان‌خور را از بین برد؟",
//     imagePreview:
//       "https://blubank.sb24.ir/templates/yootheme/cache/global_growth_of_neo_banks-caa9fbd6.webp",
//     paragraph: [],
//   },
// ];
export default function BlogsPreview() {
  const [blogs, setBlogs] = useState([]);
  // const [meta, setMeta] = useState<any>([]);
  const [meta, setMeta] = useState<{ currentPage: number; totalPages: number }>(
    {
      currentPage: 1,
      totalPages: 0,
    }
  );
  const fetchBlogs = async (page: number = 1, pageSize: number = 6) => {
    try {
      const response = await axios.get(`http://localhost:3300/blogs/getAll`, {
        params: { page, pageSize },
      });
      setBlogs(response.data.data);
      setMeta({
        currentPage: response.data.meta.currentPage,
        totalPages: response.data.meta.totalPages,
      });
    } catch (error) {
      console.error("Error fetching blogs:", error);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  const handlePageChange = (page: number) => {
    fetchBlogs(page);
  };
  return (
    <div>
      <div
        dir="rtl"
        className="flex flex-row justify-center flex-wrap m-7 mt-9 pt-12"
      >
        {blogs.map((blog: any) => (
          <Card
            key={blog._id}
            className="bg-blue-100 m-2 rounded-md shadow-xl border-transparent text-right text-lg"
            hoverable
            style={{ width: 610, height: "fit-content" }}
            cover={
              <Link href={`/blogs/${blog._id}`}>
                <img width="100%" height="auto" src={blog.coverPictureUrl} />
              </Link>
            }
          >
            <Link href={`/blogs/${blog._id}`}>
              <p>
                <b className="text-right">{blog.title}</b>
              </p>
              <p className=" text-right line-clamp-4">
                {blog.text[0].paragraph}
              </p>
            </Link>
          </Card>
        ))}
      </div>

      <Pagination
        className="m-14"
        align="center"
        current={meta.currentPage}
        total={meta.totalPages * 6}
        pageSize={6}
        onChange={handlePageChange}
      />
    </div>
  );
}
