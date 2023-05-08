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
import Link from "next/link";

export default function SignInForm() {
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
        <form className="flex flex-col w-full items-center gap-y-3">
          <Input
            type="email"
            placeholder="name@gmail.com"
            className="h-10 font-normal"
          />
          <Button className="w-full">Sign In with Email</Button>
          <p className="text-sm text-muted-foreground">~ OR CONTINUE WITH ~</p>
          <Button
            variant="outline"
            className="w-full font-semibold gap-x-1 mt-3 bg-gray-100"
          >
            <Image width={13} height={13} src={"google.svg"} alt="" />
            <span>Google</span>
          </Button>
        </form>
      </CardContent>
      <CardFooter>
        <p className="text-center">
          By clicking continue, you agree to our 
          <Link href={"#"} className="underline">
            Terms of Service
          </Link>
          and
          <Link href={"#"} className="underline"> 
           Privacy Policy.
          </Link>
        </p>
      </CardFooter>
    </Card>
  );
}
