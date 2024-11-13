import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#ffffff] dark:bg-[#202122] text-[#202122] dark:text-[#ffffff]">
      {/* Wikipedia-style header */}
      <header className="border-b border-[#a2a9b1] dark:border-[#3c4143] bg-[#ffffff] dark:bg-[#202122] p-4">
        <h1 className="text-3xl font-serif max-w-4xl mx-auto">The 3:00 AM Whisperer in Filipino Folklore</h1>
      </header>

      <main className="max-w-4xl mx-auto p-4 font-serif">

        <Image src="/funny.jpg" alt="3:00 AM Whisperer" width={450} height={450} className="w-full h-auto invert mb-4"  />
        {/* Table of Contents */}
        <div className="float-right ml-4 mb-4 border border-[#a2a9b1] dark:border-[#3c4143] bg-[#f8f9fa] dark:bg-[#27292a] p-4 w-72">
          <h2 className="text-lg font-bold mb-2">Contents</h2>
          <ol className="list-decimal list-inside text-sm">
            <li><a href="#origins" className="text-[#0645ad] dark:text-[#6699ff] hover:underline">Origins and Beliefs</a></li>
            <li><a href="#manifestations" className="text-[#0645ad] dark:text-[#6699ff] hover:underline">Common Manifestations</a></li>
            <li><a href="#practices" className="text-[#0645ad] dark:text-[#6699ff] hover:underline">Cultural Practices and Warnings</a></li>
            <li><a href="#modern" className="text-[#0645ad] dark:text-[#6699ff] hover:underline">Modern Interpretations</a></li>
            <li><a href="#see-also" className="text-[#0645ad] dark:text-[#6699ff] hover:underline">See Also</a></li>
            <li><a href="#references" className="text-[#0645ad] dark:text-[#6699ff] hover:underline">References</a></li>
          </ol>
        </div>

        {/* Introduction */}
        <p className="mb-4 leading-relaxed">
          The <strong>3:00 AM Whisperer</strong> is a supernatural entity rooted in Filipino folklore, often linked to the time period following Undas (All Saints' Day and All Souls' Day). According to traditional beliefs, this entity becomes particularly active as the transition between the Day of the Dead and the Christmas season approaches. The folklore suggests that during this time, spirits and demons who were not properly honored or purged during Undas gain strength, reaching their peak at 3:00 AM, often referred to as the "witching hour."
        </p>

        {/* Origins and Beliefs */}
        <h2 id="origins" className="text-2xl font-bold mt-6 mb-3 pb-1 border-b border-[#a2a9b1] dark:border-[#3c4143]">Origins and Beliefs</h2>
        <p className="mb-4 leading-relaxed">
          Filipino culture holds a deep respect for the spirits of the departed, with Undas serving as a time to honor and remember ancestors through prayers, offerings, and visits to gravesites. However, it is believed that not all spirits find peace during this period. Those who are forgotten, neglected, or malevolent in nature are said to linger, growing more restless and powerful as the year progresses.
        </p>
        <p className="mb-4 leading-relaxed">
          The belief in heightened supernatural activity around 3:00 AM is not unique to Filipino culture, but its specific association with post-Undas spirits and demons is a notable aspect of this folklore. Elders often warn that this is the time when malevolent entities are at their strongest, capable of influencing the physical world through subtle yet unnerving actions.
        </p>

        {/* Common Manifestations */}
        <h2 id="manifestations" className="text-2xl font-bold mt-6 mb-3 pb-1 border-b border-[#a2a9b1] dark:border-[#3c4143]">Common Manifestations</h2>
        <p className="mb-4 leading-relaxed">
          Stories of the 3:00 AM Whisperer typically involve quiet, eerie phenomena. Witnesses often describe:
        </p>
        <ul className="list-disc ml-8 mb-4">
          <li className="mb-2">Whispering Sounds: Faint, unintelligible murmurs that seem to come from empty hallways or behind closed doors.</li>
          <li className="mb-2">Shadowy Figures: Dark shapes that appear in mirrors or linger just outside locked doors, often visible only through the crack beneath the doorframe.</li>
          <li className="mb-2">Unexplained Tapping or Knocking: Rhythmic sounds that intensify as the clock nears 3:00 AM, ceasing abruptly at the first sign of human attention.</li>
        </ul>
        <p className="mb-4 leading-relaxed">
          In many accounts, the entity appears to be waiting for some form of acknowledgment or invitation, which is believed to grant it greater influence over its chosen victim.
        </p>

        {/* Cultural Practices and Warnings */}
        <h2 id="practices" className="text-2xl font-bold mt-6 mb-3 pb-1 border-b border-[#a2a9b1] dark:border-[#3c4143]">Cultural Practices and Warnings</h2>
        <p className="mb-4 leading-relaxed">
          To avoid encounters with the Whisperer, traditional Filipino households often observe specific practices:
        </p>
        <ul className="list-disc ml-8 mb-4">
          <li className="mb-2">Avoiding Mirrors at Night: Mirrors are thought to serve as portals for spirits. Looking into one at 3:00 AM is believed to increase the risk of seeing or interacting with the Whisperer.</li>
          <li className="mb-2">Keeping Doors Locked: It is considered dangerous to open doors during the witching hour, as this might invite the entity inside.</li>
          <li className="mb-2">Lighting Candles or Incense: These are used as protective measures to ward off malevolent spirits and create a barrier between the physical and spiritual worlds.</li>
        </ul>
        <p className="mb-4 leading-relaxed">
          Elders also caution against engaging with strange noises or shadows during this time, as acknowledgment is thought to empower the entity.
        </p>

        {/* Modern Interpretations */}
        <h2 id="modern" className="text-2xl font-bold mt-6 mb-3 pb-1 border-b border-[#a2a9b1] dark:border-[#3c4143]">Modern Interpretations</h2>
        <p className="mb-4 leading-relaxed">
          In contemporary Filipino communities, the legend of the 3:00 AM Whisperer persists, blending traditional beliefs with modern experiences. Some interpret the legend as a cautionary tale about the importance of remembering and honoring one's ancestors. Others view it as an explanation for phenomena such as sleep paralysis, which often occurs during the early morning hours and involves the sensation of a presence in the room.
        </p>
        <p className="mb-4 leading-relaxed">
          Despite scientific explanations, the 3:00 AM Whisperer remains a compelling figure in Filipino folklore, symbolizing the lingering power of unacknowledged spirits and the thin veil between the living and the dead.
        </p>

        {/* See Also */}
        <h2 id="see-also" className="text-2xl font-bold mt-6 mb-3 pb-1 border-b border-[#a2a9b1] dark:border-[#3c4143]">See Also</h2>
        <ul className="list-disc ml-8 mb-4">
          <li className="mb-2"><a href="#" className="text-[#0645ad] dark:text-[#6699ff] hover:underline">Undas (All Saints' Day and All Souls' Day)</a></li>
          <li className="mb-2"><a href="#" className="text-[#0645ad] dark:text-[#6699ff] hover:underline">Filipino Superstitions</a></li>
          <li className="mb-2"><a href="#" className="text-[#0645ad] dark:text-[#6699ff] hover:underline">Aswang and Other Filipino Mythical Creatures</a></li>
          <li className="mb-2"><a href="#" className="text-[#0645ad] dark:text-[#6699ff] hover:underline">Sleep Paralysis in Folklore</a></li>
        </ul>

        {/* References */}
        <h2 id="references" className="text-2xl font-bold mt-6 mb-3 pb-1 border-b border-[#a2a9b1] dark:border-[#3c4143]">References</h2>
        <ol className="list-decimal list-inside text-sm">
          <li className="mb-2">Ramos, M. (1990). <i>Philippine Myths, Legends, and Folktales</i>. Anvil Publishing.</li>
          <li className="mb-2">Jocano, F. L. (1971). <i>Philippine Folk Literature and Supernatural Beliefs</i>. UP Press.</li>
          <li className="mb-2">De Mesa, A. (2005). "The Witching Hour in Filipino Superstition." <i>Asian Journal of Folklore and Mythology</i>.</li>
        </ol>
      </main>
    </div>
  );
}
