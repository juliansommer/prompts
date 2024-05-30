import Feed from "@components/Feed"

export default function Home() {
  return (
    <section className="flex-center w-full flex-col">
      <h1 className="head_text text-center dark:text-white">
        Discover & Share
        <br className="max-md:hidden" />
        <span className="purple_gradient text-center"> AI-Powered Prompts</span>
      </h1>
      <p className="desc text-center">
        Prompts is an open source tool to discover and share prompts
      </p>
      <span className="pt-2 text-sm">
        (you will have to refresh the page and wait to see the prompts as mongo
        has to spin up, I can't do anything about it)
      </span>

      <Feed />
    </section>
  )
}
