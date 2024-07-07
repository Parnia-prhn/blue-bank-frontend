import React, { useState } from "react";
import { Button } from "antd";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
export default function AboutUs() {
  return (
    <div
      dir="rtl"
      className="flex flex-col space-y-5 text-ellipsis justify-items-center text-black text-right  m-14 p-14 "
    >
      <h1 className="font-bold place-self-center text-xl mb-7">درباره ما </h1>
      <p className="text-lg">
        بانک‌ها از زمان تولد تا امروز همیشه در حال بهبود خدمات خود بوده‌اند و در
        این مسیر همیشه از امکانات و ابزارهای به‌روز بهره‌ خوبی گرفته‌اند، اما
        آیا تابه‌حال کسی به این موضوع فکر کرده که امروز و یک‌بار دیگر، بانک را
        با تکنولوژی روز و نیازهای جدید کاربران از نو بسازد؟ با همین نگاه، مبنای
        شکل‌گیری "بلو"، بهبود وضع موجود نیست؛ بلکه آفرینش دوباره‌ی یک بانک است.
      </p>
      <p className="text-lg">
        بلو، یک پلتفرم دیجیتال بانکی است که در روزهای پایانی سال 1398 متأثر از
        کرونا، آغاز به‌کار کرد، اما این بار بدون نیاز به شعب، فرم‌های کاغذی و
        فرآیندهای معمول و همچنین با درک بهتر نیاز مشتریان. شاید نهایت بلو را
        بتوان تجربه‌ی جدیدی دانست که فاقد اصطکاک‌های معمول و پیچیدگی‌های
        بانک‌های سنتی است و سعی کرده خود را به نیازهای نسل جوان امروزی از یک
        بانک نزدیک کند.
      </p>
      <p className="text-lg">
        البته این موضوع به معنی نقض قوانین پایه یا موازین شرعی در طراحی محصولات
        و خدمات نیست بلکه منظور، نگاه نوآورانه به بنیان‌های بانک و خلق محصولات
        جدید با همان الزامات پایه‌ای اما در فرآیندی جدید است. شاید مهم‌ترین
        موضوعی که باید امروز تغییر کند، فرآیندهایی است که خیلی از آن‌ها فاقد
        وجاهت و ضرورت لازم در دوره کنونی است.
      </p>
      <p className="text-lg">
        اما فعالیت در صنعت حساس و قانون‌مند بانکی، متفاوت از سایر حوزه‌های
        فناوری است و لازم است نگرانی‌های به‌حق بانک مرکزی و همین طور نیاز
        کاربران عزیز به فاکتور مهم اعتماد را پاسخ داد. در همین راستا بانک سامان
        تصمیم گرفت با هدف پاسخ به این دغدغه‌ها، پلتفرم دیجیتال خود را به نام
        بلو، اجرا کند. کلیه حقوق مادی و معنوی بلو متعلق به بانک سامان است.
      </p>
      <div className="mt-14 flex flex-row space-x-11 justify-center">
        <Button type="link" className="flex justify-start">
          <div className="mt-14 flex flex-row justify-start">
            <IoIosArrowForward className="size-7" />
            <p>قبلی</p>
          </div>
        </Button>
        <Button type="link" className="flex justify-end">
          <div className="mt-14 flex flex-row justify-end">
            <p>بعدی</p>
            <IoIosArrowBack className="size-7" />
          </div>
        </Button>
      </div>
    </div>
  );
}
