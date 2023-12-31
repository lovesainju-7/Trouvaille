"use client";

import { ArrowRight, MessageSquare, ImageIcon, Music, VideoIcon, Code } from "lucide-react";
import { useRouter } from "next/navigation";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Link from "next/link";


const DashboardPage = () => {
  const router = useRouter();
    return (
      <div className="relative ">
        <div className="mb-8 space-y-4">
         <h2 className="text-2xl md:text-4xl font-bold text-center">
          Explore the power of AI
         </h2>
          <p className="text-muted-foreground font-light text-sm md:text-lg text-center">
          Chat with the smartest AI - Experience the power of AI
         </p>
        </div>
       
        <div className="px-4 md:px-20 lg:px-32 space-y-4">
        {tools.map((tool) => (
          <Card onClick={() => router.push(tool.href)} key={tool.href} className="p-4 border-black/5 flex items-center justify-between hover:shadow-md transition cursor-pointer">
            <div className="flex items-center gap-x-4">
              <div className={cn("p-2 w-fit rounded-md",)}>
                <tool.icon className={cn("w-8 h-8", tool.color)} />
              </div>
              <div className="font-semibold">
                {tool.label}
              </div>
            </div>
            <ArrowRight className="w-5 h-5" />
          </Card>
        ))}
      </div>
      </div>
    );
  }

const tools = [
  {
    label: "Conversation",
    icon: MessageSquare,
    color: "text-violet-500",
    bgColor: "bg-violet-500/10",
    href: "/conversation",
  },
  {
    label: "Image Generator",
    icon: ImageIcon,
    color: "text-pink-500",
    bgColor: "bg-pink-500/10",
    href: "/image",
  },
  {
    label: "Video Generator",
    icon: VideoIcon,
    color: "text-orange-500",
    bgColor: "bg-orange-500/10",
    href: "/video",
  },
  {
    label: "Music Generator",
    icon: Music,
    color: "text-emerald-500",
    bgColor: "bg-emerald-500/10",
    href: "/music",
  },
  {
    label: "Code Generator",
    icon: Code,
    color: "text-green-500",
    bgColor: "bg-green-500/10",
    href: "/code",
  },
]
// function DashboardPage(){
//   return (
//     <div>
//       <div className="mb-8 space-y-4">
//         <h2 className="text-2xl md:text-4xl font bold text-center">
//           The Best AI Multimedia Generator
//         </h2>
//         <p className="text-muted-foreground font-;ight text-sm md:text-lg text-center">
//            Generate Contents With The Latest AI Technology
//         </p>
//       </div>
//       <div className ="px-4 md:px-20 lg:px-32 space-y"></div>
//       </div>)
// }

// const DashboardPage = () => {
//   return (
//     <div>
//       <div className="mb-8 space-y-4">
//         <h2 className="text-2xl md:text-4xl font bold text-center">
//           The Best AI Multimedia Generator
//         </h2>
//         <p className="text-muted-foreground font-;ight text-sm md:text-lg text-center">
//            Generate Contents With The Latest AI Technology
//         </p>
//       </div>
//       <div className ="px-4 md:px-20 lg:px-32 space-y-4">

//       </div>
//     </div>
//   )
// }



export default DashboardPage;
