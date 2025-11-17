import SlideImage from "./SlideImages/SlideImage";
import Featured from "./Featured/featured";
import Video from "./Video/video";
import Ideal from "./Ideal/ideal";
import Properties from "./Properties/Properties";
import Contact from "./Contact/Contact";
export default function Home() {
  return (
    <>
      <SlideImage />
      <Featured />
      <Video />
      <Ideal />
      <Properties activeBtn={1}/>
      <Contact/>
      
    </>
  );
}
