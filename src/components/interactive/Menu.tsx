import { MenuItemConfig } from "@/types/menu-item-config";
import MenuItem from "./MenuItem";
import { usePathname } from "next/navigation";

type MenuProps = {
  menuItems: readonly MenuItemConfig[];
  exactMatch?: boolean;
}


const Menu = (props: MenuProps) => {

  const currentPath = usePathname();

  return (
    <div className="flex flex-row md:flex-col gap-1">
      {
        props.menuItems.map((item, index) => {
          const active: boolean = props.exactMatch ? currentPath === item.destination : currentPath.startsWith(item.destination);
          return (<MenuItem {...item} key={index} active={active} />);
        })
      }
    </div>
  );

}

export default Menu;
