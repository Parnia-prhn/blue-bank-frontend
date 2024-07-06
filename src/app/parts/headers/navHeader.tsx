import React from "react";
import { Button } from "antd";
export default function NavHeader() {
  return (
    <div>
      <div className="flex flex-col">
        <ul>
          <li>
            <Button type="link">خانه</Button>
          </li>
          <li>
            <Button type="link">موقعیت های شغلی</Button>
          </li>
          <li>
            <Button type="link">سوالات متداول</Button>
          </li>
          <li>
            <Button type="link">بلاگ</Button>
          </li>
          <li>
            <Button type="link">درباره ما</Button>
          </li>
          <li>
            <Button type="link">همکاری تجاری</Button>
          </li>
        </ul>
        <div>
          <Button type="primary">باز کردن حساب بلو</Button>
        </div>
      </div>
    </div>
  );
}
