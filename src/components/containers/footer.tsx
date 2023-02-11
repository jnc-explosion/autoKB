import { ReactNode } from "react"
import type { NextPage, NextPageWithLayout } from 'next'
import type { AppProps } from 'next/app'
import Link from 'next/link'

// https://tailwind-elements.com/docs/standard/navigation/footer/ コピペ
// https://zenn.dev/joo_hashi/articles/e093c711e1b65f 参考

export default function Footer () {
  const buttonSt = "flex-auto w-10 inline-block mx-8 py-7 hover:border-x-4 hover:text-lime-400 hover:bg-gray-900 active:text-orange-500 active:bg-sky-600";
  const colaSt = "flex-auto w-10 inline-block mx-8 py-7 hover:border-x-4 hover:bg-gradient-to-t from-red-900 to-amber-600 active:from-amber-800 active:to-white";
  return (
    <div>
      <footer className="fixed bottom-0 z-30 place-content-center text-black dark:text-white" /*style="background-color: #0a4275;"*/>
        <div className="flex w-screen justify-center items-center text-6xl bg-slate-400 dark:bg-black">
          <button type="button" className={buttonSt}>
            ホーム
          </button>
          <button type="button" className={buttonSt}>
            現在地
          </button>
          <button type="button" className={colaSt}>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-700 via-white to-blue-700 font-black font-pepsi font-blackS"> pepsi </span>
          </button>
          <button type="button" className={buttonSt}>
            成績管理
          </button>
          <button type="button" className={buttonSt}>
            設定
          </button>
        </div>
        <div className="flex justify-center p-1 bg-stone-600 dark:bg-blue-900">
          © 2023 Copyright: jnc-explosion, YamaD, AutoKoba Development Group
        </div>
      </footer>
    </div>
  );
};
