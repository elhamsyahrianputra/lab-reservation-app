"use client";

import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import { type FormEvent, useState } from "react";
import InputText from "@/components/form/Input";
import Button from "@/components/ui/Button";

export default function Page() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    const response = await fetch("http://localhost:3001/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const user = await response.json();

    if (response.ok) {
      localStorage.setItem("auth_token", user.data.auth_token);
      redirect("/dashboard");
    } else {
      console.log(user.message);
    }
  }

  return (
    <div className="flex lg:h-dvh">
      <div className="hidden max-w-120 flex-1 flex-col items-center justify-center bg-gradient-to-br from-white to-grey-200 lg:flex">
        <div className="flex flex-col gap-4 text-center">
          <h1 className="font-bold text-3xl text-grey-800">Hi, Welcome Back</h1>
          <p className="text-grey-600">
            More effectively with optimized workflows.
          </p>
        </div>
        <div className="relative aspect-video h-auto w-full">
          <Image
            src="/img/illustration/login-illustration.png"
            layout="fill"
            alt="Login Illustration"
            className="object-contain"
          />
        </div>
      </div>
      <div className="mx-auto flex max-w-md flex-1 flex-col justify-center px-4 pt-6 pb-20 xl:max-w-xl 2xl:max-w-2xl">
        <div className="flex flex-col gap-3 text-center lg:text-left">
          <h2 className="md: font-bold text-lg leading-6 md:text-xl">
            Sign in to your account
          </h2>
          <span className="text-grey-500 text-sm">
            Don't have an account?
            <Link
              className="inline-block pl-1 font-semibold text-primary hover:underline"
              href="/signup"
            >
              Signup
            </Link>
          </span>
        </div>

        <div>
          <form onSubmit={handleSubmit} className="mt-10 flex flex-col gap-6">
            <InputText
              label="Email Address"
              placeholder="example@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <div className="flex flex-col gap-3">
              <Link href="#" className="self-end text-sm">
                Forgot password?
              </Link>
              <InputText
                label="Password"
                placeholder="8+ Characters"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <Button type="submit" color="dark">
              Login
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
