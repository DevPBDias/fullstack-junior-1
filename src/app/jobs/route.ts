import jobsData from "@/database/jobs"

export async function GET() {
    return Response.json(jobsData)
}