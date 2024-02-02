import { NextResponse } from "next/server";
import prisma from "@/utils/connect";



// GET PRODUCT DATA
export const GET = async ()=>{
    try {
        const products = await prisma.product.findMany()
        // console.log(categories)
        return new NextResponse(JSON.stringify(products), {status:200});
    } catch (error) {
        console.log(error)
        return new NextResponse(JSON.stringify({ message: "something went wrong "}), {status:500});
    }


};