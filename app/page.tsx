import CallToAction from "@/components/Sections/CallToAction";
import Features from "@/components/Sections/Features";
import Hero from "@/components/Sections/Hero";
import UrlShortner from "@/components/UrlShortner/UrlShortner";

export default function Home() {
  return (
    <main className="overflow-hidden text-center">
      <Hero/>
      <section className="bg-light-violet p-6">
        <h2 className="sr-only">Shorten Url here:</h2>
        <UrlShortner/>
      </section>
      <Features/>
      <CallToAction/>
    </main>
  )
}