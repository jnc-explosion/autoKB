import { ReactNode } from "react"
import Footer from "./containers/footer"
import Header from "./containers/header"

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <div className="bg-white dark:bg-slate-700 h-full">
        <Header />
        <div className="sticky top-0 text-black dark:text-white">
          <div className="flex">
            <div className="rounded-lg dark:bg-slate">{children}</div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  )
}
