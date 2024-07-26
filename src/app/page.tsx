import Feed from "@/components/Feed"

export default function Home() {
  return (
    <section className="flex w-full flex-col items-center justify-center">
      <h1 className="mt-5 text-center text-5xl font-extrabold leading-[1.15] text-black dark:text-white sm:text-6xl">
        Discover & Share
        <br className="max-md:hidden" />
        <span className="bg-gradient-to-r from-fuchsia-600 to-purple-600 bg-clip-text text-center text-transparent">
          {" "}
          AI-Powered Prompts
        </span>
      </h1>
      <p className="mt-5 max-w-2xl text-center text-lg text-gray-700 dark:text-gray-300 sm:text-xl">
        Prompts is an open source tool to discover and share prompts
      </p>
      <p className="text-center">
        (Mongo might need a little bit to start up so just wait a sec for the
        prompts to load)
      </p>
      <Feed />
    </section>
  )
}
