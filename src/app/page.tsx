import Feed from "@components/Feed"

export default function Home() {
  return (
    <section className="flex-center w-full flex-col">
      <h1 className="head_text text-center">
        Discover & Share
        <br className="max-md:hidden" />
        <span className="purple_gradient text-center">AI-Powered Prompts</span>
      </h1>
      <p className="desc text-center">
        Prompts is an open-source AI prompting tool to discover, create and
        share prompts
      </p>

      <Feed />
    </section>
  )
}
