import {type NextRequest, NextResponse} from "next/server";
import {db} from "~/server/db"

export async function GET(req: NextRequest){
    try{
        const id = req.nextUrl.searchParams.get("id")
        if(id){
            const product = await db.product.findUnique({where:{id: Number(id)}})
            return NextResponse.json({product})
        } else {
            const products = await db.product.findMany()
            return NextResponse.json({products})
        }
    } catch(error) {
        if(error instanceof Error){
            return NextResponse.json({error: error.message})
        }
    }
}
