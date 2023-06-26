import AnimationComponent from "@/components/AnimationComponent";
import First from "@/components/First";
import Navbar from "@/components/Navbar";
import NeverPayInterest from "@/components/NeverPayInterest";
import OurProducts from "@/components/OurProducts";
import SmarterCollateral from "@/components/SmarterCollateral";
import SwitchFeature from "@/components/SwitchFeature";
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
    </div>
  );
}
