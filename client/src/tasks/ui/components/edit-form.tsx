import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Input } from "@/components/ui/input"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from "@/components/ui/sheet"
import { Textarea } from "@/components/ui/textarea"
import { Tooltip, TooltipTrigger } from "@/components/ui/tooltip"
import TaskSchema from "@/tasks/schema/task.schema"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import axiosInstance from "@/api/axiosInstance"
import { toast } from "sonner"
import { UseTasks } from "@/provider/TaskProvider"
import type ITask from "@/tasks/interface/task.interface"

const EditForm = ({ sheetOpen, setSheetOpen,task }: 
    { sheetOpen: boolean, setSheetOpen: (val: boolean) => void, task:ITask }) => {
    const {taskList} = UseTasks();
    const form = useForm<z.input<typeof TaskSchema>>({
        resolver: zodResolver(TaskSchema),
        defaultValues: {
            title: "",
            description: "",
            status: "TODO",
            priority: "MEDIUM",
        },
    })

    const handleSubmit = async (value: z.infer<typeof TaskSchema>) => {
        try {
            const { data } = await axiosInstance.post("/tasks", value);
            toast.success("Task created successfully");
            if (data) {
                setSheetOpen(false);
                form.reset({
                    title: "",
                    description: "",
                    dueDate: undefined,
                    status: "TODO",
                    priority: "MEDIUM"
                });
                taskList();
            }
        } catch (error) {
            console.log(error);
            toast.error("Task crating failed");
        }
    }


    return (
        <>
            <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
                <Tooltip>
                    <TooltipTrigger asChild>
                        <Button className=""
                            onClick={() => setSheetOpen(true)}>
                            Edit
                        </Button>
                    </TooltipTrigger>
                </Tooltip>
                <SheetContent>
                    <SheetHeader>
                        <SheetTitle>Edit Task </SheetTitle>
                        <SheetDescription>Edit and complete a task</SheetDescription>
                    </SheetHeader>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(handleSubmit)}>
                            <div className="grid flex-1 auto-rows-min gap-6 px-4">
                                {/* title */}
                                <div className="grid gap-3">
                                    <FormField
                                        control={form.control}
                                        name="title"
                                        render={() => (
                                            <FormItem>
                                                <FormLabel htmlFor="title">Title</FormLabel>
                                                <FormControl>
                                                    <Input id="title"
                                                        placeholder="Your task title" value={task.title} />
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
                                        render={() => (
                                            <FormItem>
                                                <FormLabel htmlFor="description">Description</FormLabel>
                                                <FormControl>
                                                    <Textarea id="description" placeholder="Something content" value={task.description} />
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
                                                <FormLabel htmlFor="dueDate">Due Date</FormLabel>
                                                <Popover>
                                                    <PopoverTrigger asChild>
                                                        <FormControl>
                                                            <Button variant="outline" className="justify-start">
                                                                {task.dueDate
                                                                    ? task.dueDate
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
                                <div className="flex items-center justify-center gap-3">
                                    {/* status */}
                                    <div className="grid gap-3">
                                        <FormField
                                            control={form.control}
                                            name="status"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel htmlFor="status">Status</FormLabel>
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
                                                    <FormLabel>Priority</FormLabel>
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

export default EditForm