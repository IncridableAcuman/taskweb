import { Button } from "@/components/ui/button"
import { Card, CardAction, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { useEffect, useState } from "react"
import ForgotPasswordDialog from "../components/ForgotPasswordDialog"
import { Link, useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form"
import { z } from 'zod';
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form"
import LoginSchema from "@/auth/schema/login.schema"
import { zodResolver } from '@hookform/resolvers/zod'
import axiosInstance from "@/api/axiosInstance"
import { toast } from "sonner"
import { Spinner } from "@/components/ui/spinner"

const Login = () => {
  const [forgotPassword, setForgotPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const form = useForm<z.input<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: ""
    }
  });

  const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));
  const handleSubmit = async (value: z.infer<typeof LoginSchema>) => {
    try {
      setLoading(true)
      const { data } = await axiosInstance.post("/auth/login", value);
      localStorage.setItem("accessToken", data.accessToken);
      toast.success("Successfully");
      await sleep(1000);
      navigate("/");
    } catch (error) {
      console.log(error);
      toast.error("Email or password error");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (localStorage.getItem("accessToken")) {
      navigate("/");
    }
  }, [navigate]);


  return (
    <div className="flex flex-col items-center justify-center w-full pt-24">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle>Login to your account</CardTitle>
          <CardDescription>Enter your email below to login to your account</CardDescription>
          <CardAction>
            <Button variant="link">
              <Link to={"/register"}>Sign Up</Link>
            </Button>
          </CardAction>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(handleSubmit)}>
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
                            placeholder="m@example.com"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="grid gap-2">
                  <div className="flex items-center justify-between gap-3">
                    <Button type="submit" onClick={() => setForgotPassword(true)} variant={'link'} size={'sm'}>
                      Forgot Password?
                    </Button>
                  </div>
                  <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input id="password" type="password" placeholder="xxxxxxxx" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <ForgotPasswordDialog forgotPassword={forgotPassword} setForgotPassword={setForgotPassword} />
                </div>
              </div>
              <div className="grid gap-2 pt-4">
                <Button type="submit" className="w-full">
                  {loading ? <p className="flex items-center gap-2">
                    <Spinner />
                    Loading...</p> : "Login"}
                </Button>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  )
}

export default Login