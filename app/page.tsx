import Image from "next/image";
import VideoBanner from "@/components/molecules/VideoBanner";

export default function Home() {
  return (
    <div className="max-w-none font-[family-name:var(--font-geist-sans)] p-20 min-h-screen lg:px-38 lg:py-32">
         <VideoBanner videoSrc="/video/biogreen_video.mp4" />
   
    
    </div>
  );
}
