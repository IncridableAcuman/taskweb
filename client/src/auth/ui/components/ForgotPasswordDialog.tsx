import axiosInstance from "@/api/axiosInstance"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import  { useState } from "react"
import { Link } from "react-router-dom"
import { toast } from "sonner"

const ForgotPasswordDialog = (
    { 
        forgotPassword,
        setForgotPassword 
    } : 
    {
         forgotPassword: boolean,
        setForgotPassword: (val: boolean) => void 
    }) => {
        const [email,setEmail] = useState("");

    const handleSubmit = async () => {
        try {
            const {data} = await axiosInstance.post("/auth/forgot-password",{email});
            toast.success(data || "Check your email.");
        } catch (error) {
            console.log(error);
            toast.error("Email invalid format.");
        }
    }

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
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />

                    <DialogFooter>
                        <Button type="submit" onClick={handleSubmit}>Submit</Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>

        </>
    )
}

export default ForgotPasswordDialog