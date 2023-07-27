"use client"

import GlassCard from "@/components/containers/GlassCard";
import ActionButton from "@/components/interactive/ActionButton";
import { useRouter } from 'next/navigation';

export default function Landing() {

  const router = useRouter();

  const handleNextAction = () => {
    router.push('/home')
  }

  return (
    <div className="h-screen w-screen overflow-hidden grid place-items-center">
      <GlassCard>
        <div className="flex flex-col items-center gap-8">
          <div className="flex flex-col gap-4 py-8 px-2">
            <div className="flex flex-col uppercase items-center gap-[-0.5rem] font-sans tracking-tighter text-sky-50 font-semibold">
              <div className="text-4xl">Rei</div>
              <div className="text-3xl">Armenia</div>
            </div>
            <div className="flex flex-row font-serif justify-between items-center text-xs gap-16">
              <div>Software Engineer</div>
              <div>Experience Designer</div>
            </div>
          </div>
          <div>
            <ActionButton state="DEFAULT" onClick={() => { handleNextAction() }} clickFilter='force-all'>
              <div>Continue</div>
            </ActionButton>
          </div>
        </div>
      </GlassCard>
    </div>
  );
} 
