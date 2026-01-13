import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar"
import { Input } from "../input"
import { SidebarTrigger } from "../sidebar"
import { BellDot, LogOut, Moon, PanelTop, User, UsersRound } from "lucide-react"
import { DropdownMenu, DropdownMenuSeparator, DropdownMenuTrigger } from "../dropdown-menu"
import { DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel } from "@radix-ui/react-dropdown-menu"
import { useState } from "react"

const Navbar = () => {
    const [menuOpen,setMenuOpen] = useState(false);
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
                <DropdownMenu open={menuOpen} onOpenChange={setMenuOpen}>
                    <DropdownMenuTrigger asChild>
                        <Avatar className="cursor-pointer" onClick={()=>setMenuOpen(true)}>
                            <AvatarImage src="https://github.com/shadcn.png" className="w-8 rounded-full object-cover" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="bg-white p-4 shadow cursor-pointer m-4 space-y-2 w-40">
                        <DropdownMenuLabel>My Account</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="flex items-center gap-2"><User size={20} />Profile</DropdownMenuItem>
                        <DropdownMenuItem className="flex items-center gap-2"><PanelTop size={20} />Billing</DropdownMenuItem>
                        <DropdownMenuItem className="flex items-center gap-2"><UsersRound size={20} /> Team</DropdownMenuItem>
                        <DropdownMenuItem className="flex items-center gap-2"><LogOut size={20} /> Log out</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </div>
    )
}

export default Navbar