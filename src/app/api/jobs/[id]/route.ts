import jobsData from "@/database/jobs"
import { IJobsData } from "@/types";
import { NextResponse, NextRequest } from 'next/server'

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
    try {
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