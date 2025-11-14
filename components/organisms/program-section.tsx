import { ScrollText } from "@/components/scroll-text"
import ChapterIntro from "../ui/8bit/blocks/chapter-intro";

export default function Program() {
  const rightPhrases = [
    <ChapterIntro title="Phase 1"/>,
    <ChapterIntro title="Phase 2"/>,
    <ChapterIntro title="Phase 3"/>,
    <ChapterIntro title="Phase 4"/>,
    <ChapterIntro title="Phase 5"/>
  ]

  return (
        <div className="w-full flex flex-col md:flex-row items-center md:items-start justify-center md:justify-between px-4 md:px-20 py-10 gap-10 md:gap-0">
          <ScrollText leftText={{title: "Our Program", subheading: "16-Week Acceleration Journey", description: "From idea to production-ready dApp with comprehensive support"}} rightPhrases={rightPhrases} />
        </div>
  )
}

