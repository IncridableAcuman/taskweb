import { Calendar, Home, Inbox, Search, Settings } from "lucide-react"
import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarMenu, SidebarMenuButton } from "../sidebar"
import { Link } from "react-router-dom"

const SidebarComponent = () => {
    const items = [
        {
            title: "Home",
            url: "#",
            icon: Home,
        },
        {
            title: "Inbox",
            url: "#",
            icon: Inbox,
        },
        {
            title: "Calendar",
            url: "#",
            icon: Calendar,
        },
        {
            title: "Search",
            url: "#",
            icon: Search,
        },
        {
            title: "Settings",
            url: "#",
            icon: Settings,
        },
    ]
    return (
        <>
            <Sidebar>
                <SidebarContent>
                    <SidebarGroup>
                        <SidebarGroupLabel className="text-lg font-semibold border-b my-4">SUS Task</SidebarGroupLabel>
                        <SidebarGroupContent>
                            {
                                items.map((item, index) => (
                                    <SidebarMenu key={index}>
                                        <SidebarMenuButton asChild>
                                            <Link to={item.url}>
                                                <item.icon/>
                                                <span>{item.title}</span>
                                            </Link>
                                        </SidebarMenuButton>
                                    </SidebarMenu>
                                ))
                            }
                        </SidebarGroupContent>
                    </SidebarGroup>
                </SidebarContent>
            </Sidebar>
        </>
    )
}

export default SidebarComponent