import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Calendar, Users, Building, Briefcase, Home, Presentation } from 'lucide-react';
import { mockOfficeSpaces } from '../data/mockData';

const SolutionsPage = () => {
  const solutionCategories = [
    {
      icon: Home,
      title: 'Office Space',
      description: 'From a single desk to a whole building. The choice is yours.',
      offerings: [
        { name: 'Private Offices', desc: 'Ready-to-use offices for teams of any size' },
        { name: 'Custom Offices', desc: 'Customized space with furniture and branding' },
        { name: 'Day Offices', desc: 'Professional space by the hour or day' }
      ]
    },
    {
      icon: Users,
      title: 'Meeting Rooms',
      description: 'Professional spaces for collaboration, training, and presentations.',
      offerings: [
        { name: 'Meeting Rooms', desc: 'Perfect for client meetings and interviews' },
        { name: 'Training Rooms', desc: 'Equipped spaces for workshops' },
        { name: 'Boardrooms', desc: 'Executive meeting spaces' }
      ]
    },
    {
      icon: Briefcase,
      title: 'Flexible Solutions',
      description: 'Adaptable workspace options for modern businesses.',
      offerings: [
        { name: 'Single Seater', desc: 'Individual private workspace' },
        { name: '2 Seater Cabin', desc: 'Perfect for partnerships' },
        { name: '6 Seater Cabin', desc: 'Team collaboration space' }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl lg:text-6xl font-bold text-black mb-6 font-aller">
              Workspace <span className="text-[#e30613]">Solutions</span>
            </h1>
            <p className="text-xl text-[#807f83] font-aller">
              Flexible, fully-equipped workspaces designed for professionals, teams, and businesses of all sizes in RT Nagar, Bangalore.
            </p>
          </div>
        </div>
      </div>

      {/* Solutions Categories */}
      <div className="bg-[#f5f5f5] py-20">
        <div className="max-w-7xl mx-auto px-4">
          {solutionCategories.map((category, index) => (
            <div key={index} className="mb-20 last:mb-0">
              <div className="flex items-center space-x-4 mb-8">
                <category.icon className="w-12 h-12 text-[#e30613]" strokeWidth={1.5} />
                <div>
                  <h2 className="text-4xl font-bold text-black font-aller">{category.title}</h2>
                  <p className="text-lg text-[#807f83] font-aller mt-2">{category.description}</p>
                </div>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6">
                {category.offerings.map((offering, i) => (
                  <Card key={i} className="bg-white border-0 shadow-md hover:shadow-xl transition-all">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold text-black mb-3 font-aller">{offering.name}</h3>
                      <p className="text-[#807f83] mb-6 font-aller">{offering.desc}</p>
                      <Button className="w-full bg-[#e30613] hover:bg-[#c1050f] text-white font-bold">
                        Get a Quote
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* All Available Spaces */}
      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-black mb-4 font-aller">
              Available Workspace Options
            </h2>
            <p className="text-xl text-[#807f83] font-aller">
              Choose the perfect space for your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mockOfficeSpaces.map((space) => (
              <Card key={space.id} className="overflow-hidden hover:shadow-2xl transition-all duration-300 group bg-white border-0">
                <div className="relative overflow-hidden h-64">
                  <img
                    src={space.image}
                    alt={space.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {space.available && (
                    <div className="absolute top-4 right-4 bg-[#46c1be] text-white px-3 py-1 rounded-sm text-sm font-bold">
                      Available
                    </div>
                  )}
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold text-black mb-3 font-aller">{space.title}</h3>
                  <p className="text-[#807f83] mb-6 font-aller">{space.description}</p>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center text-[#807f83]">
                      <Users className="w-4 h-4 mr-2 text-[#46c1be]" strokeWidth={2} />
                      <span className="text-sm font-aller">{space.capacity}</span>
                    </div>
                    <div className="flex items-center text-[#807f83]">
                      <Calendar className="w-4 h-4 mr-2 text-[#46c1be]" strokeWidth={2} />
                      <span className="text-sm font-aller">{space.term}</span>
                    </div>
                    <div className="flex items-center text-[#807f83]">
                      <Building className="w-4 h-4 mr-2 text-[#46c1be]" strokeWidth={2} />
                      <span className="text-sm font-aller">{space.units} unit(s) available</span>
                    </div>
                  </div>
                  
                  <div className="flex space-x-3">
                    <Button className="flex-1 bg-[#e30613] hover:bg-[#c1050f] text-white font-bold">
                      Get a Quote
                    </Button>
                    <Button variant="outline" className="flex-1 border-2 border-black text-black hover:bg-black hover:text-white font-bold">
                      Learn More
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-black text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 font-aller">Ready to Get Started?</h2>
          <p className="text-xl text-[#adb0b2] mb-8 font-aller">
            Talk to our experts and find the perfect workspace solution for your business.
          </p>
          <div className="flex justify-center space-x-4">
            <Button className="bg-[#e30613] hover:bg-[#c1050f] text-white font-bold px-8 py-6 text-lg">
              Get a Quote
            </Button>
            <Button variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-black font-bold px-8 py-6 text-lg">
              Contact Us
            </Button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default SolutionsPage;