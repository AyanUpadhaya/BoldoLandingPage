import Header from "../components/home/header/Header";
import OurServices from "../components/home/ourServices/OurServices";
import ConnectSection from "../components/home/connect/ConnectSection";
import Enterprise from "../components/home/enterprise/Enterprise";
import WeConnect from "../components/home/weConnect/WeConnect";
import OurBlog from "../components/home/ourBlog/OurBlog";
import CallToAction from "../components/home/cta/CallToAction";
import Footer from "../components/shared/Footer";

function Home() {
  return (
    <>
      <Header></Header>
      <OurServices></OurServices>
      <ConnectSection></ConnectSection>
      <Enterprise></Enterprise>
      <WeConnect></WeConnect>
      <OurBlog></OurBlog>
      <CallToAction></CallToAction>
      <Footer></Footer>
    </>
  );
}

export default Home;
