import React, { useEffect, useState } from "react";
import { Button } from "antd";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";

import axios from "axios";
import { usePathname } from "next/navigation";

interface BlogProps {
  id: string;
}
export default function Blog({ id }: BlogProps) {
  const [blog, setBlog] = useState<any>(null);
  // const pathname = usePathname();
  // const blogId = pathname.split("/").pop();
  console.log(id);
  useEffect(() => {
    // const fetchBlog = async () => {
    //   try {
    //     const response = await axios.get(`http://[::1]:3300/blogs/${blogId}`);
    //     console.log("blog", response.data);
    //     setBlog(response.data);
    //   } catch (error) {
    //     console.error("Error fetching Blog:", error);
    //   }
    // };
    // fetchBlog();
    // return () => {};
    console.log(id);
    if (id)
      axios
        .get(`http://localhost:3300/blogs/${id}`)
        .then((response) => {
          setBlog(response.data);
        })
        .catch((error: any) => {
          console.error("Error fetching Blog:", error);
        });
  }, [id]);

  return (
    <div
      dir="rtl"
      className="flex flex-col md:grid md:grid-cols-4 m-7 mt-14 pt-14"
    >
      {blog && (
        <>
          <div className="md:col-span-1 mt-9 mb-4">
            <img src={blog.coverPictureUrl} />
          </div>
          <div className=" md:col-span-3 text-justify text-lg m-5">
            {blog.text.map((para: any) => (
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
        </>
      )}
    </div>
  );
}
