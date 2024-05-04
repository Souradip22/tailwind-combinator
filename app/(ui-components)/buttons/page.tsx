"use client";
import React from "react";

import buttons from "@/data/buttons";
import ButtonCard from "@/components/cards/ButtonCard";
import PageHeader from "@/components/PageHeader";
import PageFooter from "@/components/PageFooter";
import Warning from "@/components/Warning";

export default function BoxShadows() {
  return (
    <div className="relative antialiased">
      <div className="max-w-screen-lg mx-auto  pb-16">
        <PageHeader
          title="Buttons"
          description="Discover different button designs and styles to enhance user interaction and improve aesthetics."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-center px-4 sm:px-6 md:px-8">
          {buttons.map(({ title, source, animation, favourite }) => (
            <ButtonCard
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
