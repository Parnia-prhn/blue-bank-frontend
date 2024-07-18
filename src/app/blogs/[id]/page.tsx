"use client";
import { usePathname } from "next/navigation";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import BlogPage from "../../pages/blogPage";
export default function BlogsPageF() {
  // const { id } = useParams();
  const pathname = usePathname();
  const id = pathname.split("/").pop();
  const [blogId, setBlogId] = useState<any>("");
  console.log("id1", id);
  useEffect(() => {
    if (id) {
      setBlogId(id);
    }
  }, [id]);
  console.log("id11", blogId);
  return (
    <div>
      <BlogPage id={blogId} />
    </div>
  );
}
