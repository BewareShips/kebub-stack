

interface FooterLinkText {
   href?: string;
   children?: React.ReactNode;
}

export const FooterLink: React.FC<FooterLinkText> = ({  children }) => {
   return (
      <div className="flex flex-col">
         <span className="font-bold text-sm text-gray-400 hover:text-gray-300 hover:underline">
            {children}
         </span>
      </div>
   );
};
