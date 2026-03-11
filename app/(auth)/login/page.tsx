"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Building2, Eye, EyeOff, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function LoginPage() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [form, setForm] = useState({
    email: "demo@nexcrm.com",
    password: "demo123",
  });
  const [error, setError] = useState("");

  const handleLogin = () => {
    setError("");

    // Basic validation
    if (!form.email || !form.password) {
      setError("Please fill in all fields.");
      return;
    }

    if (!form.email.includes("@")) {
      setError("Please enter a valid email address.");
      return;
    }

    if (form.password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }

    // Simulate loading then redirect
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      router.push("/dashboard");
    }, 1500);
  };

  return (
    <Card className="w-full max-w-md shadow-lg">
      {/* Logo + Title */}
      <CardHeader className="text-center space-y-3">
        <div className="flex items-center justify-center gap-2">
          <Building2 className="w-7 h-7 text-primary" />
          <span className="text-2xl font-bold">NexCRM</span>
        </div>
        <div>
          <CardTitle className="text-xl">Welcome back</CardTitle>
          <CardDescription>Sign in to your account to continue</CardDescription>
        </div>
      </CardHeader>

      {/* Form */}
      <CardContent className="flex flex-col gap-4">
        {/* Demo credentials hint */}
        <div className="bg-primary/5 border border-primary/20 rounded-lg px-4 py-3 flex flex-col gap-1">
          <p className="text-xs font-semibold text-primary">
            🔑 Demo Credentials
          </p>
          <p className="text-xs text-muted-foreground">
            Email:{" "}
            <span className="font-medium text-foreground">demo@nexcrm.com</span>
          </p>
          <p className="text-xs text-muted-foreground">
            Password:{" "}
            <span className="font-medium text-foreground">demo123</span>
          </p>
        </div>
        {/* Error message */}
        {error && (
          <div
            className="bg-red-50 border border-red-200 text-red-600 
            text-sm px-4 py-3 rounded-lg"
          >
            {error}
          </div>
        )}

        {/* Email field */}
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            placeholder="demo@nexcrm.com"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
        </div>

        {/* Password field */}
        <div className="flex flex-col gap-1.5">
          <div className="flex items-center justify-between">
            <Label htmlFor="password">Password</Label>
            <button className="text-xs text-primary hover:underline">
              Forgot password?
            </button>
          </div>
          <div className="relative">
            <Input
              id="password"
              type={showPassword ? "text" : "password"}
              placeholder="demo123"
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 
                text-muted-foreground hover:text-foreground"
            >
              {showPassword ? (
                <EyeOff className="w-4 h-4" />
              ) : (
                <Eye className="w-4 h-4" />
              )}
            </button>
          </div>
        </div>

        {/* Submit button */}
        <Button
          onClick={handleLogin}
          disabled={isLoading}
          className="w-full mt-2"
        >
          {isLoading ? (
            <>
              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
              Signing in...
            </>
          ) : (
            "Sign In"
          )}
        </Button>
      </CardContent>

      {/* Register link */}
      <CardFooter className="justify-center">
        <p className="text-sm text-muted-foreground">
          Don't have an account?{" "}
          <Link
            href="/register"
            className="text-primary font-medium hover:underline"
          >
            Create one
          </Link>
        </p>
      </CardFooter>
    </Card>
  );
}
