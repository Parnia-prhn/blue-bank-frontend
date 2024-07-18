"use client";
import { usePathname } from "next/navigation";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import BlogPage from "../../pages/blogPage";
export default function BlogsPageF() {
  const { id } = useParams();
  const [blogId, setBlogId] = useState<any>("");
  useEffect(() => {
    if (id) {
      setBlogId(id);
    }
  }, [id]);
  return (
    <div>
      <BlogPage id={blogId} />
    </div>
  );
}
