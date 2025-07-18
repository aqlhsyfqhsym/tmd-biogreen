import Image from "next/image";
import VideoBanner from "@/components/molecules/VideoBanner";
import OurStory from "@/components/organisms/OurStory";

export default function Home() {
  return (
    <div className="max-w-none font-[family-name:var(--font-geist-sans)] p-5 min-h-screen xl:px-32 xl:py-18 mx-auto">
         <VideoBanner videoSrc="/video/biogreen_video.mp4" /> 
         <OurStory/> 
   
    
    </div>
  );
}
