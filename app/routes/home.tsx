import type { Route } from "./+types/home";
import Blog from "~/_components/Blog";
import Photo from "~/_components/Photo";
import About from "~/_components/About";
import Outside from "~/_components/Outside";
import { createClient } from "~/lib/microcms";
import type { Post } from "~/_types/Post";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "kyo-minok" },
    {
      name: "description",
      content:
        "さまざまな興味のある事柄の1歩目を書いていこうと考えているブログです",
    },
  ];
}

export async function loader({ context }: Route.LoaderArgs) {
  const client = createClient(context.cloudflare.env);
  const { contents } = await client.get("posts", {
    searchParams: { limit: 5 },
  }).json<{ contents: Post[] }>();

  return { posts: contents };
}

export default function Home({ loaderData }: Route.ComponentProps) {
  const { posts } = loaderData;
  return (
    <>
      <main className="container mx-auto px-4 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gird-rows-3 gap-6 max-w-6xl mx-auto">
          <Blog posts={posts} />
          <Photo />
          <About />
        </div>
        {/* <Outside /> */}
      </main>
    </>
  );
}
