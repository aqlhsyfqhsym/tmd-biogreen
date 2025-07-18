import Image from "next/image";
import VideoBanner from "@/components/molecules/VideoBanner";

export default function Home() {
  return (
    <div className="max-w-none font-[family-name:var(--font-geist-sans)] p-5 min-h-screen xl:px-32 xl:py-18 ">
         <VideoBanner videoSrc="/video/biogreen_video.mp4" /> 
   
    
    </div>
  );
}
