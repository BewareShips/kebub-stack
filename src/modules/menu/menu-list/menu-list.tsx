import kebubList from "@app/mocks/kebub.json";
import { MenuItem } from "../menu-item/menu-item";

export const MenuList = () => {
   return (
      <div className="flex flex-wrap gap-10">
         {kebubList.map((item) => (
            <MenuItem {...item} />
         ))}
      </div>
   );
};
