import Navibar from "@/components/layout/navbar/navbar"
import Introduction from "@/components/introduction/introduction"
import MenuLateral from "@/components/layout/menulateral/menulateral"
import Aboutme from "@/components/aboutme/aboutme"
import ProjectTitle from "@/components/projects/projectittle"
import Contact from "@/components/contact/contact"

export default function Home() {
  return (
    <>
      <Navibar/>
      <Introduction />
      <MenuLateral />
      <Aboutme />
      <ProjectTitle />
      <Contact />
    </>
  )
}
