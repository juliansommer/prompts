import connectToDB from "@/lib/database"
import Prompt from "@/models/prompt"

// Get one specific prompt
export async function GET(request: any, { params }: { params: any }) {
  try {
    await connectToDB()

    // Find the existing prompt by ID
    const prompt = await Prompt.findById(params.id).populate("creator")

    if (!prompt) {
      return new Response("Prompt not found", { status: 404 })
    }

    return new Response(JSON.stringify(prompt), { status: 200 })
  } catch (error) {
    return new Response("Failed to fetch prompt", { status: 500 })
  }
}

// Edit a prompt
export async function PATCH(request: any, { params }: { params: any }) {
  const { prompt, tag } = await request.json()

  try {
    await connectToDB()

    // Find the existing prompt by ID
    const existingPrompt = await Prompt.findById(params.id)

    if (!existingPrompt) {
      return new Response("Prompt not found", { status: 404 })
    }

    // Update prompt with new data
    existingPrompt.prompt = prompt
    existingPrompt.tag = tag

    await existingPrompt.save()

    return new Response(JSON.stringify(existingPrompt), { status: 200 })
  } catch (error) {
    return new Response("Failed to update prompt", { status: 500 })
  }
}

// Delete a prompt
export const DELETE = async (request: any, { params }: { params: any }) => {
  try {
    await connectToDB()

    // Find the prompt by ID and remove it
    await Prompt.findByIdAndDelete(params.id)

    return new Response("Prompt deleted successfully", { status: 200 })
  } catch (error) {
    return new Response("Error deleting prompt", { status: 500 })
  }
}
