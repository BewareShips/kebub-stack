import { Header } from "./common/components/header/header";
import kebubList from "@app/mocks/kebub.json";
import { MenuList } from "./modules/menu/menu-list/menu-list";
import { Footer } from "./common/components/footer/footer";

export const App = () => {
   return (
      <>
         <Header />
         <div className="mx-12 mt-8">
            <MenuList items={kebubList} />
         </div>
         <Footer/>
      </>
   );
};
