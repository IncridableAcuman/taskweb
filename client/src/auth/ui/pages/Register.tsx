import { Button } from "@/components/ui/button"
import { Card, CardAction, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { useForm } from "react-hook-form"
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import RegisterSchema from "@/auth/schema/regiter.schema"
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form"
import { Link } from "react-router-dom";
import axiosInstance from "@/api/axiosInstance";
import { toast } from "sonner";
import { useState } from "react";
import { Spinner } from "@/components/ui/spinner";

const Register = () => {
    const [loading, setLoading] = useState(false);
    const form = useForm<z.input<typeof RegisterSchema>>({
        resolver: zodResolver(RegisterSchema),
        defaultValues: {
            firstName: "",
            lastName: "",
            username: "",
            email: "",
            password: ""
        }
    });
    const sleep = (ms:number) => new Promise(resolve=> setTimeout(resolve,ms));
    const handleSubmit = async (value: z.infer<typeof RegisterSchema>) => {
        try {
            setLoading(true);
            const { data } = await axiosInstance.post("/register", value);
            await sleep(2000);
            console.log(data);
        } catch (error) {
            console.log(error);
            toast.error("Email or password error.");
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="flex flex-col items-center justify-center w-full pt-16">
            <Card className="w-full max-w-sm">
                <CardHeader>
                    <CardTitle>Create a new Account</CardTitle>
                    <CardDescription>Enter your email below to register to your account</CardDescription>
                    <CardAction>
                        <Button variant="link">
                            <Link to={'/login'}>Sign In</Link>
                        </Button>
                    </CardAction>
                </CardHeader>
                <CardContent>
                    <Form {...form}>
                        <form className="space-y-4" onSubmit={form.handleSubmit(handleSubmit)}>
                            <div className="flex flex-col gap-6">
                                <div className="grid gap-2">
                                    <FormField
                                        control={form.control}
                                        name="firstName"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormControl>
                                                    <Input
                                                        id="firstName"
                                                        type="text"
                                                        placeholder="John"
                                                        {...field}
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col gap-6">
                                <div className="grid gap-2">
                                    <FormField
                                        control={form.control}
                                        name="lastName"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormControl>
                                                    <Input
                                                        id="lastName"
                                                        type="text"
                                                        placeholder="Doe"
                                                        {...field}
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col gap-6">
                                <div className="grid gap-2">
                                    <FormField
                                        control={form.control}
                                        name="username"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormControl>
                                                    <Input
                                                        id="username"
                                                        type="text"
                                                        placeholder="Developer"
                                                        {...field}
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col gap-6">
                                <div className="grid gap-2">
                                    <FormField
                                        control={form.control}
                                        name="email"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormControl>
                                                    <Input
                                                        id="email"
                                                        type="email"
                                                        placeholder="mexample@gmail.com"
                                                        {...field}
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col gap-6">
                                <div className="grid gap-2">
                                    <FormField
                                        control={form.control}
                                        name="password"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormControl>
                                                    <Input
                                                        id="password"
                                                        type="password"
                                                        placeholder="xxxxxxxx"
                                                        {...field}
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>
                            </div>
                            <div className="grid gap-2 pt-4">
                                <Button type="submit" className="w-full">
                                    {loading ? <p className="flex items-center gap-2">
                                        <Spinner />
                                        Loading...</p> : "Register"}
                                </Button>
                            </div>
                        </form>
                    </Form>
                </CardContent>
            </Card>
        </div>
    )
}

export default Register