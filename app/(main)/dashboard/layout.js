import { BarLoader } from "react-spinners";
import { Suspense } from "react";

export default function Layout({ children }) {
  return (
    <div className="px-5">
      <div className="flex items-center justify-between mb-5">
        <h1 className="
          text-2xl font-extrabold tracking-tight
          md:text-3xl lg:text-4xl xl:text-6xl
          bg-gradient-to-r
          from-gray-900 via-gray-700 to-gray-900
          dark:from-purple-400 dark:via-pink-400 dark:to-cyan-400
          bg-clip-text text-transparent
          drop-shadow-[0_3px_10px_rgba(0,0,0,0.45)]
          dark:drop-shadow-[0_0_45px_rgba(168,85,247,0.6)]
        ">Industry Insights</h1>
      </div>
      <Suspense
        fallback={<BarLoader className="mt-4" width={"100%"} color="gray" />}
      >
        {children}
      </Suspense>
    </div>
  );
}
