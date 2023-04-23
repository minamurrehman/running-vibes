// import {NextResponse} from "next/server";
//
// export async function POST(req: Request) {
//     const body = await req.json()
//    const data =  await prisma?.user.create({
//         data: {
//             name: body.fullName,
//             email: body.email,
//             password: body.password
//         }
//     })
//
//     return new Response(JSON.stringify({
//         message: 'Created'
//     }))
// }