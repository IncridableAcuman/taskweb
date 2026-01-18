import { SidebarTrigger } from "../sidebar"
import { LogOut, PanelTop, User, UsersRound } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "../dropdown-menu"
import { useState } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "../avatar"
import { toast } from "sonner"
import axiosInstance from "@/api/axiosInstance"
import { useNavigate } from "react-router-dom"

const Navbar = () => {
    const [menuOpen,setMenuOpen] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async () => {
        try {
            const {data} = await axiosInstance.post("/auth/logout");
            toast.success(data || "Logged out successfully.");
            localStorage.removeItem("accessToken");
            navigate("/login");
        } catch (error) {
            console.log(error);
            toast.error("Logged out failed.");
        }
    }

    return (
        <div className="flex items-center justify-between gap-4 sm:gap-6 md:gap-8 lg:gap-10 p-4">
            <div className="flex items-center gap-3">
                <SidebarTrigger />
            </div>
            <div className="flex items-center gap-3">
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
                        <DropdownMenuItem className="flex items-center gap-2" onClick={handleSubmit}><LogOut size={20} /> Log out</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </div>
    )
}

export default Navbar