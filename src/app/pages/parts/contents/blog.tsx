import React, { useEffect, useState } from "react";
import { Button } from "antd";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { useRouter } from "next/router";
import axios from "axios";
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
//         title: "نحوه‌ی‌ دریافت کد ثنا",
//         text: "کد ثنا، کدی است که می‌توانید با استفاده از آن وارد سامانه‌‌های قضایی شده و پرونده‌های قضایی خود را پیگیری کنید. کد ثنا به‌صورت حضوری و غیر حضوری قابل دریافت است. با ثبت‌نام در سامانه‌ی ثنا و طی کردن مراحل احراز هویت، با استفاده از کدی که به شما تعلق می‌گیرد، می‌توانید از برخی بانک‌ها و موسسه‌های اعتباری وام دریافت کنید.",
//         image: "",
//       },
//       {
//         id: 2,
//         title: "دریافت کد ثنا به صورت حضوری",
//         text: "اگر می‌خواهید به‌صورت حضوری کد ثنای خود را دریافت کنید، باید به یکی از دفاتر خدمات قضایی مراجعه کرده و بعد از تکمیل مدارک، منتظر تایید اعتبارسنجی بمانید تا کد ثنا به شماره‌ی همراه شما پیامک شود. مدارک لازم برای دریافت کد ثنا به‌صورت حضوری شامل: مدارک شناسایی، یکی از قبوض آب، برق یا گاز، اطلاعات تماس و یک قطعه عکس است.",
//         image: "",
//       },
//       {
//         id: 3,
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

export default function Blog() {
  const router = useRouter();
  const { blogId } = router.query;
  const [blog, setBlog] = useState([]);
  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3300/blogs/${blogId}`
        );
        setBlog(response.data);
      } catch (error) {
        console.error("Error fetching Blog:", error);
      }
    };
    fetchBlog();
    return () => {};
  }, []);
  return (
    <div
      dir="rtl"
      className="flex flex-col md:grid md:grid-cols-4 m-7 mt-14 pt-14"
    >
      <div className="md:col-span-1 mt-9 mb-4">
        <img src={blog.coverPictureUrl} />
      </div>
      <div className=" md:col-span-3 text-justify text-lg m-5">
        {blog.text.map((para) => (
          <div key={para._id}>
            <h1 className="font-bold text-xl m-2">{para.title}</h1>
            <p className="text-lg m-2">{para.paragraph}</p>
            <img
              width={250}
              className="flex justify-center m-2"
              src={para.imageUrl}
            />
          </div>
        ))}
      </div>
      <div className="mt-14 mb-4 flex flex-row space-x-11 justify-center md:col-start-3">
        <Button type="link" className="flex ">
          <div className="mt-14 flex flex-row ">
            <IoIosArrowForward className="size-7" />
            <p>قبلی</p>
          </div>
        </Button>
        <Button type="link" className="flex ">
          <div className="mt-14 flex flex-row ">
            <p>بعدی</p>
            <IoIosArrowBack className="size-7" />
          </div>
        </Button>
      </div>
    </div>
  );
}
