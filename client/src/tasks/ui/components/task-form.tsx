import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Sheet, SheetClose, SheetContent, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Textarea } from "@/components/ui/textarea"
import { Tooltip } from "@/components/ui/tooltip"
import { TooltipContent, TooltipTrigger } from "@radix-ui/react-tooltip"
import { Plus } from "lucide-react"

const TaskForm = ({sheetOpen,setSheetOpen}:{sheetOpen:boolean,setSheetOpen:(val:boolean)=>void}) => {
    return (
        <>
            <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
                <SheetTrigger asChild>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Button className="rounded-full cursor-pointer shadow-md"
                             onClick={()=>setSheetOpen(true)}>
                                <Plus />
                            </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                            <p className="bg-white text-gray-900 text-sm">Add Task</p>
                        </TooltipContent>
                    </Tooltip>
                </SheetTrigger>
                <SheetContent>
                    <SheetHeader>
                        <SheetTitle>Add New Task </SheetTitle>
                    </SheetHeader>
                    <div className="grid flex-1 auto-rows-min gap-6 px-4">
                        <div className="grid gap-3">
                            <Label htmlFor="title">Title</Label>
                            <Input id="title" defaultValue="Your task title" />
                        </div>
                        <div className="grid gap-3">
                            <Label htmlFor="description">Description</Label>
                            <Textarea id="description" defaultValue="Something content" />
                        </div>
                    </div>
                    <SheetFooter>
                        <Button type="submit">Save changes</Button>
                        <SheetClose asChild>
                            <Button variant="outline">Close</Button>
                        </SheetClose>
                    </SheetFooter>
                </SheetContent>
            </Sheet>
        </>
    )
}

export default TaskForm