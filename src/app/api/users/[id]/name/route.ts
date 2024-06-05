import connectToDB from "@lib/database"
import User from "@models/user"

export async function GET(request: any, { params }: { params: any }) {
  try {
    await connectToDB()
    const user = await User.findById(params.id).select("username")
    return new Response(JSON.stringify(user.username), { status: 200 })
  } catch (error) {
    return new Response("Failed to fetch username", { status: 500 })
  }
}
