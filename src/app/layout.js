//styles
import SvgComponents from "@/components/modules/SvgComponents/SvgComponents";
import "./globals.css";

//utils
import AOSInit from "@/utils/aos";
import ScrollToTop from "@/utils/scrollToTop";
import { authUser } from "@/utils/auth";

//components
import Navbar from "@/components/modules/navbar/Navbar";
import Footer from "@/components/modules/footer/Footer";

// import { localFont } from "next/font";

//fonts

// const Dana = localFont({
//   src: "/fonts/DanaFaNum-Regular.woff2",
//   fontStyle: "normal",
//   fontDisplay: "swap",
//   variable: "--fonts-dana",
// });
// const DanaMedium = localFont({
//   src: "/fonts/DanaFaNum-Medium.woff2",
//   fontStyle: "normal",
//   fontDisplay: "swap",
//   variable: "--fonts-dana-danaMedium",
// });
// const DanaDemiBold = localFont({
//   src: "/fonts/DanaFaNum-DemiBold.woff2",
//   fontStyle: "normal",
//   fontDisplay: "swap",
//   variable: "--fonts-dana-danaDemiBold",
// });
// const MorabbaLight = localFont({
//   src: "/fonts/Morabba-Light.woff2",
//   fontStyle: "normal",
//   fontDisplay: "swap",
//   variable: "--fonts-dana-morabba-light",
// });
// const MorabbaMedium = localFont({
//   src: "/fonts/Morabba-Medium.woff2",
//   fontStyle: "normal",
//   fontDisplay: "swap",
//   variable: "--fonts-dana-morabba-medium",
// });
// const MorabbaBold = localFont({
//   src: "/fonts/Morabba-Bold.woff2",
//   fontStyle: "normal",
//   fontDisplay: "swap",
//   variable: "--fonts-dana-morabba-bold",
// });

export const metadata = {
  title: "قهوه تلخ",
  description: "develope by ramin_kp",
  icons: {
    icon: "/images/logo.png",
  },
};

export default async function RootLayout({ children }) {
  const user = await authUser();

  return (
    <html
      lang="fa"
      dir="rtl"
      className="font-Dana"
      // className="dark"
      // className={`${Dana.variable} ${DanaMedium.variable} ${DanaDemiBold.variable} ${MorabbaLight.variable} ${MorabbaMedium.variable} ${MorabbaBold.variable}`}
    >
      <body>
        <Navbar user={user} />
        <AOSInit />
        {children}
        <ScrollToTop />
        <SvgComponents />
        <Footer />
      </body>
    </html>
  );
}
