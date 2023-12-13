import { NextRequest, NextResponse } from 'next/server'

export default function middleware(request: NextRequest) {
  const token = request.cookies.get('auth_token')?.value
  const signInUrl = new URL('/', request.url)
  console.log(signInUrl)
  if (!token) {
    if (request.nextUrl.pathname === '/') {
      console.log('passou aqui sem token no home')
      return NextResponse.next()
    }
    console.log(signInUrl)
    console.log('passou sem token fora do home')
    return NextResponse.redirect(signInUrl)
  }

  console.log(token)
}

export const config = {
  matcher: [
    '/',
    '/home/:path*',
    '/newActivit/:path*',
    '/endActivit/:path*',
    '/changeStatusActivit/:path*',
    '/newChangeActivit/:path*',
    '/newUser/:path*'
  ]
}
