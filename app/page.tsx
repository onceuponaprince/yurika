"use client"
import YurikaHero from "@/components/organisms/hero-section";
import Program from "@/components/organisms/program-section";
import Summary from "@/components/organisms/summary-section";
import ChoosePath from "@/components/organisms/path-section";
import Link from "next/link";
import { SelectThemeDropdown } from "@/components/select-theme-dropdown";
import { useThemeConfig } from "@/components/active-theme"
import FAQSection from "@/components/organisms/faq-section";
import { GameButton } from "@/components/ui/8bit/button";
import { NesLogo } from "@/components/atoms/neslogo";
import Footer from "@/components/organisms/footer-section";





export default function Home() {
  const { activeTheme, setActiveTheme } = useThemeConfig();
  return (
    <div className="flex flex-col min-h-screen">
      <YurikaHero />
      <header className="flex
        sticky
        top-0
        z-20
        justify-evenly
        items-center
        flex-col
        md:flex-row 
        shadow-md
        bg-secondary-background"
      >
        <section className="flex gap-10 justify-center py-4 items-center">
        <NesLogo size={6} />
          <SelectThemeDropdown
            activeTheme={activeTheme}
            setActiveTheme={setActiveTheme}
          />
        </section>
        <nav className="flex justify-evenly py-4 gap-8 bg-transparent">
          <Link href={'/'}><GameButton variant={"default"} className="cursor-pointer">Home</GameButton></Link>
          <Link href={'/about-us'}><GameButton variant={"default"} className="cursor-pointer">About</GameButton></Link>
          <Link href={'/dev-path'}><GameButton variant={"default"} className="cursor-pointer">For Devs</GameButton></Link>
          <Link href={'/partner-path'}><GameButton variant={"default"} className="cursor-pointer">For Partners</GameButton></Link>
          <Link href={'/sponsor-path'}><GameButton variant={"default"} className="cursor-pointer">Donate</GameButton></Link>
          <Link href={'/tales-of-yurika'}><GameButton variant={"default"} className="cursor-pointer">Blog</GameButton></Link>
        </nav>
      </header>
      <main>
        <Program />
        <Summary />
        <ChoosePath />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
}
