import BusinessCard from "@/components/display/card-contact/BusinessCard";

const VirtualBusinessCard = (
) => {
  return (
    <div className="flex flex-col gap-4 items-center">
      <div className="grid place-items-center h-[80vh]">
        <BusinessCard />
      </div>
    </div>
  )
}

export default VirtualBusinessCard;
