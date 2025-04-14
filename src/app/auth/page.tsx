"use client"

import { useState, useEffect } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { FcGoogle } from "react-icons/fc"
import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { signIn, signUp } from "@/lib/auth-client"
import { toast } from "sonner"

const signUpSchema = z.object({
  first_name: z.string({ message: "First name should be entered as text characters" }).min(1, { message: "First name is required" }),
  last_name: z.string({ message: "Last name should be entered as text characters" }).min(1, { message: "Last name is required" }),
  email: z.string().email({ message: "Please provide a valid email address" }).min(1, { message: "Email is required" }),
  password: z.string().min(8, "Password should be of minimum 8 characters").max(16, "Password should be of maximum 16 characters"),
  cfnPassword: z.string().min(1, { message: "Confirm Password is required" }),
}).refine(data => data.password === data.cfnPassword, {
  path: ["cfnPassword"],
  message: "Password and confirm password should match",
})

const signInSchema = z.object({
  email: z.string().email({ message: "Please provide a valid email address" }).min(1, { message: "Email is required" }),
  password: z.string().min(8, "Password should be of minimum 8 characters").max(16, "Password should be of maximum 16 characters"),
})

type SignUpSchemaType = z.infer<typeof signUpSchema>

type SignInSchemaType = z.infer<typeof signInSchema>

export default function AuthPage() {
  const searchParams = useSearchParams()
  const [activeTab, setActiveTab] = useState("login")
  const [isLoading, setIsLoading] = useState(false)

  const router = useRouter()


  const handleGoogleAuth = async (provider: "google") => {
    console.log("here")
    await signIn.social({ provider: provider, callbackURL: "/dashboard" })
  }

  const signUpForm = useForm<SignUpSchemaType>({ resolver: zodResolver(signUpSchema) })

  const signInForm = useForm<SignInSchemaType>({ resolver: zodResolver(signInSchema) })

  const onSignUp = async ({ first_name, last_name, email, password }: SignUpSchemaType) => {
    await signUp.email({
      name: `${first_name} ${last_name}`,
      email: email,
      password: password,
    }, {
      onRequest: () => {
        setIsLoading(true)
      },
      onSuccess: () => {
        setIsLoading(false)
        toast("You successfully signed up")
        router.push("/dashboard")
      },
      onError: (ctx) => {
        setIsLoading(false)
        toast(ctx.error.message)
      }
    })
  }

  const onSignIn = async ({ email, password }: SignInSchemaType) => {
    await signIn.email({
      email,
      password
    }, {
      onRequest: () => {
        setIsLoading(true)
      },
      onSuccess: () => {
        setIsLoading(false)
        toast("You successfully signed in")
        router.push("/dashboard")
      },
      onError: (ctx) => {
        setIsLoading(false)
        toast(ctx.error.message)
      }
    })
  }

  return (
    <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center bg-gray-50 px-4 py-12">
      <Card className="w-full max-w-md">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="login">Log In</TabsTrigger>
            <TabsTrigger value="signup">Sign Up</TabsTrigger>
          </TabsList>

          <TabsContent value="login">
            <CardHeader className='py-4' >
              <CardTitle>Welcome back</CardTitle>
              <CardDescription>Log in to your account to continue</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <form onSubmit={signInForm.handleSubmit(onSignIn)}>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="name@example.com" {...signInForm.register("email")} />
                  <p className="text-red-500 text-sm">{signInForm.formState.errors.email?.message}</p>{" "}
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="password">Password</Label>
                    <Link href="/forgot-password" className="text-sm text-blue-600 hover:underline">
                      Forgot password?
                    </Link>
                  </div>
                  <Input id="password" type="password" {...signInForm.register("password")} />
                  <p className="text-red-500 text-sm">{signInForm.formState.errors.password?.message}</p>{" "}
                </div>
                <Button type="submit" className="w-full">Log in</Button>

              </form>
              <div className="relative my-4">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-200"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="bg-white px-2 text-gray-500">Or continue with</span>
                </div>
              </div>
              <Button variant="outline" className="w-full" onClick={() => handleGoogleAuth("google")}>
                <FcGoogle />
                Sign In With Google
              </Button>
            </CardContent>
          </TabsContent>

          <TabsContent value="signup">
            <CardHeader  className='py-4'  >
              <CardTitle>Create an account</CardTitle>
              <CardDescription>Sign up to get started with ResumeAI</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <form onSubmit={signUpForm.handleSubmit(onSignUp)}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First name</Label>
                    <Input id="firstName" {...signUpForm.register("first_name")} />
                    <p className="text-red-500 text-sm">{signUpForm.formState.errors.first_name?.message}</p>{" "}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last name</Label>
                    <Input id="lastName" {...signUpForm.register("last_name")} />
                    <p className="text-red-500 text-sm">{signUpForm.formState.errors.last_name?.message}</p>{" "}
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="name@example.com" {...signUpForm.register("email")} />
                  <p className="text-red-500 text-sm">{signUpForm.formState.errors.email?.message}</p>{" "}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input id="password" type="password" {...signUpForm.register("password")} />
                  <p className="text-red-500 text-sm">{signUpForm.formState.errors.password?.message}</p>{" "}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="confirmPassword">Confirm password</Label>
                  <Input id="confirmPassword" type="password" {...signUpForm.register("cfnPassword")} />
                  <p className="text-red-500 text-sm">{signUpForm.formState.errors.cfnPassword?.message}</p>{" "}
                </div>
                <Button type="submit" className="w-full">Sign up</Button>
              </form>
              <div className="relative my-4">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-200"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="bg-white px-2 text-gray-500">Or continue with</span>
                </div>
              </div>
              <Button variant="outline" className="w-full" onClick={() => handleGoogleAuth("google")}>
                <FcGoogle />
                Sign Up With Google
              </Button>
            </CardContent>
            <CardFooter className="flex justify-center py-2">
              <p className="text-sm text-gray-500">
                By signing up, you agree to our{" "}
                <Link href="/terms" className="text-blue-600 hover:underline">
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link href="/privacy" className="text-blue-600 hover:underline">
                  Privacy Policy
                </Link>
              </p>
            </CardFooter>
          </TabsContent>
        </Tabs>
      </Card>
    </div>
  )
}
