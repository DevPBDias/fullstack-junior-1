import { ISubmitData } from "@/types";
import { NextResponse, NextRequest } from 'next/server'

export async function POST(request: NextRequest) {
    try {
        const { name, age, phone, state, city }: ISubmitData = await request.json();

        if (!name || !age || !phone || !state || !city) {
            return NextResponse.json({ message: 'Please submit all fields' }, { status: 400 })
        }
    
        return NextResponse.json({ message: `Thank you for your application, ${name}` }, { status: 201 })

    } catch (error: any) {
        return NextResponse.json({ message: error.message }, { status: 500 })
        
    }
}