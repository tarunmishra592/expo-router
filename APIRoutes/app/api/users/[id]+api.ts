import { users } from "@/users/users";

export async function GET(_req: Request, {id}:Record<string, string>){
    const user = users.find((item) => item.id === parseInt(id))
    if(!user){
        return Response.json({message: 'User Not Found'}, {status: 404})
    }
    return Response.json(user)
}


export async function PATCH(req: Request, {id}:Record<string, string>){
    const userData = await req.json()
    const user = users.find((item) => item.id === parseInt(id))
    if(!user){
        return Response.json({message: 'User Not Found'}, {status: 404})
    }
    user.name = userData.name
    return Response.json(user)
}

export async function DELETE(req: Request, {id}:Record<string, string>){
    const user = users.find((item) => item.id == parseInt(id))
    if(!user){
        return Response.json({message: 'User Not Found'}, {status: 404})
    }
    users.splice(users.indexOf(user), 1)
    return Response.json({message: 'User Deleted.'})
}