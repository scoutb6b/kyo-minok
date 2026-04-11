import {
  type RouteConfig,
  index,
  layout,
  route,
} from "@react-router/dev/routes";

export default [
  layout("routes/_layout.tsx", [
    index("routes/home.tsx"),
    route("blog", "routes/blog._index.tsx"),
    route("blog/:id", "routes/blog.$id.tsx"),
    route("user/:name", "routes/user.$name.tsx"),
    route("tag/:id", "routes/tag.$id.tsx"),
    route("photo", "routes/photo._index.tsx"),
    route("photo/:id", "routes/photo.$id.tsx"),
  ]),
] satisfies RouteConfig;
