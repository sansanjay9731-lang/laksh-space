import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { useToast } from '../hooks/use-toast';
import { Phone, Mail, MapPin } from 'lucide-react';

const ContactPage = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    });
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-[#1A1E5E] mb-12 text-center">Contact Us</h1>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-semibold text-[#1A1E5E] mb-6">Get in Touch</h2>
            <p className="text-gray-700 mb-8">
              Have questions about our office spaces? We're here to help. Reach out to us and we'll 
              respond as soon as possible.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <Phone className="w-6 h-6 text-[#FF6B35] mt-1" />
                <div>
                  <h3 className="font-semibold text-[#1A1E5E] mb-1">Phone</h3>
                  <p className="text-gray-700">+91 9972235566</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <Mail className="w-6 h-6 text-[#FF6B35] mt-1" />
                <div>
                  <h3 className="font-semibold text-[#1A1E5E] mb-1">Email</h3>
                  <p className="text-gray-700">lakshspaceblr@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <MapPin className="w-6 h-6 text-[#FF6B35] mt-1" />
                <div>
                  <h3 className="font-semibold text-[#1A1E5E] mb-1">Location</h3>
                  <p className="text-gray-700">Bangalore, Karnataka, India</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-50 p-8 rounded-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-[#1A1E5E] mb-2">
                  Name *
                </label>
                <Input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  placeholder="Your name"
                  className="w-full"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-[#1A1E5E] mb-2">
                  Email *
                </label>
                <Input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  placeholder="your@email.com"
                  className="w-full"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-[#1A1E5E] mb-2">
                  Phone
                </label>
                <Input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  placeholder="+91 XXXXXXXXXX"
                  className="w-full"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-[#1A1E5E] mb-2">
                  Message *
                </label>
                <Textarea
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  placeholder="Tell us about your requirements..."
                  rows={5}
                  className="w-full"
                />
              </div>
              
              <Button 
                type="submit"
                className="w-full bg-[#FF6B35] hover:bg-[#FF5722] text-white"
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactPage;