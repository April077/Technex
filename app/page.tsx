import Head from "next/head";
import Link from "next/link";
import LinkCard from "@/components/card";

export default function Home() {
  return (
    <div className="flex justify-center items-center flex-col">
      <Head>
        <title>Renewable Energy Hub</title>
        <meta
          name="description"
          content="Educational resources for renewable energy adoption"
        />
      </Head>
      <h1 className="text-8xl font-bold p-10 mt-10 gradient-text">
        Welcome to the Renewable Energy Hub!
      </h1>

      <div className="">
        <LinkCard
          title="Why Renewable?"
          description="Learn more about the importance of renewable energy."
          linkUrl="https://www.un.org/en/climatechange/raising-ambition/renewable-energy"
        />
        <LinkCard
          title="How communities are embracing renewable energy."
          description="Let’s take a spin around the world and look at the growing demand for the power of renewables."
          linkUrl="https://www.un.org/en/climatechange/how-communities-are-embracing-renewable-energy"
        />
        <LinkCard
          title="Renewable energy in India"
          description="A transformative journey towards sustainable power generation, harnessing diverse natural resources like solar, wind, hydro, and biomass. "
          linkUrl="https://pib.gov.in/FeaturesDeatils.aspx?NoteId=151141&ModuleId%20=%202"
        />

        <LinkCard
          title="Subsidy Benfits in India"
          description="Know about the benefits provided by the government of adoption of renewable energy resources like solar."
          linkUrl="https://pmsuryaghar.gov.in/"
        />
      </div>
    </div>
  );
}
