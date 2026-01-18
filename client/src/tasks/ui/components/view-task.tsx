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
import type ITask from "@/tasks/interface/task.interface";
import { useState } from "react";
import EditForm from "./edit-form";

interface ViewTaskProps {
  view: boolean;
  setView: (view: boolean) => void;
  task: ITask | null;
}

const ViewTask = ({ view, setView, task }: ViewTaskProps) => {
  const [open,setOpen] = useState(false);
  if (!task) return null;

  return (
    <Sheet open={view} onOpenChange={setView}>
      <SheetContent>
        <SheetHeader>
          <div className="flex items-center justify-between gap-3 pt-5">
            <SheetTitle>{task.title}</SheetTitle>
            <EditForm sheetOpen={open} setSheetOpen={setOpen} />
          </div>
          <SheetDescription className="flex items-center gap-3 pt-3">
            <p className="bg-sky-500 text-white text-xs p-1.5 rounded">{task.status.slice(0, 1).concat(task.status.slice(1, task.status.length).toLowerCase())}</p>
            <p className="bg-amber-500 text-white text-xs p-1.5 rounded">{task.priority.slice(0, 1).concat(task.priority.slice(1, task.priority.length).toLowerCase())}</p>
          </SheetDescription>
        </SheetHeader>

        <div className="grid gap-4 px-4 py-6  text-xs">
          <div className="space-y-2">
            <Label>Description</Label>
            <p>{task.description}</p>
          </div>

          <div className="space-y-2 flex items-center justify-between ga3">
            <div className="space-y-2">
              <Label>Due Date</Label>
              <p >{task.dueDate}</p>
            </div>

            <div className="space-y-2">
              <Label>Created At</Label>
              <p>{task.createdAt.slice(0,10)}</p>
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
