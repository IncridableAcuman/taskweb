import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@radix-ui/react-label"
import { Settings } from "lucide-react"

const TaskRadioGroup = () => {
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
          <Button className="cursor-pointer">
            <Settings size={20} />
          </Button>
        </div>
      </div>
    </>
  )
}

export default TaskRadioGroup