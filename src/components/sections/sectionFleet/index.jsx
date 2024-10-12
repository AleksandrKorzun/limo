import CardFleet from "@/components/cards/cardFleet";
import Container from "@/components/container";
import Title from "@/components/ui/title";
import { FLEET } from "@/data/constant";
import React from "react";

const SectionFleet = () => {
  return (
    <section>
      <Container>
        <Title text="Discover Our Fleet" />
        <a id="Cars" className="invisible"></a>
        <div className="flex mobV:flex-col mobH:flex-col tabV:flex-col gap-[40px] flex-row">
          {FLEET.map(({ img, title, desc, specification }) => (
            <CardFleet
              img={img}
              key={img}
              title={title}
              desc={desc}
              specification={specification}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default SectionFleet;
