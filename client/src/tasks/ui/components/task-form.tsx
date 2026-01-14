import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Sheet, SheetContent, SheetFooter, SheetHeader, SheetTitle } from "@/components/ui/sheet"
import { Textarea } from "@/components/ui/textarea"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"
import { Plus } from "lucide-react"
import { useState } from "react"

const TaskForm = ({ sheetOpen, setSheetOpen }: { sheetOpen: boolean, setSheetOpen: (val: boolean) => void }) => {
    const [dueDate, setDueDate] = useState<Date | undefined>(new Date());
    return (
        <>
            <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
                <Tooltip>
                    <TooltipTrigger asChild>
                        <Button className="rounded-full cursor-pointer shadow-md"
                            onClick={() => setSheetOpen(true)}>
                            <Plus />
                        </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                        <p>Add Task</p>
                    </TooltipContent>
                </Tooltip>
                <SheetContent>
                    <SheetHeader>
                        <SheetTitle>Add New Task </SheetTitle>
                    </SheetHeader>
                    <div className="grid flex-1 auto-rows-min gap-6 px-4">
                        {/* title */}
                        <div className="grid gap-3">
                            <Label htmlFor="title">Title</Label>
                            <Input id="title" placeholder="Your task title" />
                        </div>
                        {/* description */}
                        <div className="grid gap-3">
                            <Label htmlFor="description">Description</Label>
                            <Textarea id="description" placeholder="Something content" />
                        </div>
                        {/* DueDate */}
                        <div className="grid gap-3">
                            <Label htmlFor="description">Due Date</Label>
                            <Popover>
                                <PopoverTrigger asChild>
                                    <Button
                                        variant={'outline'}
                                        className="w-full justify-start text-left font-normal"
                                    >Select a date</Button>
                                </PopoverTrigger>
                                <PopoverContent className="w-auto p-0">
                                    <Calendar
                                        mode="single"
                                        selected={dueDate}
                                        onSelect={(date) => setDueDate(date)}
                                        initialFocus
                                        disabled={(date) => date < new Date()}
                                    />
                                </PopoverContent>
                            </Popover>
                        </div>
                        {/* assigned to */}
                        <div className="grid gap-3">
                            <Label htmlFor="assignedTo">Assigned To</Label>
                            <div className="flex items-center gap-2">
                                <Input id="assignedTo" placeholder="Enter user name" />
                                <Button variant={'outline'} className="cursor-pointer shadow">
                                    <Plus size={20} />
                                </Button>
                            </div>
                        </div>
                        {/* tags */}
                        <div className="grid gap-3">
                            <Label htmlFor="assignedTo">Tags</Label>
                            <div className="flex items-center gap-2">
                                <Input id="tags" placeholder="Enter a tag" />
                                <Button variant={'outline'} className="cursor-pointer shadow">
                                    <Plus size={20} />
                                </Button>
                            </div>
                        </div>
                        {/*  */}
                        <div className="flex items-center justify-center gap-3">
                            {/* status */}
                            <div className="grid gap-3">
                                <Label htmlFor="description">Status</Label>
                                <Select>
                                    <SelectTrigger className="w-44">
                                        <SelectValue placeholder="Select a status" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectGroup>
                                            <SelectLabel>Status</SelectLabel>
                                            <SelectItem value="TODO">Todo</SelectItem>
                                            <SelectItem value="IN_PROGRESS">In progress</SelectItem>
                                            <SelectItem value="DONE">Done</SelectItem>
                                        </SelectGroup>
                                    </SelectContent>
                                </Select>
                            </div>
                            {/* priority */}
                            <div className="grid gap-3">
                                <Label htmlFor="description">Priority</Label>
                                <Select>
                                    <SelectTrigger className="w-44">
                                        <SelectValue placeholder="Select a priority" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectGroup>
                                            <SelectLabel>Status</SelectLabel>
                                            <SelectItem value="LOW">Low</SelectItem>
                                            <SelectItem value="MEDIUM">Medium</SelectItem>
                                            <SelectItem value="HIGH">High</SelectItem>
                                        </SelectGroup>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>
                        {/*  */}
                    </div>
                    <SheetFooter>
                        <Button type="submit">Create task</Button>
                    </SheetFooter>
                </SheetContent>
            </Sheet>
        </>
    )
}

export default TaskForm