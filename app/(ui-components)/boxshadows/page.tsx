import React from "react";
import { boxShadowConfigs } from "@/data/boxShadowConfigs";
import PageHeader from "@/components/PageHeader";
import { BoxShadowCard } from "@/components/cards/BoxshadowCard";
import PageFooter from "@/components/PageFooter";
import Warning from "@/components/Warning";

export default function BoxShadows() {
  return (
    <div className="relative antialiased">
      <div className="max-w-screen-lg mx-auto pb-16">
        <PageHeader
          title="Box Shadows"
          description="Explore various styles of box shadows to add depth and dimension to your UI elements effortlessly."
        />
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 w-full gap-y-16">
          <>
            {boxShadowConfigs.map((card, idx) => (
              <BoxShadowCard
                key={`${card.name} - ${idx}`}
                name={card.name}
                shadow={card.shadow}
                vanillaCSS={card.vanillaCSS}
                customCSS={card?.customCSS}
                favorite={card?.favorite}
              />
            ))}
          </>
        </div>
      </div>
      <Warning />
      <PageFooter />
    </div>
  );
}
