//路由重定向
export default function({ route, redirect }) {
  if (route.fullPath === "/") {
    return redirect("/one");
  }
}
