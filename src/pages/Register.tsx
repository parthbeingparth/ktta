import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";
import { Link } from "react-router-dom";
import { User, Mail, Lock, Phone, MapPin, Calendar, ArrowLeft } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    dateOfBirth: "",
    gender: "",
    city: "",
    password: "",
    confirmPassword: "",
    agreeTerms: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Registration attempt:", formData);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header onMenuClick={() => {}} />
      
      <div className="bg-gradient-to-br from-[#291F4D] via-purple-800 to-pink-900 min-h-screen flex items-center justify-center p-4">
        <div className="w-full max-w-2xl">
          <Link to="/" className="inline-flex items-center text-white hover:text-pink-400 mb-6 transition-colors">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Link>

          <div className="text-center mb-8">
            <div className="bg-white rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center shadow-lg">
              <img 
                src="https://d64gsuwffb70l.cloudfront.net/685711070e2c0775c3004176_1751354157593_be944c26.png" 
                alt="KTTA Logo" 
                className="h-12 w-auto"
              />
            </div>
            <h1 className="text-3xl font-bold text-white mb-2">Join KTTA</h1>
            <p className="text-pink-100">Create your player account</p>
          </div>

          <Card className="shadow-2xl border-0">
            <CardHeader className="space-y-1">
              <CardTitle className="text-2xl font-bold text-center text-slate-800">
                Player Registration
              </CardTitle>
              <p className="text-center text-slate-600">
                Fill in your details to create an account
              </p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-4 w-4" />
                      <Input
                        id="firstName"
                        placeholder="First name"
                        value={formData.firstName}
                        onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                        className="pl-10"
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input
                      id="lastName"
                      placeholder="Last name"
                      value={formData.lastName}
                      onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-4 w-4" />
                    <Input
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="pl-10"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-4 w-4" />
                      <Input
                        id="password"
                        type="password"
                        placeholder="Create password"
                        value={formData.password}
                        onChange={(e) => setFormData({...formData, password: e.target.value})}
                        className="pl-10"
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="confirmPassword">Confirm Password</Label>
                    <Input
                      id="confirmPassword"
                      type="password"
                      placeholder="Confirm password"
                      value={formData.confirmPassword}
                      onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
                      required
                    />
                  </div>
                </div>

                <div className="flex items-start space-x-2">
                  <Checkbox
                    id="terms"
                    checked={formData.agreeTerms}
                    onCheckedChange={(checked) => setFormData({...formData, agreeTerms: checked as boolean})}
                    required
                  />
                  <Label htmlFor="terms" className="text-sm text-slate-600 leading-relaxed">
                    I agree to the Terms of Service and Privacy Policy
                  </Label>
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-pink-600 to-purple-700 hover:from-pink-700 hover:to-purple-800"
                  disabled={!formData.agreeTerms}
                >
                  Create Account
                </Button>
              </form>

              <div className="text-center mt-6">
                <p className="text-sm text-slate-600">
                  Already have an account?{" "}
                  <Link to="/login" className="text-pink-600 hover:text-pink-800 font-medium">
                    Sign in here
                  </Link>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Register;