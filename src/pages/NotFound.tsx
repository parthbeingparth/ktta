import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Home, ArrowLeft, Trophy } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header onMenuClick={() => {}} />
      
      <div className="bg-gradient-to-br from-slate-900 via-blue-900 to-cyan-900 min-h-screen flex items-center justify-center p-4">
        <div className="max-w-md w-full text-center">
          <Link to="/" className="inline-flex items-center text-white hover:text-cyan-400 mb-8 transition-colors">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Link>

          <Card className="shadow-2xl border-0">
            <CardContent className="p-8">
              <div className="bg-cyan-100 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                <Trophy className="h-10 w-10 text-cyan-600" />
              </div>
              
              <h1 className="text-6xl font-bold text-slate-800 mb-4">404</h1>
              <h2 className="text-2xl font-semibold text-slate-700 mb-4">Page Not Found</h2>
              <p className="text-slate-600 mb-8">
                The page you're looking for doesn't exist or has been moved.
              </p>
              
              <div className="space-y-4">
                <Link to="/" className="block">
                  <Button className="w-full bg-gradient-to-r from-cyan-600 to-blue-700 hover:from-cyan-700 hover:to-blue-800">
                    <Home className="h-4 w-4 mr-2" />
                    Go to Homepage
                  </Button>
                </Link>
                
                <div className="text-sm text-slate-500">
                  <p>Return to KTTA portal</p>
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

export default NotFound;