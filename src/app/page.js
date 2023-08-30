import Navibar from "@/components/layout/navbar/navbar"
import Introduction from "@/components/introduction/introduction"
import MenuLateral from "@/components/layout/menulateral/menulateral"
import Aboutme from "@/components/aboutme/aboutme"

export default function Home() {
  return (
    <>
      <Navibar/>
      <Introduction />
      <MenuLateral />
      <Aboutme />
    </>
  )
}
