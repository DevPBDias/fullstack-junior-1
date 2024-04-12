import jobsData from "@/database/jobs"
import { IJobsData } from "@/interfaces";
import { NextResponse, NextRequest } from 'next/server'
import { headers } from 'next/headers'

export async function GET(request: NextRequest) {
  try {
    const headersList = headers()
    const authorization = headersList.get('authorization')

    if (authorization !== process.env.SECRET) {
      return NextResponse.json({ message: 'User not authorized' }, { status: 401 })
    }

    const searchParams = request.nextUrl.searchParams;
    const query = searchParams.get('level');

    const filteredLevel: IJobsData[] = jobsData.filter((job) => job.level === query)

    if (filteredLevel.length !== 0) {
      return NextResponse.json({ data: filteredLevel }, { status: 200 })
    }

    return NextResponse.json({ data: jobsData }, { status: 200 })

  } catch (error: any) {
    return NextResponse.json({ message: error.message }, { status: 500 })
  }
}
