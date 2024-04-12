import jobsData from "@/database/jobs"
import { NextResponse, NextRequest } from 'next/server'

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const query = searchParams.get('level');

    const filteredLevel = jobsData.filter((job) => job.level === query)

    if (filteredLevel.length !== 0) {
      return NextResponse.json({ data: filteredLevel }, { status: 200 })
    }

    return NextResponse.json({ data: jobsData }, { status: 200 })

  } catch (error: any) {
    return NextResponse.json({ message: error.message }, { status: 500 })
  }
}
