import connectToDB from "@utils/database"
import User from "@models/user"

export async function GET(request, { params }) {
  try {
    await connectToDB()
    const user = await User.findById(params.id).select("username")
    return new Response(JSON.stringify(user.username), { status: 200 })
  } catch (error) {
    return new Response("Failed to fetch username", { status: 500 })
  }
}
