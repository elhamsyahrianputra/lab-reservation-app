import Image from "next/image";
import Link from "next/link";
import InputText from "@/components/form/Input";
import Button from "@/components/ui/Button";

export default function Page() {
  return (
    <div className="flex lg:h-dvh">
      <div className="hidden max-w-120 flex-1 flex-col items-center justify-center bg-gradient-to-br from-white to-grey-200 lg:flex">
        <div className="flex flex-col gap-4 text-center">
          <h1 className="font-bold text-3xl text-grey-800">Manage the job</h1>
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
            Get started absolutely free
          </h2>
          <span className="text-grey-500 text-sm">
            Already have an account?
            <Link
              className="inline-block pl-1 font-semibold text-primary hover:underline"
              href="/login"
            >
              Login
            </Link>
          </span>
        </div>
        <div>
          <form action="" className="mt-10 flex flex-col gap-6">
            <div className="grid grid-cols-2 justify-between gap-x-4">
              <InputText label="First Name" />
              <InputText label="Last Name" />
            </div>
            <InputText label="Email Address" placeholder="example@gmail.com" />

            <div className="flex flex-col gap-3">
              <InputText
                label="Password"
                placeholder="8+ Characters"
                type="password"
              />
            </div>

            <Button color="dark">Create an Account</Button>
          </form>
        </div>
      </div>
    </div>
  );
}
