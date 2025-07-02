import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin, Phone, Mail, Users, Trophy, Target } from 'lucide-react';
import { AppLayout } from '@/components/AppLayout';

const AboutUs = () => {
  const leaders = [
    {
      name: "Dr. Rajesh Kumar",
      position: "President",
      experience: "15+ years in Table Tennis",
      achievements: "Former National Champion"
    },
    {
      name: "Ms. Priya Sharma",
      position: "Vice President",
      experience: "12+ years in Sports Management",
      achievements: "Olympic Coach Certification"
    },
    {
      name: "Mr. Arjun Patel",
      position: "Secretary",
      experience: "10+ years in Administration",
      achievements: "Sports Management Degree"
    }
  ];

  const offices = [
    {
      city: "Bangalore",
      address: "123 Sports Complex, MG Road, Bangalore - 560001",
      phone: "+91 80 2345 6789",
      email: "bangalore@ktta.org"
    },
    {
      city: "Mumbai",
      address: "456 Athletic Center, Bandra West, Mumbai - 400050",
      phone: "+91 22 2345 6789",
      email: "mumbai@ktta.org"
    },
    {
      city: "Delhi",
      address: "789 Sports Hub, Connaught Place, New Delhi - 110001",
      phone: "+91 11 2345 6789",
      email: "delhi@ktta.org"
    }
  ];

  return (
    <AppLayout>
      <div className="container mx-auto px-4 py-8">
        {/* About Us Section */}
        <section className="mb-12">
          <h1 className="text-4xl font-bold text-[#291F4D] mb-8 text-center">
            About KTTA
          </h1>
          <Card className="bg-white/80 backdrop-blur-sm border-purple-200">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-2xl font-semibold text-[#291F4D] mb-4">
                    Our Mission
                  </h2>
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    Karnataka Table Tennis Association (KTTA) is dedicated to promoting and developing table tennis across Karnataka. We strive to create opportunities for players of all levels to compete, learn, and excel in the sport.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <Badge className="bg-[#291F4D] text-white">
                      <Trophy className="h-4 w-4 mr-1" />
                      Excellence
                    </Badge>
                    <Badge className="bg-pink-500 text-white">
                      <Users className="h-4 w-4 mr-1" />
                      Community
                    </Badge>
                    <Badge className="bg-purple-500 text-white">
                      <Target className="h-4 w-4 mr-1" />
                      Development
                    </Badge>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-[#291F4D] to-pink-500 p-6 rounded-lg text-white">
                  <h3 className="text-xl font-semibold mb-4">Our Vision</h3>
                  <p className="leading-relaxed">
                    To establish Karnataka as a leading state in Indian table tennis, nurturing talent from grassroots to international level while maintaining the highest standards of sportsmanship and integrity.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Leadership Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-[#291F4D] mb-8 text-center">
            Leadership Team
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {leaders.map((leader, index) => (
              <Card key={index} className="bg-white/80 backdrop-blur-sm border-purple-200 hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-[#291F4D] to-pink-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Users className="h-10 w-10 text-white" />
                  </div>
                  <CardTitle className="text-[#291F4D]">{leader.name}</CardTitle>
                  <Badge className="bg-pink-500 text-white w-fit mx-auto">
                    {leader.position}
                  </Badge>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-sm text-gray-600 mb-2">{leader.experience}</p>
                  <p className="text-sm font-medium text-[#291F4D]">{leader.achievements}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Organization Details Section */}
        <section>
          <h2 className="text-3xl font-bold text-[#291F4D] mb-8 text-center">
            Our Offices
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {offices.map((office, index) => (
              <Card key={index} className="bg-white/80 backdrop-blur-sm border-purple-200">
                <CardHeader>
                  <CardTitle className="text-[#291F4D] flex items-center">
                    <MapPin className="h-5 w-5 mr-2" />
                    {office.city}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-sm text-gray-700">{office.address}</p>
                  <div className="flex items-center text-sm text-gray-600">
                    <Phone className="h-4 w-4 mr-2" />
                    {office.phone}
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Mail className="h-4 w-4 mr-2" />
                    {office.email}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </AppLayout>
  );
};

export default AboutUs;