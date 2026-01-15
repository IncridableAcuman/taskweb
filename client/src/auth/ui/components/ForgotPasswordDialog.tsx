import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Link } from "react-router-dom"

const ForgotPasswordDialog = ({ forgotPassword, setForgotPassword }: { forgotPassword: boolean, setForgotPassword: (val: boolean) => void }) => {
    return (
        <>
            <Dialog open={forgotPassword} onOpenChange={setForgotPassword}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Forgot Password?</DialogTitle>
                        <DialogDescription>
                            Please check your email for delivery. <Link to="https://mail.google.com/">Mail here</Link>
                        </DialogDescription>
                    </DialogHeader>

                    <Label htmlFor="email">Email</Label>
                    <Input
                        id="email"
                        type="email"
                        placeholder="m@example.com"
                        required
                    />

                    <DialogFooter>
                        <Button type="submit">Submit</Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>

        </>
    )
}

export default ForgotPasswordDialog