"use client";
import { Button } from "../../_components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardFooter,
} from "../../_components/ui/card";
import React from "react";
import Image from "next/image";
export default function LoginForm() {
  
  return (
    <Card className="w-96 items-center justify-center gap-3">
      <CardHeader className="space-y-1.5">
        <CardTitle className="text-2xl">Login</CardTitle>
      </CardHeader>
      <CardFooter>
        <Button variant="outline" className="gap-2">
          <Image
            src="/google-logo.svg"
            width={20}
            height={20}
            alt="Fazer login com o Google"
          />
          <span className="ml-2">Entrar com o Google</span>
        </Button>
        <Button variant="outline" className="gap-2">
          <Image
            src="/apple-logo.svg"
            width={20}
            height={20}
            alt="Fazer login com o Google"
          />
          <span className="ml-2">Entrar com a Apple</span>
        </Button>
      </CardFooter>
    </Card>
  );
}
