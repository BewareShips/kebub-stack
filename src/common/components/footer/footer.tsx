import { FooterLink } from "../footer-link/footer-link";

export const Footer = () => {
   return (
      <div className="bg-gray-900 pt-12 px-12 pb-8">
         <div>
            <div className="mb-4">
               <span className="uppercase text-bold text-sm text-zinc-500">
                  contacts
               </span>
            </div>
            <div className="flex flex-col mb-8">
               <FooterLink>099 123 45 67</FooterLink>
               <FooterLink>kebub@delicious.com</FooterLink>
            </div>
            <hr className="relative left-[-3rem] w-[calc(100%_+_6rem)] border-zinc-500 mb-8" />
            <div>
               <span className="text-xl font-semibold text-white">KebubStar</span>
            </div>
         </div>
      </div>
   );
};
