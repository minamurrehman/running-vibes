import prisma from '@/utils/prisma'

export async function POST(req: Request) {
  const body = await req.json()
  if(!(body.title.length>10)){
    return new Response(JSON.stringify({
      message: "Title must be grater than 10 characters"
    }),{
      status: 400
    })
  }
  const res = await prisma.news.create({
    data: body
  })

  if(res.id){
    return new Response(JSON.stringify({
      message: "Post added successfully"
    }),{status: 201})
  }
  else {
    return new Response(JSON.stringify({
      message: "Something went wrong"
    }),{status: 500})
  }
}
