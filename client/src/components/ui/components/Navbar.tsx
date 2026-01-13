import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar"
import { Input } from "../input"
import { SidebarTrigger } from "../sidebar"
import { BellDot, Moon } from "lucide-react"

const Navbar = () => {
    return (
        <div className="flex items-center justify-between gap-4 sm:gap-6 md:gap-8 lg:gap-10 p-4">
            <div className="flex items-center gap-3">
                <SidebarTrigger />
                <Input type="text" placeholder="Search..." className=" border border-gray-500 w-64 md:w-md" />
            </div>
            <div className="flex items-center gap-3">
                <BellDot size={20} className="cursor-pointer text-gray-800" />
                <Moon size={20} className="cursor-pointer text-gray-800" />
                <p className="text-gray-400">|</p>
                <Avatar className="cursor-pointer">
                    <AvatarImage src="https://github.com/shadcn.png" className="w-8 rounded-full object-cover" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
            </div>
        </div>
    )
}

export default Navbar