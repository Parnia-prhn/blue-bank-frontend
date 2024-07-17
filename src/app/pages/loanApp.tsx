import React, { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import { IoSpeedometer } from "react-icons/io5";
import { GiSwapBag } from "react-icons/gi";
import { TbKeyframeAlignHorizontalFilled } from "react-icons/tb";
import { Button, Divider, Steps, Timeline } from "antd";
import { PiNumberCircleOne } from "react-icons/pi";
import { PiNumberCircleTwo } from "react-icons/pi";
import { PiNumberCircleThree } from "react-icons/pi";
import { PiNumberCircleFour } from "react-icons/pi";
import { PiNumberCircleFive } from "react-icons/pi";
export default function LoanApp() {
  const [current, setCurrent] = useState(0);

  const onChange = (value: number) => {
    console.log("onChange:", value);
    setCurrent(value);
  };
  return (
    <div dir="rtl" className="flex flex-col justify-center bg-emerald-50 ">
      <div className="bg-purple-600 flex flex-col rounded-b-lg">
        <div className="flex flex-row mt-5 text-white">
          <IoIosArrowForward className=" place-self-start size-9 m-5 " />
          <h1 className="font-bold place-self-center mt-1 text-white">
            مسیر اعتباری
          </h1>
        </div>
        <img
          width="200"
          className="justify-self-center place-self-center m-4"
          src="https://blubank.sb24.ir/loan-app/assets/img/hero-img-vam.png"
        />
        <h1 className="font-bold text-center text-2xl m-5 text-white">
          وام ولی دست یافتنی
        </h1>
        <div className=" flex  flex-row space-x-0  w-full h-19">
          <div className="bg-emerald-50 w-1/2 rounded-tl-full h-18"></div>
          <p className="text-purple-600">|</p>
          <div className="bg-emerald-50  w-1/2 rounded-tr-full"></div>
        </div>
      </div>

      <div>
        <h1 className="font-bold m-5">چرا وام نقدی بلو؟</h1>
        <div className="flex flex-col md:flex-row">
          <div className="flex flex-col">
            <FaUser className=" size-14 bg-emerald-200 rounded-full m-5 text-emerald-500 place-self-center" />
            <h1 className="text-center font-bold m-2 ">بی ضامن، بی‌ وثیقه</h1>
            <p className="m-2 text-center">
              این وام بدون نیاز به ضامن و وثیقه و با پردازش رفتار مالی در بلو،
              برای شما فعال می‌شود.
            </p>
          </div>
          <div className="flex flex-col">
            <IoSpeedometer className="size-14 bg-emerald-200 rounded-full m-5 text-emerald-500 place-self-center" />
            <h1 className="text-center font-bold m-2 ">سریع و فوری</h1>
            <p className="m-2 text-center">
              بعد از فعال شدن وام، در کم‌تر از ۵ دقیقه، وام خود را دریافت کنید.{" "}
            </p>
          </div>
          <div className="flex flex-col">
            <GiSwapBag className="size-14 bg-emerald-200 rounded-full m-5 text-emerald-500 place-self-center" />
            <h1 className="text-center font-bold m-2 ">کاملا آنلاین</h1>
            <p className="m-2 text-center">
              رای دریافت وام نیاز به هیچگونه مراجعه حضوری ندارید.تنها با استفاده
              از گوشی همراه و کاملا آنلاین وام بگیرید.
            </p>
          </div>
        </div>
      </div>
      <TbKeyframeAlignHorizontalFilled className="m-2 text-center text-purple-600 size-8 place-self-center" />
      <div className="bg-purple-600 flex flex-col w-full h-35 text-white">
        <h1 className="mt-9 font-bold text-xl text-center">
          تا ۴۰ میلیون تومان، وام بی ضامن و وثیقه
        </h1>
        <p className="text-center m-2 mb-5">
          در مرحله اول براساس میانگین موجودی حساب تا سقف ۱۰ میلیون تومان و مبلغ
          وام های بعدی براساس رفتار مالی شما تا سقف ۴۰ میلیون تومان فعال می‌شود.{" "}
        </p>
      </div>
      <TbKeyframeAlignHorizontalFilled className="m-2 text-center text-purple-600 size-8 place-self-center" />
      <h1 className="text-right font-bold text-lg m-3">رفتار مالی در بلو؟</h1>
      <p className="text-right m-2 mb-7">
        اولین گام از مسیر اعتباری، دریافت یک وام تا سقف ۱۰ میلیون تومان، براساس
        میانگین حساب ۳ ماهه‌ی شما است. در گام‌های بعدی با سنجش رفتار مالی مبلغ
        وام افزایش می‌یابد. رفتار مالی شما در بلو با این مقادیر سنجیده می‌شود.{" "}
      </p>
      <div className="flex justify-center place-self-center  rounded-lg">
        <ul className="rtl:list-disc text-right mb-5 border-emerald-300 p-8 border-b-8 border-t-8 rounded-3xl">
          <li>میزان گردش مالی</li>
          <li>تعداد و مبلغ تراکنش ها</li>
          <li>استفاده از قابلیت‌ها و خدمات اپلیکیشن</li>
          <li>
            خوش حسابی در بازپرداخت وام‌های بلو، بیشترین تاثیر را در افزایش مبلغ
            وام‌های بعدی شما دارد.{" "}
          </li>
        </ul>
      </div>
      <h1 className="text-right font-bold text-xl m-2">
        مراحل دریافت وام در بلو؟
      </h1>
      <Timeline
        className=" m-8 "
        mode="left"
        items={[
          {
            // dot: (
            //   <PiNumberCircleOne
            //     style={{ fontSize: "16px" }}
            //     className="text-emerald-500 "
            //   />
            // ),
            children: (
              <>
                <p className="text-lg font-semiblod m-4">فعال شدن وام</p>
                <p>
                  وام اول شما براساس میانگین موجودی، تا ۱۰ میلیون تومان و وام
                  های بعدی براساس رفتار مالی شما تا ۴۰ میلیون تومان به‌صورت
                  خودکار و در فواصل زمانی ماهانه تعیین می‌شود
                </p>
              </>
            ),
          },
          {
            // dot: (
            //   <PiNumberCircleTwo
            //     style={{ fontSize: "22px" }}
            //     className="text-emerald-500 "
            //   />
            // ),
            children: (
              <>
                <p className="text-lg font-semiblod">درخواست وام</p>
                <p>
                  بعد از فعال شدن وام شما می‌توانید تا سقف اعتبار فعال شده، مبلغ
                  و تعداد اقساط وام را انتخاب کنید.
                </p>
              </>
            ),
          },
          {
            // dot: (
            //   <PiNumberCircleThree
            //     style={{ fontSize: "22px" }}
            //     className="text-emerald-500 "
            //   />
            // ),
            children: (
              <>
                <p className="text-lg font-semiblod">استعلام سوابق بانکی</p>
                <p>
                  براساس قوانین بانک مرکزی قبل از دریافت وام استعلام وضعیت چک
                  برگشتی، اقساط معوق و امتیاز اعتباری شما توسط بلو انجام می‌شود.
                </p>
              </>
            ),
          },
          {
            // dot: (
            //   <PiNumberCircleFour
            //     style={{ fontSize: "22px" }}
            //     className="text-emerald-500 "
            //   />
            // ),
            children: (
              <>
                <p className="text-lg font-semiblod">تایید قرارداد</p>
                <p>
                  درصورت تایید استعلام از سوی بانک مرکزی، باید با مراجعه به
                  اپلیکیشن بلو شرایط و ضوابط دریافت وام را تایید نمایید.
                </p>
              </>
            ),
          },
          {
            // dot: (
            //   <PiNumberCircleFive
            //     style={{ fontSize: "22px" }}
            //     className="text-emerald-500 "
            //   />
            // ),
            children: (
              <>
                <p className="text-lg font-semiblod">واریز وام</p>
                <p>
                  بعد از تایید قرارداد توسط شما، مبلغ وام ظرف چند دقیقه به حساب
                  شما واریز می‌شود.
                </p>
              </>
            ),
          },
        ]}
      />

      <TbKeyframeAlignHorizontalFilled className="m-2 text-center text-purple-600 size-8 place-self-center" />
      <div className="bg-purple-600 flex flex-col w-full h-45 text-white">
        <h1 className="text-center font-bold m-3 mt-6">وام شرکای تجاری بلو </h1>
        <h1 className="text-center m-3">تا سقف ۱۰۰ میلیون تومان </h1>
        <p className="text-center mb-6">
          برای دریافت وام با مبالغ بیشتر، می توانید از وام شرکای تجاری بلو
          استفاده کنید.{" "}
        </p>
      </div>
      <TbKeyframeAlignHorizontalFilled className="m-2 text-center text-purple-600 size-8 place-self-center" />
      <h1 className="text-right font-bold m-3">وام شرکای تجاری</h1>
      <p className="text-right m-2">
        شما می‌توانید از طریق شرکای تجاری بلو برای دریافت وام تا سقف ۱۰۰ میلیون
        تومان اقدام نمایید. شرایط و ضوابط دریافت این وام‌ها توسط شرکای تجاری بلو
        تعیین می‌شود و بلو منابع مورد نیاز این وام‌ها را تامین می‌کند.{" "}
      </p>
      <Button className="p-4 m-3 w-1/4 place-self-center">
        مشاهده شرکای تجاری
      </Button>
      <TbKeyframeAlignHorizontalFilled className="m-2 text-center text-purple-600 size-8 place-self-center" />
      <div className="bg-purple-600 flex flex-col w-full h-35 text-white">
        <h1 className="text-center font-bold m-3 mt-5">وام سازمانی </h1>
        <h1 className="text-center m-3">تا سقف ۱۰۰ میلیون تومان</h1>
        <p className="text-center m-2 mb-6">
          شرکت‌ها و سازمان‌ها می‌توانند بعد از انعقاد قرارداد با بلو، برای
          کارکنان خود تا سقف تعیین شده درخواست وام دهند.{" "}
        </p>
      </div>
      <TbKeyframeAlignHorizontalFilled className="m-2 text-center text-purple-600 size-8 place-self-center" />
      <h1 className="m-8 font-bold text-right">وام سازمانی</h1>
      <p className="text-right m-3">
        بلو برای شرکت‌ها و سازمان‌ها شرایطی را فراهم نموده که بتوانند برای
        کارکنان خود درخواست وام دهند. برای این کار لازم است قرارداد اعطای وام
        سازمانی با بلو منعقد شود و پس از آن، کارکنان معرفی شده می‌توانند از طریق
        اپلیکیشن بلو وام خود را دریافت نمایند.{" "}
      </p>
      <Button className="p-4 m-3 mt-8 w-1/4 place-self-center">
        مشاهده شرایط وام سازمانی
      </Button>
      <div className="bg-white w-full place-self-center text-center mt-5 p-7">
        © 2024 تمام حقوق برای بلوبانک سامان محفوظ است.{" "}
      </div>
    </div>
  );
}
