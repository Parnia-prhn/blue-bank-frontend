import React from "react";
import { Button } from "antd";
export default function NavHeader() {
  return (
    <div>
      <div className="">
        <ul className="flex  flex-col justify-end space-y-3 ">
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
