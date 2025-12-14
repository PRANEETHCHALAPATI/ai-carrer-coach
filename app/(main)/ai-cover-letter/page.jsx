import { getCoverLetters } from "@/actions/cover-letter";
import Link from "next/link";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import CoverLetterList from "./_components/cover-letter-list";

export default async function CoverLetterPage() {
  const coverLetters = await getCoverLetters();

  return (
    <div>
      <div className="flex flex-col md:flex-row gap-2 items-center justify-between mb-5">
        <h1 className={`
          text-2xl font-extrabold tracking-tight
          md:text-3xl lg:text-4xl xl:text-6xl
          bg-gradient-to-r
          from-gray-900 via-gray-700 to-gray-900
          dark:from-purple-400 dark:via-pink-400 dark:to-cyan-400
          bg-clip-text text-transparent
          drop-shadow-[0_3px_10px_rgba(0,0,0,0.45)]
          dark:drop-shadow-[0_0_45px_rgba(168,85,247,0.6)]
        `}>My Cover Letters</h1>
        <Link href="/ai-cover-letter/new">
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            Create New
          </Button>
        </Link>
      </div>

      <CoverLetterList coverLetters={coverLetters} />
    </div>
  );
}
