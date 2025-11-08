import YurikaHero from "@/components/organisms/hero-section";
import Program from "@/components/organisms/program-section";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <YurikaHero />
      <header>
        <nav className="flex justify-evenly shadow-md py-4 z-10">
          <Link href={'/'}>Home</Link>
          <Link href={'/about-us'}>Our Motivations</Link>
          <Link href={'/dev-path'}>For Devs</Link>
          <Link href={'/partner-path'}>For Partners</Link>
          <Link href={'/sponsor-path'}>For Sponsors</Link>
          <Link href={'/tales-of-yurika'}>TalesOf Yurika</Link>
      </nav>
      </header>
      <main>
        
        <div>Summary Section
          <div>Why Join Yurika</div>
        </div>
        <Program />
        <div>Choose Your Path</div>
        <div>FAQs</div>
      </main>
      <footer>Footer Section</footer>
    </div>
  );
}
