import Footer from "@/components/footer";
import Header from "@/components/header";
import SectionAdvantage from "@/components/sections/sectionAdvantage";
import SectionFleet from "@/components/sections/sectionFleet";
import SectionForm from "@/components/sections/sectionForm";
import SectionHero from "@/components/sections/sectionHero/indes";
import SectionReview from "@/components/sections/sectionReview";
import SectionService from "@/components/sections/sectionService";
import Image from "next/image";

export default function Home() {
  return (
    // <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
    <div className="">
      <Header />
      <main className="flex flex-col mobV:gap-[96px] mobH:gap-[96px] gap-[104px] desc:gap-[120px]">
        <SectionHero />
        <SectionForm />
        <SectionService />
        <SectionAdvantage />
        <SectionFleet />
        <SectionReview />
      </main>
      <Footer />
    </div>
  );
}
