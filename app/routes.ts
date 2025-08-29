import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("work", "routes/work.tsx"),
  route("works", "routes/works.tsx"),
  route("growth-events", "routes/growth-events.tsx"),
] satisfies RouteConfig;
