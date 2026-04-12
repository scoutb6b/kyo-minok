import { Link } from "react-router";
import type { Post } from "~/_types/Post";

type Props = {
  posts: Post[];
};
export default function BlogList({ posts }: Props) {
  return (
    <div className="mx-auto mt-20 w-2/3">
      <div className="grid grid-cols-1 gap-x-7 gap-y-12 sm:grid-cols-2  lg:grid-cols-3">
        {posts.map((post) => (
          <Link to={`/blog/${post.id}`} key={post.id}>
            <article className="grid grid-cols-1 ">
              {post.eyecatch?.url ? (
                <img
                  src={post.eyecatch.url}
                  alt={`${post.title}のサムネイル画像`}
                  className="max-h-[200px] w-full object-cover"
                />
              ) : (
                <img
                  src="/noimage.png"
                  alt="noImage"
                  className="max-h-[200px] w-full object-cover"
                />
              )}
              <h3 className="text-lg font-semibold mt-6">
                {post.title}
              </h3>
              <div className="flex gap-2 mt-4">
                {post.category.map((c) => (
                  <li
                    key={c.id}
                    className="text-xs list-none inline-block border border-amber-400  bg-amber-400 rounded-3xl px-2 py-0.5"
                  >
                    {c.name}
                  </li>
                ))}
              </div>
              <p className="text-sm text-right mt-2">
                {post.who[0]} ー{" "}
                {post.publishedAt.split("T")[0].replaceAll("-", "/")}
              </p>
            </article>
          </Link>
        ))}
      </div>
    </div>
  );
}
