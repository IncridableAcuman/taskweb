import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator, CommandShortcut } from "../command"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "../dialog"
import { Input } from "../input"
import {
    Calculator,
    Calendar,
    CreditCard,
    Settings,
    Smile,
    User,
} from "lucide-react"

const SearchDialog = ({search,setSearch}:{search:boolean,setSearch:(search:boolean)=>void}) => {
    return (
        <>
            <Dialog open={search} onOpenChange={setSearch}>
                    <Input type="text" placeholder="Search..." 
                    className=" border border-gray-500 w-64 md:w-md cursor-pointer" 
                     onFocus={()=>setSearch(true)}/>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Search</DialogTitle>
                        <DialogDescription>Type a command or search through the app</DialogDescription>
                    </DialogHeader>
                    <Command className="rounded-lg border shadow-md md:min-w-112.5">
                        <CommandInput placeholder="Type a command or search..." />
                        <CommandList>
                            <CommandEmpty>No results found.</CommandEmpty>
                            <CommandGroup heading="Suggestions">
                                <CommandItem>
                                    <Calendar />
                                    <span>Calendar</span>
                                </CommandItem>
                                <CommandItem>
                                    <Smile />
                                    <span>Search Emoji</span>
                                </CommandItem>
                                <CommandItem disabled>
                                    <Calculator />
                                    <span>Calculator</span>
                                </CommandItem>
                            </CommandGroup>
                            <CommandSeparator />
                            <CommandGroup heading="Settings">
                                <CommandItem>
                                    <User />
                                    <span>Profile</span>
                                    <CommandShortcut>⌘P</CommandShortcut>
                                </CommandItem>
                                <CommandItem>
                                    <CreditCard />
                                    <span>Billing</span>
                                    <CommandShortcut>⌘B</CommandShortcut>
                                </CommandItem>
                                <CommandItem>
                                    <Settings />
                                    <span>Settings</span>
                                    <CommandShortcut>⌘S</CommandShortcut>
                                </CommandItem>
                            </CommandGroup>
                        </CommandList>
                    </Command>
                </DialogContent>
            </Dialog>
        </>
    )
}

export default SearchDialog