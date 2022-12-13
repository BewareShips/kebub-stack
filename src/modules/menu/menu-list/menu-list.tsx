import { MenuItem } from "../menu-item/menu-item";
import { Kebub } from "../types/kebub";

interface MenuListProps {
   items: Kebub[]
}

export const MenuList:React.FC<MenuListProps> = ({items}) => {
   return (
      <div className="flex flex-wrap gap-10">
         {items.map((item) => (
            <MenuItem {...item} key={item.id}/>
         ))}
      </div>
   );
};
