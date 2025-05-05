import { users } from "@/users/users";

export async function GET(){
    return Response.json(users)
}

export async function POST(req: Request){

    const user = await req.json()

    const newUser = { id:users.length + 1, ...user }

    users.push(newUser)

    return Response.json(newUser, { status: 201 })
}