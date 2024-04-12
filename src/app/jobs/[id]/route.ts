import jobsData from "@/database/jobs"

export async function GET(request: Request,
    { params }: { params: { id: string } }) {
    const matchingJobId = jobsData.filter((job) => job.id === parseInt(params.id))

    if (!matchingJobId) {
        return Response.json({ message: 'Invalid ID' })
    }

    return Response.json(matchingJobId)
}