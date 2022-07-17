import { NextResponse } from "next/server";

const signedinPages = ["/", "/playlist", "/library"];
// it is a "edge function" ==> they work in web worker environment
export default function middleware(req) {
  if (signedinPages.find((p) => p === req.nextUrl.pathname)) {
    const token = req.cookies.TRAX_ACCESS_TOKEN;

    if (!token) {
      return NextResponse.redirect("/signin");
    }
  }
}
