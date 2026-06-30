import SlideImage from "./SlideImages/SlideImage";
import Featured from "./Featured/featured";
import Video from "./Video/video";
import Ideal from "./Ideal/ideal";
import Properties from "./Properties/Properties";
import Contact from "./Contact/Contact";
import Stats from "./Stats/Stats";

export default function Home() {
  return (
    <>
      <SlideImage />
      <Stats />
      <Featured />
      <Video />
      <Ideal />
      <Properties activeBtn={1} />
      <Contact />
    </>
  );
}
