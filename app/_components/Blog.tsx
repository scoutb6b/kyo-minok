import BlogCard from "./BlogCard";
import { Link } from "react-router";
import { ArrowRightIcon } from "@phosphor-icons/react";
import type { Post } from "~/_types/Post";

type Props = {
  posts: Post[];
};

export default function Blog({ posts }: Props) {
  return (
    <div className="lg:row-span-3 lg:order-1 order-1 bg-card rounded-2xl shadow-lg grid gap-4 p-5 bg-white border-border/50 overflow-hidden">
      <h3 className="border-b border-gray-300 font-bold">
        記事
        <span className="text-sm font-medium pl-2">
          - 興味のあるものの1歩目を記録していきます
        </span>
      </h3>
      {posts?.map((post) => (
        <Link to={`/blog/${post.id}`} key={post.id}>
          <BlogCard post={post} />
        </Link>
      ))}
      <div className="flex mx-auto my-5">
        <Link
          to="/blog"
          className="group flex items-center gap-1 border border-amber-400 py-1.5 px-4 rounded-2xl text-amber-500 hover:bg-amber-400 hover:text-white hover:border-amber-50 hover:duration-500"
        >
          一覧で見る
          <ArrowRightIcon
            size={24}
            weight="regular"
            className="group-hover:translate-x-2 group-hover:duration-500"
          />
        </Link>
      </div>
    </div>
  );
}
