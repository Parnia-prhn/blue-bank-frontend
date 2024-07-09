import React, { useState } from "react";
import { Button, Segmented, ConfigProvider, Collapse } from "antd";
import { IoIosArrowRoundBack } from "react-icons/io";
import { FaPlus } from "react-icons/fa6";
import type { CSSProperties } from "react";
const questions = [
  {
    id: 1,
    subject: "عمومی",
    items: [
      {
        id: 1,
        question: "چگونه می توانم در بلو حساب باز کنم؟",
        answer: (
          <>
            ۱- اپلیکیشن بلو را دانلود و نصب کنید (لینک صفحه‌ی دانلود)
            <br />
            ۲- با خط تلفنی که به‌نام خودتان و فعال است، ثبت‌نام را شروع کنید
            <br />
            ۳- همراه داشتن اصل کارت ملی هوشمند یا همراه داشتن اصل شناسنامه و «کد
            رهگیری درخواست صدور کارت ملی هوشمند» برای ثبت تصاویر آن‌ها
            <br />
            ۴- ضبط و ارسال یک ویدئو‌ی سلفی به‌صورت زنده
          </>
        ),
      },
      {
        id: 2,
        question: "هزینه باز کردن حساب و دریافت بلو کارت چقدر است؟",
        answer: "باز کردن حساب، صدور و ارسال بلوکارت کاملا رایگان است.",
      },
      {
        id: 3,
        question: "شرایط دریافت وام بلو به چه صورت است؟",
        answer:
          "برای دریافت وام نقدی بلو در مرحله اول، میانگین ماهانه‌ موجودی شما در ۳ ماه متوالی باید بیشتر از ۳ میلیون تومان باشد. بعد از تعیین مبلغ اعتبار از روی میانگین ۳ ماه، سابقه چک برگشتی، تسهیلات معوق و امتیاز اعتباری شما از سامانه‌های بانک مرکزی استعلام می‌شود. به شرط نداشتن چک برگشتی و تسهیلات معوق، وام به شما تعلق می‌گیرد.  بعد از تسویه این وام و با توجه به رفتار مالی خود، می‌توانید وام‌های بعدی را تا سقف ۴۰ میلیون تومان دریافت کنید.",
      },
      {
        id: 4,
        question: "طرح های وام در بلو چگونه است؟",
        answer:
          " در بلو سه طرح وام تعریف شده که بسته به نیازتان و این‌که شرایط دریافت کدام یک را دارید، می‌توانید از آن‌ها استفاده کنید: ۱. وام نقدی: این وام به‌صورت فوری به حسابتان واریز می‌شود. در مرحله اول، با توجه به میانگین موجودی سه ماه متوالی شما، وامی با مبلغ ۳ تا ۱۰ میلیون تومان برایتان فعال می‌شود. بعد از تسویه این وام و با توجه به رفتار مالی شما، وام‌های بعدی تا سقف ۴۰ میلیون تومان فعال خواهند شد.  ۲. وام سازمانی: این وام با همکاری شرکت‌ها و به کارمندان همان شرکت پرداخت می‌شود. شرایط دریافت این وام برای هر شرکت متفاوت از دیگری است.  ۳. وام مشارکتی با پلتفرم‌ها و وب‌سایت‌ها: این وام با همکاری پلتفرم‌ها و وب‌سایت‌هایی مثل ازکی‌وام، به مشتریان آن‌ها تعلق می‌گیرد.",
      },
    ],
  },
  {
    id: 2,
    subject: "بازکردن حساب",
    items: [
      {
        id: 1,
        question: "",
        answer: "",
      },
    ],
  },
  {
    id: 3,
    subject: "کارت بانکی",
    items: [
      {
        id: 1,
        question: "",
        answer: "",
      },
    ],
  },
  {
    id: 4,
    subject: "وام",
    items: [
      {
        id: 1,
        question: "",
        answer: "",
      },
    ],
  },
  {
    id: 5,
    subject: "حساب کاربری",
    items: [
      {
        id: 1,
        question: "",
        answer: "",
      },
    ],
  },
  {
    id: 6,
    subject: "تراکنش ها",
    items: [
      {
        id: 1,
        question: "",
        answer: "",
      },
    ],
  },
  {
    id: 7,
    subject: "بلوجونیور",
    items: [
      {
        id: 1,
        question: "",
        answer: "",
      },
    ],
  },
];

