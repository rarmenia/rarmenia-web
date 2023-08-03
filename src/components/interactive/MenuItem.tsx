'use client'


import { useRouter } from "next/navigation";

export type MenuItemConfig = {
  destination: string;
  icon: React.ReactNode;
  label: string;
}

type MenuItemProps = MenuItemConfig & { active?: boolean };

const MenuItem = (props: MenuItemProps) => {

  const router = useRouter();

  return (
    <button
      onClick={() => {
        router.push(props.destination);
      }}
      className={`p-4 lg:w-40 lg:pl-8 lg:justify-start inline-flex flex-row justify-center items-center gap-2 border ${props.active ? 'bg-sky-500 text-sky-500 border-sky-300/10' : 'border-white/10 hover:bg-stone-50/5 text-white'} bg-opacity-5 rounded-sm`}
    >
      {props.icon}
      <div className="text-white font-sans hidden md:block font-light">{props.label}</div>
    </button>
  )
}

export default MenuItem;
