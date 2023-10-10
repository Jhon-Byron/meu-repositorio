import Navibar from "@/components/layout/navbar/navbar"
import Introduction from "@/components/introduction/introduction"
import MenuLateral from "@/components/layout/menulateral/menulateral"
import Aboutme from "@/components/aboutme/aboutme"
import ProjectTitle from "@/components/projects/projectittle"
import Contact from "@/components/contact/contact"
import Copyright from "@/components/copyright/copyright"
import { register } from "swiper/element/bundle";

register();
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default function Home() {
  return (
    <>
      <Navibar/>
      <Introduction />
      <MenuLateral />
      <Aboutme />
      <ProjectTitle />
      <Contact />
      <Copyright />
    </>
  )
}
