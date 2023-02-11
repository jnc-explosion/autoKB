import Head from "next/head"

import Layout from "~/components/Layout"
import Footer from "~/components/containers/footer"
import Header from "~/components/containers/header"

export default function Home() {
  const tableSt = "border-4 border-slate-500 border-spacing-3 text-5xl bg-slate-100 dark:bg-slate-800";
  return (
    <>
      <Head>
        <title>autoKB - ホーム</title>
      </Head>
      <Layout>
      <div className="flex w-screen px-6">
        <div className="flex flex-col space-y-4 justify-center items-center">
          <h2 className="font-black p-8 border-2 rounded-lg dark:bg-gray-900 text-6xl">本日の時間割</h2>
          <table className="table-fixed border-collapse border border-slate-500 rounded-lg items-center justify-center center">
            <thead>
              <tr className="border-4 border-slate-500 border-spacing-3 text-2xl bg-slate-200 dark:bg-slate-700">
                <th>No.</th>
                <th>科目</th>
                <th>担当</th>
              </tr>
            </thead>
            <tbody>
              <tr className={tableSt}>
                <td className="p-4">1</td>
                <td className="pl-8">国語</td>
                <td className="px-8">石原NRK</td>
              </tr>
              <tr className={tableSt}>
                <td className="p-4">2</td>
                <td className="pl-8">神聖PIC工学</td>
                <td className="px-8">笠井正三郎</td>
              </tr>
              <tr className={tableSt}>
                <td className="p-4">3</td>
                <td className="pl-8">応用数学XVI</td>
                <td className="px-8">笠井正三郎</td>
              </tr>
              <tr className={tableSt}>
                <td className="p-4">4</td>
                <td className="pl-8">PP(ﾊﾟﾙｽﾊﾟﾜｰ)</td>
                <td className="px-8">橋本幸好</td>
              </tr>
              <tr className={tableSt}>
                <td className="p-4">+</td>
                <td className="pl-8">笠井工学序論</td>
                <td className="px-8">滑舌</td>
              </tr>
            </tbody>
          </table>
          <div className="flex justify-center items-center border-4 rounded-lg dark:bg-lime-800 p-2">
            <span className="text-4xl mr-6">次は</span>
            <span className="text-7xl mb-2 text-yellow-400 ">笠井工学序論</span>
          </div>
        </div>
        <div className="flex flex-col space-y-4 mx-8 items-center border-4 rounded-lg dark:bg-gray-800">
          <h2 className="flex-none p-8 rounded-t-lg dark:bg-zinc-600 text-6xl font-black">次の教科の概要</h2>
          <table className="flex-auto table-auto">
            <tbody>
              <tr><td className="text-3xl">欠課時数</td><td className="text-7xl ml-10 font-black text-red-600">39</td></tr>
              <tr><td className="text-3xl">残り猶予</td><td className="text-7xl ml-10 font-black text-red-600">1</td></tr>
              <tr><td className="text-3xl">現在遅刻</td><td className="text-7xl ml-10 font-black text-red-600">2</td></tr>
            </tbody>
          </table>
          <div className="flex-none pt-6">
            <button className="py-4 px-24 text-8xl text-blue-800 font-black border border-8 bg-green-500 rounded-full hover:bg-green-700 active:bg-purple-400">
              遅刻
            </button>
          </div>
          <div className="flex-none pb-4">
            <button className="py-4 px-12 text-8xl text-yellow-300 font-black border border-8 bg-red-700 rounded-full hover:bg-red-600 active:rounded-none active:text-white active:bg-red-700 active:border-y-10 active:border-x-0 active:border-y-blue-600">
              飛ばす
            </button>
          </div>
        </div>
        <div className="flex flex-col space-y-4 mx-4 items-center border-4 rounded-lg dark:bg-gray-800">
          <h2 className="p-8 rounded-t-lg dark:bg-purple-400 text-6xl font-black">KBちゃんからのお知らせ</h2>
          <p className="inline text-5xl text-red-600">やばいやばいっｗｗｗ</p>
        </div>
        </div>
      </Layout>
    </>
  )
}
