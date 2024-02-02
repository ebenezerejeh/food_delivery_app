import { NextResponse } from "next/server";
import prisma from "@/utils/connect";



// GET CATEGORY DATA
export const GET = async ()=>{
    try {
        const categories = await prisma.category.findMany()
        // console.log(categories)
        return new NextResponse(JSON.stringify(categories), {status:200});
    } catch (error) {
        console.log(error)
        return new NextResponse(JSON.stringify({ message: "something went wrong "}), {status:500});
    }


};