import { SidebarTrigger } from "../sidebar"
import { BellDot, LogOut, Moon, PanelTop, User, UsersRound } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "../dropdown-menu"
import { useState } from "react"
import SearchDialog from "./SearchDialog"
import { Avatar, AvatarFallback, AvatarImage } from "../avatar"

const Navbar = () => {
    const [menuOpen,setMenuOpen] = useState(false);
    const [search,setSearch]=useState(false);
    return (
        <div className="flex items-center justify-between gap-4 sm:gap-6 md:gap-8 lg:gap-10 p-4">
            <div className="flex items-center gap-3">
                <SidebarTrigger />
                <SearchDialog search={search} setSearch={setSearch} />
            </div>
            <div className="flex items-center gap-3">
                <BellDot size={20} className="cursor-pointer text-gray-800" />
                <Moon size={20} className="cursor-pointer text-gray-800" />
                <p className="text-gray-400">|</p>
                <DropdownMenu open={menuOpen} onOpenChange={setMenuOpen}>
                    <DropdownMenuTrigger asChild>
                        <Avatar className="cursor-pointer">
                            <AvatarImage src="https://github.com/shadcn.png" className="w-8 rounded-full object-cover" />
                            <AvatarFallback>AI</AvatarFallback>
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