import SidebarComponent from "@/components/ui/components/SidebarComponent"
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { Outlet } from "react-router-dom"

const Layout = () => {
  return (
    <SidebarProvider>
      <SidebarComponent />
      <main>
        <SidebarTrigger />
        <Outlet />
      </main>
    </SidebarProvider>
  )
}

export default Layout