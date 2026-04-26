import { useLoaderData } from "react-router";
import BlogList from "~/_components/BlogList";
import type { Post } from "~/_types/Post";
import { createClient } from "~/lib/microcms";

export function meta({ params }: { params: { name: string } }) {
  return [{ title: `${params.name}の記事一覧 | 興味の1歩目` }];
}
type Props = {
  params: { name: string };
};
export async function loader({
  params,
  context,
}: Props & { context: any }) {
  const client = createClient(context.cloudflare.env);
  const { contents } = await client
    .get("posts", {
      searchParams: {
        filters: `who[contains]${params.name}`,
        orders: "-publishedAt",
      },
    })
    .json<{ contents: Post[] }>();

  return { posts: contents };
}

export default function userId() {
  const { posts } = useLoaderData<typeof loader>();
  if (posts.length === 0) {
    return (
      <div className="w-2/3 mx-auto mt-10">
        <p>該当のコンテンツが0件です</p>
      </div>
    );
  }

  return <BlogList posts={posts} />;
}
