"use client"

import Image from "next/image"
import { useState } from 'react';

import Link from "next/link"
import { Button } from "@/app/components/Button"
import { Input } from "@/app/components/Input"
import { Checkbox } from "@/app/components/Checkbox"

import { Eye, EyeOff } from "lucide-react"

import logo from "@/app/images/jobHuntly-icon.png"
import google from "@/app/images/google.svg"
import bgImage from "@/app/images/bg-image-login.png"
import avatar from "@/app/images/login-avatar.png"

export default function Register() {

  const [showPassword, setShowPassword] = useState(false)

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)

  }

  return (
    <div className=" min-h-screen bg-white flex flex-col lg:flex-row relative">
      {/* Background Image */}
      

      {/* Left Section */}
      
      <div className="relative z-10 lg:w-1/2 p-24 flex flex-col bg-[#F8F8FD]">
      <div className="absolute inset-0 z-0 left-60 top-24">
        <Image
          src={bgImage}
          alt="Background"
          width = {365}
          objectFit="cover"
          quality={100}
          priority
        />
      </div>
        <div className="flex items-center mb-8 gap-2">
          <Image src = {logo} alt="" height={25}/>
          <Link href = "/" className="text-xl font-semibold font-red-hat">JobHuntly</Link>
        </div>
        <div className="mb-8">
          <div className="text-4xl font-bold">100K+</div>
          <div className="text-gray-500">People got hired</div>
        </div>
        <div className="relative flex-grow mt-auto">
          <div className="absolute bottom-4 left-4 bg-white p-4 rounded-lg shadow-lg max-w-xs">
            <div className="flex items-center mb-2">
              <Image
                src= {avatar}
                alt="Adam Sandler"
                width={40}
                height={40}
                className="rounded-full mr-2"
              />
              <div>
                <div className="font-semibold">Adam Sandler</div>
                <div className="text-sm text-gray-500">Lead Engineer at Canva</div>
              </div>
            </div>
            <p className="text-sm">
              "Great platform for the job seeker that searching for new career heights."
            </p>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full lg:w-1/2 flex flex-col p-10 justify-center">
        <div className="flex justify-center mb-8">
          <Button variant="ghost" className="mr-2 font-epilogue font-bold text-[#4640DE]  hover:bg-[#E9EBFD]">Job Seeker</Button>
          <Button variant="ghost" className="px-4 font-epilogue font-bold text-[#4640DE]  hover:bg-[#E9EBFD]">Company</Button>
        </div>
        <div className="max-w-md mx-auto w-full items-center">
          <h1 className="text-3xl font-extrabold mb-8 font-clash-display flex justify-center">Get more opportunities!</h1>
          <Button 
            variant="outline" 
            className="w-full mb-4 bg-white font-clash-display font-bold text-[#4640DE] 
                      hover:border-[#4640DE] hover:text-[#4640DE] transition-colors duration-300"
          >
            <Image
              src={google}
              alt="Google logo"
              width={20}
              height={20}
              className="mr-2"
            />
            Signup with Google
          </Button>

          <div className="text-center text-gray-500 mb-4">Or signup with email</div>
          <form>
            <div className="mb-4">
                <label htmlFor="fullname" className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name
                </label>
                <Input id="fullname" type="fullname" placeholder="Enter your fullname" className="bg-white"/>
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <Input id="email" type="email" placeholder="Enter email address" className="bg-white"/>
            </div>
            <div className="space-y-2">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <div className="relative ">
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Enter password"
                className="bg-white pr-10"
              />
              <Button
                type="button"
                variant="ghost"
                size="icon"
                className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                onClick={togglePasswordVisibility}
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? (
                  <EyeOff className="h-4 w-4 text-gray-500" />
                ) : (
                  <Eye className="h-4 w-4 text-gray-500" />
                )}
              </Button>
            </div>
          </div>
            <div className="flex items-center my-4">
              <Checkbox id="remember" />
              <label htmlFor="remember" className="ml-2 text-sm text-gray-600">
                Remember me
              </label>
            </div>
            <Button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white">
              Continue
            </Button>
          </form>
          <p className="text-center mt-4 text-sm text-gray-600">
            Already have an account?{" "}
            <Link href="/login" className="text-indigo-600 hover:underline font-bold">
              Login
            </Link>
          </p>
          <p className="text-center mt-4 text-sm text-gray-600">
            By clicking 'Continue', you acknowledge that you have read and accept {'  '}
            <Link href="/terms-of-service" className="text-blue-600 hover:underline">
               Terms of Service
            </Link>
            {'  '} {/* This adds a space */}
            and
            {'  '} {/* This adds a space */}
            <Link href="/privacy-policy" className="text-blue-600 hover:underline">
               Privacy Policy.
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}