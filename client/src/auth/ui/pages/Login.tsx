import { Button } from "@/components/ui/button"
import { Card, CardAction, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useState } from "react"
import ForgotPasswordDialog from "../components/ForgotPasswordDialog"
import { Link } from "react-router-dom"

const Login = () => {
  const [forgotPassword, setForgotPassword] = useState(false);
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
          <form>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center justify-between gap-3">
                  <Label htmlFor="password">Password</Label>
                  <Button onClick={() => setForgotPassword(true)} variant={'link'} size={'sm'}>
                    Forgot Password?
                  </Button>
                </div>
                <Input id="password" type="password" required />
                <ForgotPasswordDialog forgotPassword={forgotPassword} setForgotPassword={setForgotPassword} />
              </div>
            </div>
            <div className="grid gap-2 pt-4">
              <Button type="submit" className="w-full">
                Login
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}

export default Login