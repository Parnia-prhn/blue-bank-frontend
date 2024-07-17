"use client";
import { useRouter, useSearchParams } from "next/navigation";
import BlogPage from "../../pages/blogPage";
export default function BlogsPageF() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  console.log(id);

  return (
    <div>
      <BlogPage id={id} />
    </div>
  );
}
