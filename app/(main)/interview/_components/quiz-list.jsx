"use client";

import { useState } from "react";
import { format } from "date-fns";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import QuizResult from "./quiz-result";

export default function QuizList({ assessments }) {
  const router = useRouter();
  const [selectedQuiz, setSelectedQuiz] = useState(null);

  return (
    <>
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className={`
                   text-xl font-extrabold tracking-tight
          md:text-2xl lg:text-3xl xl:text-4xl
          bg-gradient-to-r
          from-gray-900 via-gray-700 to-gray-900
          dark:from-purple-400 dark:via-pink-400 dark:to-cyan-400
          bg-clip-text text-transparent
          drop-shadow-[0_3px_10px_rgba(0,0,0,0.45)]
          dark:drop-shadow-[0_0_45px_rgba(168,85,247,0.6)]
        `}>
                Recent Quizzes
              </CardTitle>
              <CardDescription>
                Review your past quiz performance
              </CardDescription>
            </div>
            <Button onClick={() => router.push("/interview/mock")}>
              Start New Quiz
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {assessments?.map((assessment, i) => (
              <Card
                key={assessment.id}
                className="cursor-pointer hover:bg-muted/50 transition-colors"
                onClick={() => setSelectedQuiz(assessment)}
              >
                <CardHeader>
                  <CardTitle className={`
          text-xl font-extrabold tracking-tight
          md:text-xl lg:text-3xl xl:text-4xl
          bg-gradient-to-r
          from-gray-900 via-gray-700 to-gray-900
          dark:from-purple-400 dark:via-pink-400 dark:to-cyan-400
          bg-clip-text text-transparent
          drop-shadow-[0_3px_10px_rgba(0,0,0,0.45)]
          dark:drop-shadow-[0_0_45px_rgba(168,85,247,0.6)]
        `}>
                    Quiz {i + 1}
                  </CardTitle>
                  <CardDescription className="flex justify-between w-full">
                    <div>Score: {assessment.quizScore.toFixed(1)}%</div>
                    <div>
                      {format(
                        new Date(assessment.createdAt),
                        "MMMM dd, yyyy HH:mm"
                      )}
                    </div>
                  </CardDescription>
                </CardHeader>
                {assessment.improvementTip && (
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      {assessment.improvementTip}
                    </p>
                  </CardContent>
                )}
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      <Dialog open={!!selectedQuiz} onOpenChange={() => setSelectedQuiz(null)}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle></DialogTitle>
          </DialogHeader>
          <QuizResult
            result={selectedQuiz}
            hideStartNew
            onStartNew={() => router.push("/interview/mock")}
          />
        </DialogContent>
      </Dialog>
    </>
  );
}
