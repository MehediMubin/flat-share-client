import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Toaster } from "sonner";

const CommonLayout = ({ children }: { children: React.ReactNode }) => {
   return (
      <>
         <Header />
         <div className="min-h-screen">{children}</div>
         <Footer />
      </>
   );
};

export default CommonLayout;
