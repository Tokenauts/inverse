import AnimationComponent from "@/components/AnimationComponent";
import BlogComponent from "@/components/BlogComponent";
import First from "@/components/First";
import Footer from "@/components/Footer";
import Governance from "@/components/Governance";
import Navbar from "@/components/Navbar";
import NeverPayInterest from "@/components/NeverPayInterest";
import OurProducts from "@/components/OurProducts";
import Security from "@/components/Security";
import SmarterCollateral from "@/components/SmarterCollateral";
import SwitchFeature from "@/components/SwitchFeature";
import Bug from "@/components/bug";
import Stats from "@/components/stats";
import Banner from "@/components/banner";
export default function Home() {
  return (
    <div className="">
      <div style={{ position: "relative", zIndex: 2 }}>
        <Navbar />
      </div>
      <div style={{ position: "relative", zIndex: 1 }}>
        <First />
      </div>
      <OurProducts />
      <NeverPayInterest />
      <SmarterCollateral />
      <AnimationComponent />
      <SwitchFeature />
      <Bug />
      <Stats />
      <Banner />
      <Governance />
      <Security />
      <BlogComponent />

      <Footer />
    </div>
  );
}
