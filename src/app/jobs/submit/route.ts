import { ISubmitData } from "@/types";

export async function POST(request: Request) {
    const body: ISubmitData = await request.json();

    if (!body) {
        return Response.json({ message: 'Submit all fields' })
    }

    return Response.json({ message: `Thank you for your application, ${body.name}` })
}