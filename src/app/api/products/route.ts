import {NextRequest, NextResponse} from "next/server";
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

export async function POST(req: NextRequest){

    const { nome, preco, descricao } = await req.json() as {nome : string, preco: number, descricao:string}
    
    try{
        const product = await db.product.create({data:{nome, preco, descricao}})
        return NextResponse.json({message:"product was created", product})
    } catch(error){
        if(error instanceof Error){
            return NextResponse.json({error:error.message})
        }
    }

}

export async function PATCH(req: NextRequest){

    const {id, nome, preco, descricao} = await req.json() as {id:number, nome : string, preco: number, descricao:string}

    try{

        const updatedProduct = await db.product.update({where:{id}, data:{nome, preco, descricao}})
        return NextResponse.json({message:"product was altered", updatedProduct})
    } catch(error){
        if(error instanceof Error){
            return NextResponse.json({error:error.message})
        }
    }

}

export async function DELETE(req: NextRequest){

    const {id} = await req.json() as {id:number}

    try{
        const deletedProduct = await db.product.delete({where:{id}})
        return NextResponse.json({message:"product was deleted", deletedProduct})
    } catch(error){
        if(error instanceof Error){
            return NextResponse.json({error:error.message})
        }
    }


}