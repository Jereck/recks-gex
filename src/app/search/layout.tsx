import SideNav from "@/components/side-nav";
import { Suspense } from "react";

export default function SearchLayout({ children }: { children: React.ReactNode }) {
  return (
    <Suspense>
      <div className="mx-auto flex max-w-screen flex-col gap-8 px-4 pb-4 text-black dark:text-white md:flex-row">
        <div className="order-first w-full flex-none md:max-w-[125px]">
          <SideNav />
        </div>
        <div className="order-last min-h-screen w-full md:order-none">{ children }</div>
      </div>
    </Suspense>
  )
}