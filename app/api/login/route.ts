import prisma from "@/utils/prisma";

export async function POST(req: Request) {
    try {
        const body = await req.json()
        console.log(body)
        const data =  await prisma?.user.findFirst({
            where:{
                email: body.username,
            }
        })


        return new Response(JSON.stringify({
            message: 'Logged In',
            data: data
        }),{
            status: 200
        })
    }
    catch (e) {
        return new Response(JSON.stringify({
            message: 'wrong credentials'
        }),{
            status: 400
        })
    }
}