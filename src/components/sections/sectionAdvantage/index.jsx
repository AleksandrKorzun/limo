import CardAdvantage from "@/components/cards/cardAdvantage";
import Container from "@/components/container";
import Title from "@/components/ui/title";
import { ADVANTAGE } from "@/data/constant";
import React from "react";

const SectionAdvantage = () => {
  return (
    <section>
      <Container>
        <Title text="Why Choose Us" />
        <div className="flex mobV:flex-col flex-row justify-between gap-[24px] flex-wrap">
          {ADVANTAGE.map(({ img, title, desc }) => (
            <CardAdvantage key={img} img={img} title={title} desc={desc} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default SectionAdvantage;
