'use client'

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { signUpFormSchema } from "@/lib/formSchema"
import Link from "next/link"
import { useForm } from "react-hook-form"
import z from "zod"
import { zodResolver } from '@hookform/resolvers/zod'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useState } from "react"

const SignUpPage = () => {

    const [isLoading, setIsLoading] = useState(false);

   const form = useForm<z.infer<typeof signUpFormSchema>>({
		resolver: zodResolver(signUpFormSchema),
	});

    const onSubmit = async (val: z.infer<typeof signUpFormSchema>) => {}


  return (
 <div className="relative flex flex-col items-center justify-center min-h-screen bg-gray-50">
    <div className="absolute bg-white shadow-lg rounded-xl border border-gray-200 px-8 py-10 w-full max-w-md">
      {/* Header */}
      <div className="text-center mb-6">
        <div className="font-extrabold text-3xl text-gray-900">Sign Up</div>
        <p className="text-sm text-gray-500 mt-2">
          Enter your details to access the dashboard
        </p>
      </div>
  
      {/* Form */}
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-6"
        >
          {/* Name Field */}
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter your name"
                    {...field}
                    className="p-3 text-sm border-gray-300 rounded-lg"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
  
          {/* Email Field */}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter your email"
                    {...field}
                    className="p-3 text-sm border-gray-300 rounded-lg"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
  
          {/* Password Field */}
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    placeholder="Enter your password"
                    {...field}
                    className="p-3 text-sm border-gray-300 rounded-lg"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
  
          {/* Submit Button */}
          <Button
            className={`w-full py-3 rounded-lg text-sm font-medium transition ${
              isLoading ? "bg-primary-light text-gray-400 cursor-not-allowed" : "bg-primary hover:bg-primary-dark text-white"
            }`}
            disabled={isLoading}>
            {isLoading ? "Loading..." : "Sign Up"}
          </Button>
        </form>
      </Form>
  
      {/* Footer */}
      <div className="text-center text-sm mt-4 text-gray-500">
        Already have an account?{" "}
        <Link href="/auth/signin" className="text-primary font-medium hover:underline">
          Sign In
        </Link>

      </div>
    </div>
  </div>
  )
}

export default SignUpPage
