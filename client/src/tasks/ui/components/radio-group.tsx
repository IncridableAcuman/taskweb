import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@radix-ui/react-label"
import { List, PanelTopBottomDashed, SlidersVertical, X } from "lucide-react"
import { useState } from "react"

type ViewType = "list" | "panel";

const TaskRadioGroup = ({ active, setActive }: { active: ViewType, setActive: (val: ViewType) => void }) => {
  const [filterOpen, setFilterOpen] = useState(false);
  const users = [
    { id: 1, name: "Arthur" },
    { id: 2, name: "Arthur" },
    { id: 3, name: "Arthur" },
    { id: 4, name: "Arthur" },
    { id: 5, name: "Arthur" },
    { id: 6, name: "Arthur" },
    { id: 7, name: "Arthur" },
    { id: 8, name: "Arthur" },
  ]
  return (
    <>
      <div className="flex flex-col md:flex-row items-center justify-between gap-3">
        <div className="mt-3">
          <RadioGroup defaultValue="option-one" className="flex items-center gap-3">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="option-one" id="option-one" />
              <Label htmlFor="option-one">All</Label>
            </div>

            <div className="flex items-center space-x-2">
              <RadioGroupItem value="option-two" id="option-two" />
              <Label htmlFor="option-two">Todo</Label>
            </div>

            <div className="flex items-center space-x-2">
              <RadioGroupItem value="option-three" id="option-two" />
              <Label htmlFor="option-two">In Progress</Label>
            </div>

            <div className="flex items-center space-x-2">
              <RadioGroupItem value="option-four" id="option-two" />
              <Label htmlFor="option-two">Done</Label>
            </div>

          </RadioGroup>
        </div>
        <div className="flex items-center gap-3">
          <Input type="text" placeholder="Search..." className="w-64 border border-gray-500" />
          <Dialog open={filterOpen} onOpenChange={setFilterOpen}>
            <DialogTrigger asChild>
              <Button className="cursor-pointer" variant={'secondary'} onClick={() => setFilterOpen(true)}>
                <SlidersVertical size={20} />
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Assigned Users</DialogTitle>
              </DialogHeader>
              <div className="grid grid-cols-6 gap-2 text-center">
                {users.map((user)=>(
                  <div className="border border-gray-200 text-xs px-3 py-2 rounded-md max-w-14
                   hover:shadow transition duration-300 hover:bg-gray-200" key={user.id}>
                      <button>{user.name}</button>
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-3 text-xs py-4">
                <Checkbox/>
                <span>Show starred only</span>
              </div>
              <p>Priority</p>
              <div className="flex items-center gap-3 w-full">
                <Button variant={'secondary'} className="shadow border border-gray-200 hover:bg-gray-200 transition duration-300">Low</Button>
                <Button variant={'secondary'} className="shadow border border-gray-200 hover:bg-gray-200 transition duration-300">Medium</Button>
                <Button variant={'secondary'} className="shadow border border-gray-200 hover:bg-gray-200 transition duration-300">High</Button>
              </div>
              <div className="flex items-center gap-3 text-xs justify-end">
                <p>Clear Filters</p>
                <X size={18} className="cursor-pointer hover:text-gray-400 transform duration-300" />
              </div>
            </DialogContent>
          </Dialog>
          <div className="flex items-center bg-gray-200 p-1 rounded-md">

            <Button size={'icon-sm'} className={active === "list" ? 'shadow' : ""}
              variant={active === 'list' ? 'default' : "secondary"}
              onClick={() => setActive("list")}>
              <List />
            </Button>

            <Button size={'icon-sm'} onClick={() => setActive("panel")}
              className={active === "panel" ? 'shadow' : ""}
              variant={active === 'panel' ? 'default' : 'secondary'}>
              <PanelTopBottomDashed />
            </Button>

          </div>
        </div>
      </div>
    </>
  )
}

export default TaskRadioGroup