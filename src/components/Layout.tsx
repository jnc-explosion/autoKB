import { ReactNode } from "react"

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex h-full bg-black">
      <div className="m-auto rounded-lg bg-white p-4">{children}</div>
    </div>
  )
}
