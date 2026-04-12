import type { Post } from "~/_types/Post";

type Props = {
  post: Post;
};

export default function BlogCard({ post }: Props) {
  return (
    <div className="card bg-base-100 w-96 max-md:w-full shadow-md mx-auto border border-amber-200 group hover:cursor-pointer hover:shadow-[0_4px_12px_rgba(0,0,0,0.1)] ">
      <figure className="overflow-hidden">
        <img
          src={post.eyecatch?.url}
          alt={post.eyecatch ? `${post.title}の画像` : ""}
          className="max-h-[200px] w-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
        />
      </figure>
      <div className="card-body">
        <div className="flex items-center gap-2">
          <h2 className="card-title flex-3">{post.title}</h2>
          <p className="badge badge-secondary text-xs flex-1 bg-amber-600 border-amber-600">
            {post.publishedAt.split("T")[0].replaceAll("-", "/")}
          </p>
        </div>
        <div className="line-clamp-3 my-3">
          {post.content?.replaceAll(/<[^>]*>/g, "")}
        </div>
        <p className="">By {post.who[0]}</p>
        <div className="card-actions justify-end">
          {post.category.map((c) => (
            <div className="badge badge-outline" key={c.id}>
              {c.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
