"use client";
import React from "react";
import customCards from "@/data/customCards";
import CardForCustomCard from "@/components/cards/CardForCustomCard";
import { ICustomCard } from "@/lib/types";
import PageHeader from "@/components/PageHeader";
import PageFooter from "@/components/PageFooter";
import Warning from "@/components/Warning";

export default function BoxShadows() {
  return (
    <div className="relative antialiased">
      <div className="max-w-screen-lg mx-auto  pb-16">
        <PageHeader
          title="Cards"
          description="Browse through a collection of card components for organizing and displaying content in your application."
        />

        <div className="grid grid-cols-1 md:grid-cols-2  gap-8 justify-center px-4 sm:px-6 md:px-8">
          {customCards
            .filter((value: ICustomCard) => !value.fullWidth)
            .map(({ title, source, animation, favourite }) => (
              <CardForCustomCard
                key={title}
                source={source}
                animation={animation}
                favourite={favourite}
              />
            ))}
        </div>
        <div className="h-px w-full bg-slate-200 dark:bg-slate-700 my-8"></div>
        <div className="grid grid-cols-1   gap-8 justify-center ">
          {customCards
            .filter((value: ICustomCard) => value.fullWidth)
            .map(({ title, source, animation, favourite }) => (
              <CardForCustomCard
                key={title}
                source={source}
                animation={animation}
                favourite={favourite}
              />
            ))}
        </div>
      </div>
      <Warning />
      <PageFooter />
    </div>
  );
}
