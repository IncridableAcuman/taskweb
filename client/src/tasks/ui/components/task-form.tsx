import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Input } from "@/components/ui/input"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from "@/components/ui/sheet"
import { Textarea } from "@/components/ui/textarea"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"
import TaskSchema from "@/tasks/schema/task.schema"
import { Plus, X } from "lucide-react"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form"
import { useState } from "react"
import axiosInstance from "@/api/axiosInstance"

const TaskForm = ({ sheetOpen, setSheetOpen }: { sheetOpen: boolean, setSheetOpen: (val: boolean) => void }) => {
    const [assignedInput, setAssignedInput] = useState("");
    const [subtasks, setsubtasks] = useState("");
    const form = useForm<z.input<typeof TaskSchema>>({
        resolver: zodResolver(TaskSchema),
        defaultValues: {
            title: "",
            description: "",
            status: "TODO",
            priority: "MEDIUM",
            assignedTo: [],
            subtasks: [],
        },
    })

    const handleSubmit =  async () => {
        try {
            const {data} = await axiosInstance.post("/tasks",form);
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    }


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
                        <SheetDescription>Create and complete a task</SheetDescription>
                    </SheetHeader>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(handleSubmit)}>
                            <div className="grid flex-1 auto-rows-min gap-6 px-4">
                                {/* title */}
                                <div className="grid gap-3">
                                    <FormField
                                        control={form.control}
                                        name="title"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormControl>
                                                    <Input id="title"
                                                     placeholder="Your task title" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>
                                {/* description */}
                                <div className="grid gap-3">
                                    <FormField
                                        control={form.control}
                                        name="description"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormControl>
                                                    <Textarea id="description" placeholder="Something content" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>
                                {/* DueDate */}
                                <div className="grid gap-3">
                                    {/* DUE DATE */}
                                    <FormField
                                        control={form.control}
                                        name="dueDate"
                                        render={({ field }) => (
                                            <FormItem>
                                                <Popover>
                                                    <PopoverTrigger asChild>
                                                        <FormControl>
                                                            <Button variant="outline" className="justify-start">
                                                                {field.value
                                                                    ? field.value.toDateString()
                                                                    : "Select a date"}
                                                            </Button>
                                                        </FormControl>
                                                    </PopoverTrigger>
                                                    <PopoverContent className="p-0">
                                                        <Calendar
                                                            mode="single"
                                                            selected={field.value}
                                                            onSelect={field.onChange}
                                                        />
                                                    </PopoverContent>
                                                </Popover>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>
                                {/* assigned to */}
                                <div className="grid gap-3">
                                    <FormField
                                        control={form.control}
                                        name="assignedTo"
                                        render={({ field }) => (
                                            <FormItem>
                                                {/* chips */}
                                                <div className="flex flex-wrap gap-2">
                                                    {field.value.map((user, index) => (
                                                        <span
                                                            key={index}
                                                            className="flex items-center gap-1 rounded-full border px-3 py-1 text-xs"
                                                        >
                                                            {user}
                                                            <button
                                                                type="button"
                                                                onClick={() => {
                                                                    if(!assignedInput.trim()) return;
                                                                    if(assignedInput.length>=5) return;
                                                                    field.onChange(
                                                                        field.value.filter((_, i) => i !== index)
                                                                    )
                                                                }

                                                                }
                                                            >
                                                                <X className="h-3 w-3" />
                                                            </button>
                                                        </span>
                                                    ))}
                                                </div>

                                                {/* input + plus */}
                                                <div className="flex items-center gap-2">
                                                    <Input
                                                        placeholder="Enter user name"
                                                        value={assignedInput}
                                                        onChange={(e) => setAssignedInput(e.target.value)}
                                                        onKeyDown={(e) => {
                                                            if (e.key === "Enter") {
                                                                e.preventDefault()
                                                                if(assignedInput.length>=5) return;
                                                                if (!assignedInput.trim()) return
                                                                field.onChange([...field.value, assignedInput.trim()])
                                                                setAssignedInput("")
                                                            }
                                                        }}
                                                    />
                                                    <Button
                                                        type="button"
                                                        variant="outline"
                                                        onClick={() => {
                                                            if (!assignedInput.trim()) return
                                                            field.onChange([...field.value, assignedInput.trim()])
                                                            setAssignedInput("")
                                                        }}
                                                    >
                                                        <Plus size={18} />
                                                    </Button>
                                                </div>

                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />

                                </div>
                                {/* tags */}
                                <div className="grid gap-3">
                                    <FormField
                                        control={form.control}
                                        name="subtasks"
                                        render={({ field }) => (
                                            <FormItem>
                                                {/* chips */}
                                                <div className="flex flex-wrap gap-2">
                                                    {field.value.map((task, index) => (
                                                        <span
                                                            key={index}
                                                            className="flex items-center gap-1 rounded-full border px-3 py-1 text-xs"
                                                        >
                                                            {task}
                                                            <button
                                                                type="button"
                                                                onClick={() => {
                                                                    if(!subtasks.trim()) return;
                                                                    if(subtasks.length>=5) return;
                                                                    field.onChange(
                                                                        field.value.filter((_, i) => i !== index)
                                                                    )
                                                                }
                                                                    
                                                                }
                                                            >
                                                                <X className="h-3 w-3" />
                                                            </button>
                                                        </span>
                                                    ))}
                                                </div>

                                                {/* input + plus */}
                                                <div className="flex items-center gap-2">
                                                    <Input
                                                        placeholder="Enter user name"
                                                        value={subtasks}
                                                        onChange={(e) => setsubtasks(e.target.value)}
                                                        onKeyDown={(e) => {
                                                            if (e.key === "Enter") {
                                                                e.preventDefault()
                                                                if(subtasks.length>=5) return;
                                                                if (!subtasks.trim()) return
                                                                field.onChange([...field.value, subtasks.trim()])
                                                                setsubtasks("")
                                                            }
                                                        }}
                                                    />
                                                    <Button
                                                        type="button"
                                                        variant="outline"
                                                        onClick={() => {
                                                            if (!subtasks.trim()) return
                                                            field.onChange([...field.value, subtasks.trim()])
                                                            setsubtasks("")
                                                        }}
                                                    >
                                                        <Plus size={18} />
                                                    </Button>
                                                </div>

                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>
                                {/*  */}
                                <div className="flex items-center justify-center gap-3">
                                    {/* status */}
                                    <div className="grid gap-3">
                                        <FormField
                                            control={form.control}
                                            name="status"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                        <FormControl>
                                                            <SelectTrigger className="w-44">
                                                                <SelectValue placeholder="Select status" />
                                                            </SelectTrigger>
                                                        </FormControl>
                                                        <SelectContent>
                                                            <SelectItem value="TODO">Todo</SelectItem>
                                                            <SelectItem value="IN_PROGRESS">In progress</SelectItem>
                                                            <SelectItem value="DONE">Done</SelectItem>
                                                        </SelectContent>
                                                    </Select>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                    </div>
                                    {/* priority */}
                                    <div className="grid gap-3">
                                        <FormField
                                            control={form.control}
                                            name="priority"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                        <FormControl>
                                                            <SelectTrigger className="w-44">
                                                                <SelectValue placeholder="Select priority" />
                                                            </SelectTrigger>
                                                        </FormControl>
                                                        <SelectContent>
                                                            <SelectItem value="LOW">Low</SelectItem>
                                                            <SelectItem value="MEDIUM">Medium</SelectItem>
                                                            <SelectItem value="HIGH">High</SelectItem>
                                                        </SelectContent>
                                                    </Select>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                    </div>
                                </div>
                                {/*  */}
                                <Button type="submit">Create task</Button>
                            </div>
                        </form>
                    </Form>
                </SheetContent>
            </Sheet>
        </>
    )
}

export default TaskForm