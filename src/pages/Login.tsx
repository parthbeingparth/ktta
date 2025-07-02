import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Eye, EyeOff, User, Lock } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login attempt:", formData);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header onMenuClick={() => {}} />
      
      <div className="bg-gradient-to-br from-[#291F4D] via-purple-800 to-pink-900 min-h-screen flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          <Card className="shadow-2xl border-0">
            <CardHeader className="space-y-1">
              <CardTitle className="text-2xl font-bold text-center text-slate-800">
                Welcome Back
              </CardTitle>
              <p className="text-center text-slate-600">
                Sign in to your player account
              </p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-4 w-4" />
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="pl-10"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-4 w-4" />
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter your password"
                      value={formData.password}
                      onChange={(e) => setFormData({...formData, password: e.target.value})}
                      className="pl-10 pr-10"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-slate-600"
                    >
                      {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </button>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="remember"
                      checked={formData.rememberMe}
                      onCheckedChange={(checked) => setFormData({...formData, rememberMe: checked as boolean})}
                    />
                    <Label htmlFor="remember" className="text-sm text-slate-600">
                      Remember me
                    </Label>
                  </div>
                  <Link to="/forgot-password" className="text-sm text-pink-600 hover:text-pink-800">
                    Forgot password?
                  </Link>
                </div>

                <Button type="submit" className="w-full bg-gradient-to-r from-pink-600 to-purple-700 hover:from-pink-700 hover:to-purple-800">
                  Sign In
                </Button>
              </form>

              <Separator className="my-6" />

              <div className="text-center space-y-4">
                <p className="text-sm text-slate-600">
                  Don't have an account?{" "}
                  <Link to="/register" className="text-pink-600 hover:text-pink-800 font-medium">
                    Sign up here
                  </Link>
                </p>
                
                <div className="text-xs text-slate-500">
                  <p>For tournament registration and player portal access</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Login;