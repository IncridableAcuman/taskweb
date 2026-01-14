import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@radix-ui/react-label"
import { List, PanelTopBottomDashed, SlidersVertical } from "lucide-react"

type ViewType = "list" | "panel";

const TaskRadioGroup = ({active,setActive}:{active:ViewType,setActive:(val:ViewType)=>void}) => {
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
          <Button className="cursor-pointer" variant={'secondary'}>
            <SlidersVertical size={20} />
          </Button>
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