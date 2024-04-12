import { type NextRequest, NextResponse } from 'next/server'
import { headers } from 'next/headers'
 
export function middleware(request: NextRequest) {
    const response = NextResponse.next();
    const headersList = headers()
    const authorization = headersList.get('authorization')

    if (authorization !== process.env.SECRET) {
      return NextResponse.json({ message: 'User not authorized' }, { status: 401 })
    }

  return response
}