export default function FAQ() {
  const [selectedSubject, setSelectedSubject] = useState(questions[0].subject);
  const [items, setItems] = useState(
    questions[0].items.map((element) => ({
      key: element.id,
      label: element.question,
      children: <p>{element.answer}</p>,
    }))
  );

  const optionsValue = questions.map((item) => item.subject);

  const handleSubjectChange = (value: string) => {
    const selected = questions.find((item) => item.subject === value);
    if (selected) {
      setSelectedSubject(value);
      setItems(
        selected.items.map((element) => ({
          key: element.id,
          label: element.question,
          children: <p className="text-wrap text-right ">{element.answer}</p>,
        }))
      );
    }
  };

  return (
    <ConfigProvider
      theme={{
        components: {
          Button: {
            defaultBg: "rgb(255, 255, 255)",
            defaultActiveColor: "rgb(0, 0, 0)",
            defaultBorderColor: "rgb(221, 224, 228)",
            defaultColor: "rgb(30, 41, 59)",
            defaultHoverBg: "rgb(255, 255, 255)",
            defaultHoverBorderColor: "rgb(37, 80, 255)",
            defaultHoverColor: "rgb(0, 0, 0)",
            defaultActiveBorderColor: "rgb(37, 80, 255)",
          },
          Segmented: {
            itemActiveBg: "rgb(204, 225, 255)",
            itemColor: "rgb(102, 102, 102)",
            itemSelectedBg: "rgb(0, 128, 255)",
            itemSelectedColor: "rgb(253, 253, 253)",
            trackBg: "rgb(255, 255, 255)",
            itemHoverColor: "rgb(102, 102, 102)",
            controlHeight: 44,
            controlPaddingHorizontal: 24,
            fontSize: 16,

            borderRadius: 39,
            borderRadiusLG: 35,
            borderRadiusSM: 14,
            itemHoverBg: "rgb(204, 225, 255)",
          },
          Collapse: {
            contentBg: "rgb(0, 112, 252)",
            headerBg: "rgb(255, 255, 255)",
            colorBorder: "rgb(158, 158, 158)",
            colorTextHeading: "rgba(0, 0, 0, 0.88)",
            colorText: "rgba(255, 255, 255, 0.88)",
            fontSize: 17,
            fontSizeIcon: 15,
            borderRadiusLG: 15,
          },
        },
      }}
    >
      <div className="flex justify-center ">
        <div dir="rtl" className="flex flex-col justify-center m-7  ">
          <h3 className="pr-3 pl-3 pt-1 pb-1 text-white text-sm place-self-center bg-emerald-600 w-auto rounded-full m-5">
            سوالات متداول
          </h3>
          <h1 className="font-semibold text-2xl m-4 place-self-center">
            سوالی برات پیش اومده؟
          </h1>
          <h3 className="text-slate-500 m-3 mb-12 place-self-center">
            پاسخ سوالات خود را از دسته‌بندی‌های زیر پیدا کنید
          </h3>
          <div>
            <Segmented
              options={optionsValue}
              value={selectedSubject}
              onChange={handleSubjectChange}
              className="m-5 place-self-center justify-self-center w-auto"
            />
            <Collapse
              accordion
              items={items}
              expandIcon={({ isActive }) => (
                <FaPlus
                  style={{
                    transform: isActive ? "rotate(45deg)" : "rotate(0deg)",
                  }}
                />
              )}
              className="m-3 place-self-center justify-self-center w-auto"
            />
          </div>
          <div className="flex flex-row m-5">
            <div className="flex flex-col place-content-center">
              <h1 className="text-2xl text-right font-semibold m-2">
                گفت‌وگو با بلولاین
              </h1>
              <p className="text-right">
                کارشناسان بلو ۲۴ ساعته در تمام روزهای هفته و ماه، آماده‌ی
                پاسخ‌گویی صمیمانه به شما هستند.
              </p>
              <Button className="p-4 m-3">
                <div className="flex flex-row font-semibold">
                  شروع گفت و گو
                  <IoIosArrowRoundBack className="size-7 " />
                </div>
              </Button>
            </div>
            <img
              className="m-7"
              src="https://blubank.sb24.ir/images/yootheme/support-cta.svg"
            />
          </div>
        </div>
      </div>
    </ConfigProvider>
  );
}
