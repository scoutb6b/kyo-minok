import { Link, useLoaderData, useNavigate } from "react-router";
import { createClient } from "~/lib/microcms";
import Avatar from "boring-avatars";
import type { Post } from "~/_types/Post";
import { ArrowArcLeftIcon } from "@phosphor-icons/react";

export function meta({ data }: { data: { post: Post } | undefined }) {
  const title = data?.post?.title ?? "記事";
  return [{ title: `${title} | 興味の1歩目` }];
}

type Props = {
  params: { id: string };
};

const AVATAR = {
  ko: {
    name: "Carrie Chapman",
    variant: "beam" as const,
    colors: ["#0a0310", "#49007e", "#ff005b", "#ff7d10", "#ffb238"],
    size: 60,
  },
  ri: {
    name: "Mary Edwards",
    variant: "beam" as const,
    colors: ["#acdeb2", "#e1eab5", "#edad9e", "#fe4b74", "#390d2d"],
    size: 60,
  },
};

export async function loader({
  params,
  context,
}: Props & { context: any }) {
  const client = createClient(context.cloudflare.env);
  console.log("① loader実行 (サーバー側)", params.id);
  const data = await client.get(`posts/${params.id}`).json<Post>();

  console.log("② loaderがreturn (サーバー側):", params.id);
  return { post: data }; // ← これが送られる
}

// ---------------------------------------------

export default function BlogIdPage() {
  console.log("③ Pageコンポーネント実行 (クライアント側)");

  // type of AAA で AAAから推論した型を適応↓
  const { post } = useLoaderData<typeof loader>();
  console.log("④ 受け取ったデータ (クライアント側):", post.id);

  const navigate = useNavigate();

  return (
    <div className="pt-8">
      <article className="max-md:px-6 md:grid md:grid-cols-12 md:gap-y-8">
        <button
          onClick={() => navigate(-1)}
          className="inline-flex items-center gap-1 text-sm text-gray-500 hover:cursor-pointer
          max-md:col-span-12 max-md:mb-6
          md:col-start-4 md:col-span-9
          "
        >
          <ArrowArcLeftIcon size={24} weight="fill" />
          一覧に戻る
        </button>
        <div className="md:col-span-3" />
        <h1 className="md:col-span-6 text-4xl font-bold text-left max-md:text-3xl">
          {post.title}
        </h1>
        <div className="md:col-span-3" />
        <div className="md:col-span-3" />
        <div className="md:col-span-6 flex md:items-center md:justify-between max-md:my-10 max-md:flex-col max-md:gap-2">
          <div className="flex items-center ">
            <figure className="w-[75px] h-[75px]  rounded-full">
              <Link to={`/user/${post.who[0]}`}>
                {/* {post.who[0] === "ko" ? (
                <Avatar />
              ) : (
                <Avatar
                  
                />
              )} */}
                <Avatar {...AVATAR[post.who[0]]} />
              </Link>
            </figure>
            <div>
              <Link to={`/user/${post.who[0]}`}>
                <h5 className="font-bold">{post.who[0]}</h5>
              </Link>
              <p className="text-sm">
                {post.publishedAt.split("T")[0].replaceAll("-", "/")}
              </p>
            </div>
          </div>
          <div>
            {post.category.map((c) => (
              <Link
                to={`/tag/${c.id}`}
                className="underline text-blue-600 mx-2"
                key={c.id}
              >
                {c.name}
              </Link>
            ))}
          </div>
        </div>
        <div className="md:col-span-3" />
        <div className="md:col-span-1" />

        <img
          className="md:col-span-10 rounded-2xl mx-auto"
          src={post.eyecatch?.url}
          alt=""
        />
        <div className="md:col-span-1" />
        <div className="md:col-span-3" />

        <div
          className="md:col-span-6 prose"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
        <div className="md:col-span-3" />
        <div className="md:col-span-3" />
        <div className="md:col-span-6"></div>
        <div className="md:col-span-3" />
      </article>
    </div>
  );
}
// ```

// ### コンソール出力
// ```
// ① loader実行
// ② loaderがreturn: { post: { id: "123", title: "React Router入門", content: "SSRの解説" } }
// ③ Pageコンポーネント実行
// ④ 受け取ったデータ: { post: { id: "123", title: "React Router入門", content: "SSRの解説" } }
