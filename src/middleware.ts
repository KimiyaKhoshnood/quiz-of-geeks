import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const token = "";
  const url = new URL(request.url);

  // اگر توکن وجود داشت، اجازه دسترسی بده
  if (token) {
    return NextResponse.next();
  }

  // در غیر اینصورت، ریدایرکت به صفحه لاگین
  url.pathname = "/login";
  return NextResponse.redirect(url.toString());
}

export const config = {
  matcher: ["/((?!login).*)"], // همه صفحات به جز /login
};
