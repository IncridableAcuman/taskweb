import axiosInstance from "@/api/axiosInstance"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import React, { useEffect, useState } from "react"
import { useNavigate, useSearchParams } from "react-router-dom"
import { toast } from "sonner"

const ResetPassword = () => {
    const [password,setPassword] = useState("");
    const [confirmPassword,setConfirmPassword] = useState("");
    const [searchParams] = useSearchParams();
    const token = searchParams.get('token');
    const navigate = useNavigate();

    const handleSubmit = async (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(password !== confirmPassword){
            toast.warning("Password must be equal");
        }
        try {
            const {data} = await axiosInstance.put("/auth/reset-password",{token,password});
            toast.success(data || "Updated successfully.");
            navigate("/login");
        } catch (error) {
            console.log(error);
            toast.error("Password update failed.");

        }
    }

    useEffect(()=>{
        if(localStorage.getItem("accessToken")){
            navigate("/");
        }
    },[navigate]);

    return (
        <div className="flex flex-col items-center justify-center w-full pt-24">
            <Card className="w-full max-w-md">
                <CardHeader>
                    <CardTitle>Update Password</CardTitle>
                    <CardDescription>Update your password</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <form className="space-y-4" onSubmit={handleSubmit}>
                        <div className="space-y-4">
                            <Label htmlFor="password">Password</Label>
                            <Input type="password"
                             placeholder="Password"
                             value={password}
                             onChange={(e)=>setPassword(e.target.value)}
                              required />
                        </div>
                        <div className="space-y-4">
                            <Label htmlFor="password">Confirm Password</Label>
                            <Input type="password" 
                            placeholder="Password"
                            value={confirmPassword}
                            onChange={(e)=>setConfirmPassword(e.target.value)}
                             required />
                        </div>
                        <Button className="w-full" type="submit">Update Password</Button>
                    </form>
                </CardContent>
            </Card>
        </div>
    )
}

export default ResetPassword