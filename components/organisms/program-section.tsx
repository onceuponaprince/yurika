import { ScrollText } from "@/components/scroll-text"

export default function Program() {
  const rightPhrases = [
    <Card title="Howdy Partner" description="Goodbye world"/>,
    "Geist Design System",
    "the Next.js framework",
    "the Vercel brand",
    "Next.js Conf",
    "the v0 platform",
    "Vercel Ship",
  ]

  return (
    <div className="w-full py-20 ">
        <ScrollText leftText="We design" rightPhrases={rightPhrases} />
    </div>
      
  )
}

const Card =({ title, description }: { title: string; description: string }) => {
    return (
        <div className="border border-gray-300 rounded-lg p-6 mb-30 shadow-sm hover:shadow-md transition-shadow duration-300"> 
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-gray-600">{description}</p>
        </div>
    )
}