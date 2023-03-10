import { ReactNode } from "react"
import type { NextPage, NextPageWithLayout } from 'next'
import type { AppProps } from 'next/app'

// https://tailwind-elements.com/docs/standard/navigation/footer/ コピペ
// https://zenn.dev/joo_hashi/articles/e093c711e1b65f 参考

export default function Header () {
  return (
    <div>
      <header className="sticky top-0 z-30 pb-6 place-content-center text-black dark:text-white">
        <div className="flex w-screen justify-center items-center py-10 text-6xl bg-slate-400 dark:bg-black">
          <div className="flex w-screen justify-center items-center">
            <span className="flex-none inline-block ml-10 mr-5 text-8xl font-black">自動木場</span>
            <span className="flex-initial inline-block text-4xl">自動出席管理システム</span>
          </div>
        </div>
      </header>
    </div>
  );
};