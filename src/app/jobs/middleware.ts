import { type NextRequest, NextResponse } from 'next/server'
import { headers } from 'next/headers'

// minha ideia era usar um middleware para checar todas as rotas, mas
// pelo material que busquei na internet seja pela documentação, artigos
// ou videos não consegui realizar minha ideia com o secret 'naranja-labs'
// então coloquei em cada rota mesmo.
export function middleware(request: NextRequest) {
    const response = NextResponse.next();
    const headersList = headers()
    const authorization = headersList.get('authorization')

    if (authorization !== process.env.SECRET) {
      return NextResponse.json({ message: 'User not authorized' }, { status: 401 })
    }

  return response
}