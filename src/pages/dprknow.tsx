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
      <div className="flex flex-col">
        オワ
      </div>
      </Layout>
    </>
  )
}
