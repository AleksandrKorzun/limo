import CardService from "@/components/cards/cardService";
import Container from "@/components/container";
import Title from "@/components/ui/title";
import { SERVICE } from "@/data/constant";
import React from "react";

const SectionService = () => {
  return (
    <section>
      <Container>
        <Title text="Our service" />
        <div className="flex mobV:flex-col flex-row justify-between gap-[24px] flex-wrap">
          {SERVICE.map(({ imgMob, imgDesc, title, desc }) => (
            <CardService
              key={imgMob}
              imgMob={imgMob}
              imgDesc={imgDesc}
              title={title}
              desc={desc}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default SectionService;
