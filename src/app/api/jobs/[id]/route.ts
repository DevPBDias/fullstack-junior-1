import jobsData from "@/database/jobs"
import { IJobsData } from "@/interfaces";
import { NextResponse, NextRequest } from 'next/server'
import { headers } from 'next/headers'

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
    try {
        const headersList = headers()
        const authorization = headersList.get('authorization')
    
        if (authorization !== process.env.SECRET) {
          return NextResponse.json({ message: 'User not authorized' }, { status: 401 })
        }

        const id = params.id;
        const jobFound: IJobsData[] = jobsData?.filter((job) => job.id === Number(id))

        if (jobFound.length === 0) {
            return NextResponse.json({ message: `User with id:${params.id} not found.` }, { status: 404 })
        }

        return NextResponse.json({ data: jobFound }, { status: 200 })

    } catch (error: any) {
        return NextResponse.json({ message: error.message }, { status: 500 })
    }

}