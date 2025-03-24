import React from "react";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const LoginCard: React.FC = () => {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <h2 className="text-lg font-semibold">Login</h2>
        <p className="text-sm text-muted-foreground">
          Enter your credentials to access your account.
        </p>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="grid gap-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="Enter your email" />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            type="password"
            placeholder="Enter your password"
          />
        </div>
      </CardContent>
      <CardFooter>
        <Button>Login</Button>
      </CardFooter>
    </Card>
  );
};

export default LoginCard;
