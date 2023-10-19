import Navibar from "@/components/layout/navbar/navbar"
import Introduction from "@/components/introduction/introduction"
import MenuLateral from "@/components/layout/menulateral/menulateral"
import Aboutme from "@/components/aboutme/aboutme"
import ProjectTitle from "@/components/projects/projectittle"
import ContactTitle from "@/components/contact/contacttitle"
import Copyright from "@/components/copyright/copyright"

export default function Home() {
  return (
    <>
      <Navibar/>
      <Introduction />
      <MenuLateral />
      <Aboutme />
      <ProjectTitle />
      <ContactTitle />
      <Copyright />
    </>
  )
}
