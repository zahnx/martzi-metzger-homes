import About from "./components/About/About";
import FindHome from "./components/FindHome/FindHome";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import HomeBanner from "./components/HomeBanner/HomeBanner";
import PhotoGallery from "./components/PhotoGallery/PhotoGallery";
import ReadyToSell from "./components/ReadyToSell/ReadyToSell";
import Services from "./components/Services/Services";
import AnimationProvider from "./contexts/AnimationProvider";

export default function App() {
  return (
    <>
      <AnimationProvider>
        <Header />
        <HomeBanner />
        <Services />
        <About />
        <ReadyToSell />
        <FindHome />
        <PhotoGallery />
        <Footer />
      </AnimationProvider>
    </>
  );
}
