import Feed from "@components/Feed"

export default function Home() {
  return (
    <section className="flex-center w-full flex-col">
      <h1 className="mt-5 text-center text-5xl font-extrabold leading-[1.15] text-black sm:text-6xl dark:text-white">
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
