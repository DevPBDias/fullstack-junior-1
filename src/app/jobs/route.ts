import jobsData from "@/database/jobs"
import { type NextRequest } from 'next/server'

export async function GET(request: NextRequest) {
    const searchParams = request.nextUrl.searchParams;
    const query = searchParams.get('level');

    const filteredLevel = jobsData.filter((job) => job.level === query)

    if(filteredLevel.length !== 0) {
        return Response.json(filteredLevel)
    }

    return Response.json(jobsData)
}