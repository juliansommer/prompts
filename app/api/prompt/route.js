import connectToDB from "@utils/database"
import Prompt from "@models/prompt"

// Get all prompts
export async function GET(request) {
  try {
    await connectToDB()
    const prompts = await Prompt.find({}).populate("creator")
    return new Response(JSON.stringify(prompts), { status: 200 })
  } catch (error) {
    return new Response("Failed to fetch prompts", { status: 500 })
  }
}
