import React, { useState } from "react";
import { Button, Drawer } from "antd";
import NavHeader from "./navHeader";
import { IoIosMenu } from "react-icons/io";
import Link from "next/link";

const blueLogo =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIEAAAB2CAYAAADvN/DxAAAACXBIWXMAABcSAAAXEgFnn9JSAAAFfmlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgOS4wLWMwMDAgNzkuMTcxYzI3ZiwgMjAyMi8wOC8xNi0xODowMjo0MyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDI0LjAgKFdpbmRvd3MpIiB4bXA6Q3JlYXRlRGF0ZT0iMjAyMy0wMS0yOFQxODoxNDo1OSswMzozMCIgeG1wOk1vZGlmeURhdGU9IjIwMjMtMDEtMjhUMTg6MTY6MTIrMDM6MzAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjMtMDEtMjhUMTg6MTY6MTIrMDM6MzAiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOmRiZDNiMDEzLTQ0N2EtYjY0Ny04MWE3LWFlZTA1ZmYwMGMwYSIgeG1wTU06RG9jdW1lbnRJRD0i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";
export default function Header() {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };
  return (
    <div className="bg-white w-full h-auto ">
      <div className="flex flex-row-reverse justify-center">
        <div className="flex flex-row-reverse">
          <IoIosMenu
            className="block col-start-0 justify-start size-10 p-3 m-3 lg:hidden"
            onClick={showDrawer}
          />

          <img
            alt="blue-bank-logo"
            src={blueLogo}
            className="size-16 m-3 justify-center justify-items-end lg:justify-end ml-9"
          />
        </div>
        <div className="mr-8  justify-end hidden lg:block">
          <ul className="pt-0 mt-0 flex flex-row-reverse ">
            <li className="p-3 border-transparent hover:border-4 hover:border-t-blue-800 ">
              <Button type="link">خانه</Button>
            </li>
            <li className="p-3 border-transparent hover:border-4 hover:border-t-blue-800">
              <Button type="link">موقعیت های شغلی</Button>
            </li>
            <li className="p-3 border-transparent hover:border-4 hover:border-t-blue-800">
              <Link href="/faq">
                <Button type="link">سوالات متداول</Button>
              </Link>
            </li>
            <li className="p-3 border-transparent hover:border-4 hover:border-t-blue-800">
              <Link href="/blogs">
                <Button type="link">بلاگ</Button>
              </Link>
            </li>
            <li className="p-3 border-transparent hover:border-4 hover:border-t-blue-800">
              <Link href="/aboutUs">
                <Button type="link">درباره ما</Button>
              </Link>
            </li>
            <li className="p-3 border-transparent hover:border-4 hover:border-t-blue-800">
              <Link href="/commerical-coperation">
                <Button type="link">همکاری تجاری</Button>
              </Link>
            </li>
            <li>
              <div>
                <Button type="primary" className="p-5 m-6">
                  باز کردن حساب بلو
                </Button>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <Drawer onClose={onClose} open={open}>
        <NavHeader />
      </Drawer>
    </div>
  );
}
