import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

import Social from "@/components/Social";

const Home = () => {
  return (
    <section className="relative flex xl:mt-12 h-max-screen">
      <div className="container mx-auto flex flex-col gap-4 xl:gap-14">
        <div className="flex flex-col text-black font-bold tracking-tighter leading-none uppercase">
          <div className="text-6xl md:text-7xl lg:text-8xl">Frontend Developer</div>
          <div className="text-6xl md:text-7xl lg:text-8xl">& UX/UI Designer</div>
          <div className="text-6xl md:text-7xl lg:text-8xl mt-2">Portfolio.</div>
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-end gap-2 lg:gap-0">
            <div className="text-5xl md:text-6xl lg:text-7xl mt-2">Magda Rzepa</div>
            <div className="text-4xl md:text-5xl xl:text-6xl font-bold text-accent opacity-80">2024</div>
          </div>
        </div>

        <div className="flex flex-col xl:flex-row gap-6">
          {/* <Button
            as="a"
            href="/public/Magda_Rzepa_CV.pdf"
            download
            variant="outline"
            size="lg"
            className="uppercase hover:text-white flex items-center gap-2"
          >
            <span>Pobierz CV</span>
            <FiDownload className="text-xl" />
          </Button> */}
          <div className="mb-8 xl:mb-0 xl:self-center">
            <Social containerStyles="flex gap-6" iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-white hover:transition-all duration-500" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;