import Head from "next/head"

import Layout from "~/components/Layout"
import Footer from "~/components/containers/footer"
import Header from "~/components/containers/header"

export default function Home() {
  const tableSt = "border-4 border-slate-500 border-spacing-3 text-5xl bg-slate-100 dark:bg-slate-800";
  return (
    <>
      <Head>
        <title>autoKB - 現在地</title>
      </Head>
      <Layout>
      <div className="2xl:flex w-screen justify-center px-6">
        <div className="flex flex-col mx-4 justify-center items-center">
          <iframe height="700" width="1000" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://www.openstreetmap.org/export/embed.html?bbox=135.07381439208987%2C34.67128213610638%2C135.10964870452884%2C34.687445593290164&amp;layer=mapnik" className="flex border-8 border-red-600"></iframe>
          <a href="https://www.openstreetmap.org/#map=16/34.6794/135.0917">大きな地図を表示</a>
        </div>
        <div className="flex flex-col mx-4 justify-center items-center border-4 rounded-lg">
          <h2 className="flex text-9xl font-black font-color text-red-700">警告</h2>

        </div>
      </div>
      </Layout>
    </>
  )
}
