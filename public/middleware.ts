import { NextRequest, NextResponse } from 'next/server'

const locales = ['en', 'mn']
const defaultLocale = 'en'

function getLocale(request: NextRequest): string {
  const pathname = request.nextUrl.pathname
  
  for (const locale of locales) {
    if (pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`) {
      return locale
    }
  }
  
  return defaultLocale
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  
  // Check if locale is already in pathname
  const hasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  )
  
  if (hasLocale) {
    return NextResponse.next()
  }
  
  // Get the best locale from request headers
  const locale = getLocale(request)
  
  // Redirect to locale path
  return NextResponse.redirect(
    new URL(`/${locale}${pathname}`, request.url)
  )
}

export const config = {
  matcher: [
    '/((?!_next|api|favicon.ico|robots.txt|sitemap.xml|public).*)',
  ],
}
