"use server";
import fs from "node:fs/promises";
import { revalidatePath } from "next/cache";
import { api } from "~/trpc/server";

export async function uploadFile(formData: FormData) {


  let currentTime = 0;
  try{
    const file = formData.get("file") as File;
    const arrayBuffer = await file.arrayBuffer();
    const buffer = new Uint8Array(arrayBuffer);

    currentTime = Date.now();
    await fs.writeFile(`./public/${currentTime}.jpg`, buffer);
  } catch(error){

  }

  const nome:string = formData.get('nome') as string;
  const preco:number = parseFloat(formData.get('preco') as string);
  const descricao:string = formData.get('descricao') as string;
  const imgId: number = currentTime;

  await api.products.createProduct({nome:nome, preco:preco, descricao:descricao, imageId:imgId}); 

  revalidatePath("/");
}