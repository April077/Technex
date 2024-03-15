import Head from "next/head";
import Image from "next/image";
import LinkCard from "@/components/card";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <div className="flex justify-center items-center  flex-col">
      <Head>
        <title>Renewable Energy Hub</title>
        <meta
          name="description"
          content="Educational resources for renewable energy adoption"
        />
      </Head>
      <div className="grid grid-cols-2 items-center  h-screen">
        <Image
          className="color"
          src={"/bg.png"}
          alt="bg"
          width={500}
          height={500}
        ></Image>
        <h1 className="text-6xl  font-bold gradient-text">
          Welcome to the Renewable Energy Hub!
        </h1>
      </div>

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
          title="Subsidy Benefits in India"
          description="Know about the benefits provided by the government of adoption of renewable energy resources like solar."
          linkUrl="https://pmsuryaghar.gov.in/"
        />
      </div>
    </div>
  );
}
