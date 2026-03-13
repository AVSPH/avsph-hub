"use client";

import React, { useState, useEffect } from "react";
import { ASSESSMENT_DATA, Question } from "./assessment.data";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { CheckCircle2, XCircle, RefreshCcw, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface DocsAssessmentProps {
  guideId: string;
  onComplete?: (score: number) => void;
}

export function DocsAssessment({ guideId, onComplete }: DocsAssessmentProps) {
  const assessment = ASSESSMENT_DATA[guideId];
  
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [pastResult, setPastResult] = useState<{ score: number, total: number } | null>(null);

  useEffect(() => {
    // Load past results from localStorage
    const saved = localStorage.getItem(`assessment_${guideId}`);
    if (saved) {
      setPastResult(JSON.parse(saved));
    }
    // Reset state when guide changes
    setCurrentQuestionIndex(0);
    setSelectedOption(null);
    setScore(0);
    setIsFinished(false);
  }, [guideId]);

  if (!assessment) {
    return (
      <div className="p-8 text-center border border-dashed rounded-xl">
        <p className="text-muted-foreground text-sm">No assessment available for this guide yet.</p>
      </div>
    );
  }

  const handleOptionSelect = (optionIndex: number) => {
    if (selectedOption !== null) return;
    setSelectedOption(optionIndex);
    
    if (optionIndex === assessment.questions[currentQuestionIndex].correctAnswer) {
      setScore(s => s + 1);
    }
  };

  const handleNext = () => {
    if (currentQuestionIndex < assessment.questions.length - 1) {
      setCurrentQuestionIndex(c => c + 1);
      setSelectedOption(null);
    } else {
      const finalResult = { score, total: assessment.questions.length };
      setIsFinished(true);
      localStorage.setItem(`assessment_${guideId}`, JSON.stringify(finalResult));
      setPastResult(finalResult);
      onComplete?.(score);
    }
  };

  const handleReset = () => {
    setCurrentQuestionIndex(0);
    setSelectedOption(null);
    setScore(0);
    setIsFinished(false);
  };

  if (isFinished) {
    const passed = score / assessment.questions.length >= 0.7;
    return (
      <Card className="animate-in fade-in zoom-in duration-300">
        <CardHeader className="text-center pb-2">
          <div className="flex justify-center mb-4">
            {passed ? (
              <CheckCircle2 className="h-16 w-16 text-green-500" />
            ) : (
              <XCircle className="h-16 w-16 text-red-500" />
            )}
          </div>
          <CardTitle className="text-2xl font-bold">
            {passed ? "Assessment Passed!" : "Assessment Failed"}
          </CardTitle>
          <CardDescription>
            You scored {score} out of {assessment.questions.length}
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col items-center gap-4">
          <p className="text-sm text-muted-foreground text-center">
            {passed 
              ? "Great job! You've demonstrated a solid understanding of this guide." 
              : "We recommend reviewing the guide again and retaking the assessment."}
          </p>
          <Button onClick={handleReset} variant="outline" className="gap-2">
            <RefreshCcw className="h-4 w-4" /> Retake Assessment
          </Button>
        </CardContent>
      </Card>
    );
  }

  const currentQuestion = assessment.questions[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / assessment.questions.length) * 100;

  return (
    <div className="space-y-6 max-w-2xl mx-auto">
      <div className="space-y-2">
        <div className="flex justify-between text-xs font-mono text-muted-foreground uppercase tracking-widest">
          <span>Question {currentQuestionIndex + 1} of {assessment.questions.length}</span>
          <span>{Math.round(progress)}% Complete</span>
        </div>
        <div className="h-1.5 w-full bg-muted rounded-full overflow-hidden">
          <div 
            className="h-full bg-primary transition-all duration-500 ease-out" 
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <Card className="shadow-lg border-2 border-primary/10">
        <CardHeader>
          <CardTitle className="text-xl leading-snug">{currentQuestion.text}</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-3">
          {currentQuestion.options.map((option, idx) => {
            const isSelected = selectedOption === idx;
            const isCorrect = idx === currentQuestion.correctAnswer;
            const showFeedback = selectedOption !== null;

            return (
              <button
                key={idx}
                disabled={showFeedback}
                onClick={() => handleOptionSelect(idx)}
                className={cn(
                  "w-full text-left p-4 rounded-xl border-2 transition-all duration-200 flex items-center justify-between group",
                  !showFeedback && "hover:border-primary/50 hover:bg-primary/5 active:scale-[0.98]",
                  showFeedback && isCorrect && "border-green-500/50 bg-green-500/10 text-green-700 dark:text-green-400",
                  showFeedback && isSelected && !isCorrect && "border-red-500/50 bg-red-500/10 text-red-700 dark:text-red-400",
                  !showFeedback && "border-border"
                )}
              >
                <span className="text-sm font-medium">{option}</span>
                {showFeedback && isCorrect && <CheckCircle2 className="h-5 w-5 shrink-0" />}
                {showFeedback && isSelected && !isCorrect && <XCircle className="h-5 w-5 shrink-0" />}
              </button>
            );
          })}
        </CardContent>
      </Card>

      <div className="flex justify-end">
        <Button 
          disabled={selectedOption === null} 
          onClick={handleNext}
          className="gap-2 px-6 h-11"
        >
          {currentQuestionIndex === assessment.questions.length - 1 ? "Finish" : "Next Question"}
          <ArrowRight className="h-4 w-4" />
        </Button>
      </div>

      {pastResult && !isFinished && (
        <div className="text-center pt-4">
          <p className="text-[11px] font-mono text-muted-foreground uppercase tracking-wider">
            Previous Result: {pastResult.score}/{pastResult.total}
          </p>
        </div>
      )}
    </div>
  );
}
