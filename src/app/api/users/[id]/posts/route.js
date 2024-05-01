import connectToDB from "@utils/database"
import Prompt from "@models/prompt"

export async function GET(request, { params }) {
  try {
    await connectToDB()
    const prompts = await Prompt.find({ creator: params.id })
      .populate("creator", "-email")
      .sort({ createdAt: -1 })
      .select("-updatedAt") // Exclude 'updatedAt' from the returned documents
      .exec()

    return new Response(JSON.stringify(prompts), { status: 200 })
  } catch (error) {
    return new Response("Failed to fetch prompts", { status: 500 })
  }
}
