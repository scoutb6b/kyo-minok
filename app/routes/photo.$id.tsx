import { useLoaderData } from "react-router";

export async function loader({ params }: any) {
  console.log("① loader実行");
  console.log(params.id);

  const data = {
    photo: {
      id: params.id,
      title: "",
      date: "2025-11-21",
      user: "ko",
      imgUrl: "https://placehold.jp/800x450.png",
      alt: "サンプル画像",
    },
  };

  console.log("② loaderがreturn:", data);
  return data; // ← これが送られる
}

// ---------------------------------------------

export default function PhotoIdPage() {
  console.log("③ Pageコンポーネント実行");

  // type of AAA で AAAから推論した型を適応↓
  const receivedData = useLoaderData<typeof loader>();
  console.log("④ 受け取ったデータ:", receivedData);

  const { photo } = receivedData;

  return (
    <div>
      <p>{photo.id}</p>
      <h1>{photo.title}</h1>
      <p>{photo.date}</p>
      <p>{photo.user}</p>
      <img src={photo.imgUrl} alt={photo.alt} />
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
