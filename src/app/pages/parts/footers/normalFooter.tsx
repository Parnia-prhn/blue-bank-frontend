import React, { useState } from "react";
import { Button } from "antd";
import { IoShareSocial } from "react-icons/io5";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import Link from "next/link";
const android = "https://blubank.sb24.ir/images/download/Android_download.svg";
const bazar =
  "https://blubank.sb24.ir/templates/yootheme/cache/badge-new-10139ac2.webp";
const myket =
  "https://blubank.sb24.ir/templates/yootheme/cache/myket-fa-0c92676a.webp";
const web =
  "https://blubank.sb24.ir/templates/yootheme/cache/Web-Badge-Black4x-9fe6e811.webp";
const sibapp =
  "https://blubank.sb24.ir/templates/yootheme/cache/Sibapp-Badge-Black-be3bb22f.webp";
const anardooni =
  "https://blubank.sb24.ir/templates/yootheme/cache/anardoni-badge-black-persian-55fe5684.webp";
const sibche =
  "https://blubank.sb24.ir/templates/yootheme/cache/Sibche-Badge-Black4x-e2a2896b.webp";
const iapps =
  "https://blubank.sb24.ir/templates/yootheme/cache/iapps-icon-978a3949.webp";
const logoblue =
  "https://blubank.sb24.ir/templates/yootheme/cache/logo-small-footer-83c9bff4.webp";
export default function NormalFooter() {
  return (
    <div className="bg-white m-3 p-3 h-1/4">
      <div className="flex flex-col md:flex-row grid grid-cols-4">
        <div className=" flex flex-col m-3 p-3">
          <a href="" className="p-1">
            <img src={sibapp} />
          </a>
          <a href="" className="p-1">
            <img src={anardooni} />
          </a>
          <a href="" className="p-1">
            <img src={sibche} />
          </a>
          <a href="" className="p-1">
            <img src={iapps} />
          </a>
        </div>
        <div className=" flex flex-col m-3 p-3">
          <a href="" className="p-1">
            <img width="180" src={android} />
          </a>
          <a href="" className="p-1">
            <img src={bazar} />
          </a>
          <a href="" className="p-1">
            <img src={myket} />
          </a>
          <a href="" className="p-1">
            <img src={web} />
          </a>
        </div>
        <div className="text-right text-lg">
          <h2 className="m-3 p-3">بلوبانک سامان</h2>
          <Link href="/aboutUs" className="m-2 p-2">
            <p>درباره ما</p>
          </Link>
          <Link href="/commerical-coperation" className="m-2 p-2">
            <p>موقعیت های شغلی</p>
          </Link>
          <p className="m-3 p-3">تلفن: ۰۲۱۹۱۰۳۶۰۶۰</p>
        </div>
        <div className="text-right text-lg flex flex-col">
          <h2 className="m-3 p-3">ارتباط با ما و اخبار </h2>
          <a href="" className="m-3 p-3">
            <p>بلولاین(ارتباط با مشتریان)</p>
          </a>
          <a href="" className="m-3 p-3">
            <p>ارتباط با ما</p>
          </a>
          <p className="m-3 p-3">
            آدرس: تهران، خیابان نلسون ماندلا، خیابان شهید رحیمی، پلاک ۴۳
          </p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row">
        <div className="flex flex-row m-3 p-3">
          <a href="" className="">
            <img src={logoblue} />
          </a>
          <p className="p-2">
            Copyright © 2024 bluBank Saman. All rights reserved
          </p>
        </div>
        <div className=" flex flex-col md:flex-row m-3 p-3">
          <Button
            shape="circle"
            className="m-3 p-3 bg-blue-500 text-white"
            icon={<IoShareSocial />}
          />
          <Button
            shape="circle"
            className="m-3 p-3 bg-blue-500 text-white"
            icon={<FaTwitter />}
          />
          <Button
            shape="circle"
            className="m-3 p-3 bg-blue-500 text-white"
            icon={<FaInstagram />}
          />
          <Button
            shape="circle"
            className="m-3 p-3 bg-blue-500 text-white"
            icon={<FaLinkedin />}
          />
        </div>
      </div>
    </div>
  );
}
