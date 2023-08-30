import {NextRequest, NextResponse} from 'next/server';
import dayjs from "dayjs";
const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION;
 
export async function POST(req:NextRequest,res:NextResponse) {
    const body = await req.json()
    const mutations = {
        mutations:[
            {
                create: {
                    _type: 'newsletter',
                    email: body?.email.toString().toLowerCase(),
                    createdAt: dayjs().format('YYYY-MM-DD')
                }
            }
        ]
    }
  const data = fetch(`https://${projectId}.api.sanity.io/v${apiVersion}/data/mutate/${dataset}`, {
  method: 'post',
  headers: {
    'Content-type': 'application/json',
    Authorization: `Bearer ${process.env.SANITY_API_TOKEN}`
  },
  body: JSON.stringify(mutations)
})
  .then(response => response.json())
  .then(result => console.log(result))
  .catch(error => console.error(error))
 
  return NextResponse.json(data);
}