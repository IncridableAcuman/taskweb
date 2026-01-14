import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Sheet, SheetClose, SheetContent, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"

const ViewTask = ({sheetOpen,setSheetOpen}:{sheetOpen:boolean,setSheetOpen:(val:boolean)=>void}) => {
  return (
    <>
    <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
        <SheetTrigger asChild>View</SheetTrigger>
        <SheetContent>
            <SheetHeader>
                <SheetTitle>Your Task Name</SheetTitle>
            </SheetHeader>
            <div className="grid flex-1 auto-rows-min gap-6 px-4">
          <div className="grid gap-3">
            <Label htmlFor="sheet-demo-name">Name</Label>
            <Input id="sheet-demo-name" defaultValue="Pedro Duarte" />
          </div>
          <div className="grid gap-3">
            <Label htmlFor="sheet-demo-username">Username</Label>
            <Input id="sheet-demo-username" defaultValue="@peduarte" />
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

export default ViewTask