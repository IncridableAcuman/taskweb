import axiosInstance from "@/api/axiosInstance";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { UseTasks } from "@/provider/TaskProvider";
import type ITask from "@/tasks/interface/task.interface";
import { Trash } from "lucide-react";
import { toast } from "sonner";
import EditForm from "./edit-form";
import { useState } from "react";

interface ViewTaskProps {
  view: boolean;
  setView: (view: boolean) => void;
  task: ITask | null;
}

const ViewTask = ({ view, setView, task }: ViewTaskProps) => {
  const {taskList} = UseTasks();
  const [open,setOpen]=useState(false);

    if (!task) return null;

  const handleSubmit = async () => {
    try {
      await axiosInstance.delete(`/tasks/${task.id}`);
      toast.success("Task deleted successfully");
      taskList();
      setView(false);
    } catch (error) {
      console.log(error);
      toast.error("Task don't deleted");
    }
  }

  return (
    <Sheet open={view} onOpenChange={setView}>
      <SheetContent>
        <SheetHeader>
          <div className="flex items-center justify-between gap-3 pt-5">
            <SheetTitle>{task.title}</SheetTitle>
            <EditForm sheetOpen={open} setSheetOpen={setOpen} task={task} />
          </div>
          <SheetDescription className="flex items-center gap-3 pt-3">
            <button className="bg-sky-500 text-white text-xs p-1.5 rounded">{task.status.slice(0, 1).concat(task.status.slice(1, task.status.length).toLowerCase())}</button>
            <button className="bg-amber-500 text-white text-xs p-1.5 rounded">{task.priority.slice(0, 1).concat(task.priority.slice(1, task.priority.length).toLowerCase())}</button>
            <Button variant={'ghost'} size={'icon-sm'} className="cursor-pointer"
             onClick={handleSubmit}>
              <Trash size={18} className="text-red-500 fill" fill={'currentColor'} />
            </Button>
          </SheetDescription>
        </SheetHeader>

        <div className="grid gap-4 px-4 py-6  text-xs">
          <div className="space-y-2">
            <Label>Description</Label>
            <p>{task.description}</p>
          </div>

          <div className="space-y-2 flex items-center justify-between ga3">
            <div className="space-y-2">
              <Label>Updated At</Label>
              <p >{task.updatedAt.slice(0, 10)}</p>
            </div>

            <div className="space-y-2">
              <Label>Created At</Label>
              <p>{task.createdAt.slice(0, 10)}</p>
            </div>
          </div>

          <div className="space-y-2">
            <Label>Due date</Label>
            <Input value={task.dueDate} disabled />
          </div>
        </div>

        <SheetFooter>
          <SheetClose asChild>
            <Button variant="outline">Close</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default ViewTask;
