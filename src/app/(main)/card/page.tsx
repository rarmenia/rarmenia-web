import GlassCard from "@/components/containers/GlassCard";
import Location from "@/components/display/information/Location";

const VirtualBusinessCard = (
) => {
  return <div className="h-[90vh] grid place-items-center">
    <div className="w-fit">
      <GlassCard>
        <div className="min-w-[22rem] flex flex-col items-center p-4 gap-4">
          <div className="h-56 aspect-square bg-stone-700 grid place-items-center overflow-hidden rounded-full"></div>
          <div className="flex flex-col items-center gap-1">
            <div className="flex flex-row items-center gap-2">
              <div className="text-xl font-sans font-semibold text-white">Rei Armenia</div>
              <div className="italic text-sm text-white/40">{'(they/them)'}</div>
            </div>
            <Location location={'Capital Region, New York, USA'} />
          </div>
        </div>
      </GlassCard>
    </div >
  </div >
}

export default VirtualBusinessCard;
