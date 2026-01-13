import { Checkbox } from "@/components/ui/checkbox"
import { Bell, Calendar, Star } from "lucide-react"

const TaskList = ({sheetOpen}:{sheetOpen:(arg0: boolean)=>void}) => {
    return (
        <>
            <div className="flex items-center justify-between gap-3 bg-white shadow p-4 border border-gray-300 rounded-md
             hover:shadow-md transition duration-300 cursor-pointer" onClick={()=>sheetOpen(true)}>
                <div className="flex items-center gap-3">
                    <Checkbox />
                    <div className="space-y-2">
                        <h1 className="flex items-center gap-3">Sheet Title Design homepage layout <span> <Star size={18} /> </span></h1>
                        <div className="flex items-center gap-3 text-xs">
                            <p>John Doe</p>
                            <p className="flex items-center gap-1.5">
                                <Calendar size={10} />
                                <span>Jan 13,2026</span>
                            </p>
                            <p className="flex items-center gap-1.5">
                                <Bell size={10} />
                                <span>Subtasks: 1/2</span>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="text-xs flex items-center gap-2">
                    <p className="bg-sky-200 text-sky-600 p-1 rounded">In Progress</p>
                    <p className="bg-amber-800 text-white p-1 rounded">High</p>
                </div>
            </div>
        </>
    )
}

export default TaskList