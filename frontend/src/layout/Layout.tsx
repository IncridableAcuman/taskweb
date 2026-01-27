import Navbar from "@/components/ui/components/Navbar"
import SidebarComponent from "@/components/ui/components/SidebarComponent"
import { SidebarProvider } from "@/components/ui/sidebar"
import { Outlet } from "react-router-dom"

const Layout = () => {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen overflow-hidden w-full">
        <aside>
          <SidebarComponent />
        </aside>
        
        <div className="flex flex-col flex-1 min-h-screen">
          <header className="sticky top-0 z-40 bg-gray-50 shadow">
            <Navbar/>
          </header>
          <main className="flex-1 overflow-y-auto p-4">
            <Outlet />
          </main>
        </div>
      </div>
    </SidebarProvider>
  )
}

export default Layout