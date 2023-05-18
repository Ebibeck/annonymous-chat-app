"use client";
import Image from "next/image";
import { Button } from "../../components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import { toast } from "../../components/ui/use-toast";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import {
  useSignInWithGoogle,
  useSignInWithEmailLink,
} from "react-firebase-hooks/auth";
import { auth } from "../../lib/firebase.config";
import Cliploader from "react-spinners/ClipLoader";

export default function SignInForm() {
  const { handleSubmit, register } = useForm();
  const [email, setEmail] = useState("");
  const [signWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const [signInWithEmailLink ] = useSignInWithEmailLink(auth);
  console.log(user);
  if(error) {
    return toast({
      title: "Check your email",
      description: "We sent you a login link. Be sure to check your spam too.",
    })
  }
  return (
    <Card className="flex flex-col items-center w-96 h-auto gap-y-1">
      <CardHeader className="flex flex-col items-center gap-y-1">
        <CardTitle className="text-xl text-gray-700 font-semibold">
          Create an account
        </CardTitle>
        <CardDescription className="font-semibold">
          Enter your email below to create your account
        </CardDescription>
      </CardHeader>
      <CardContent className="w-full">
        <form
          onSubmit={handleSubmit()}
          className="flex flex-col w-full items-center gap-y-3"
        >
          <Input
            type="email"
            {...register("email")}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="name@gmail.com"
            className="h-10 font-normal"
          />
          <Button
            type="submit"
            className="w-full"
            onClick={() => signInWithEmailLink(email, emailLink)}
          >
            Sign In with Email
          </Button>
          <p className="text-sm text-muted-foreground">~ OR CONTINUE WITH ~</p>
          <Button
            onClick={() => signWithGoogle()}
            variant="outline"
            className="w-full font-semibold gap-x-1 mt-3 bg-gray-100"
          >
            {loading ? (
              <Cliploader className="mr-2 animate-spin" size={17} />
            ) : (
              <Image width={13} height={13} src={"google.svg"} alt="" />
            )}
            <span>Google</span>
          </Button>
        </form>
      </CardContent>
      <CardFooter>
        <p className="text-center">
          By clicking continue, you agree to our
          <Link href={"#"} className="underline mx-1">
            Terms of Service
          </Link>
          and
          <Link href={"#"} className="underline mx-1">
            Privacy Policy.
          </Link>
        </p>
      </CardFooter>
    </Card>
  );
}
