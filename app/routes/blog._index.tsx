import { useLoaderData } from "react-router";
import BlogList from "~/_components/BlogList";
import type { Post } from "~/_types/Post";
import { createClient } from "~/lib/microcms";
import type { Route } from "./+types/blog._index";

export async function loader({ context }: Route.LoaderArgs) {
  const client = createClient(context.cloudflare.env);
  const { contents } = await client.get("posts").json<{ contents: Post }>();

  return { posts: contents };
}

export default function BlogIndexPage() {
  const { posts } = useLoaderData();
  if (posts.length === 0) {
    return (
      <div className="w-2/3 mx-auto mt-10">
        <p>該当のコンテンツが0件です</p>
      </div>
    );
  }

  return <BlogList posts={posts} />;
}
