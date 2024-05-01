import connectToDB from "@utils/database"
import Prompt from "@models/prompt"

export const dynamic = "force-dynamic"
// Get the 20 most recent prompts
export async function GET(request: any) {
  try {
    await connectToDB()
    // Limit to 20 documents, sort by creation date in descending order
    const prompts = await Prompt.find({})
      .populate("creator", "-email")
      .sort({ createdAt: -1 })
      .select("-updatedAt") // Exclude 'updatedAt' from the returned documents
      .limit(20)

    return new Response(JSON.stringify(prompts), { status: 200 })
  } catch (error) {
    return new Response("Failed to fetch prompts", { status: 500 })
  }
}
