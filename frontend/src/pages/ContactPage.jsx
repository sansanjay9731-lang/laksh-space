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
      <div className="max-w-7xl mx-auto px-4 py-12 lg:py-20">
        <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-black mb-12 lg:mb-16 text-center font-aller">Contact Us</h1>
        
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          <div>
            <h2 className="text-2xl lg:text-3xl font-bold text-black mb-4 lg:mb-6 font-aller">Get in Touch</h2>
            <p className="text-[#807f83] mb-8 lg:mb-10 font-aller text-base lg:text-lg">
              Have questions about our office spaces? We're here to help. Reach out to us and we'll 
              respond as soon as possible.
            </p>
            
            <div className="space-y-6 lg:space-y-8">
              <div className="flex items-start space-x-4">
                <Phone className="w-6 h-6 lg:w-7 lg:h-7 text-[#e30613] mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-black mb-2 font-aller">Phone</h3>
                  <a href="tel:+919972235566" className="text-[#807f83] font-aller hover:text-[#e30613] transition-colors">+91 9972235566</a>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <Mail className="w-6 h-6 lg:w-7 lg:h-7 text-[#e30613] mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-black mb-2 font-aller">Email</h3>
                  <a href="mailto:lakshspaceblr@gmail.com" className="text-[#807f83] font-aller hover:text-[#e30613] transition-colors break-all">lakshspaceblr@gmail.com</a>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <MapPin className="w-6 h-6 lg:w-7 lg:h-7 text-[#e30613] mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-black mb-2 font-aller">Location</h3>
                  <p className="text-[#807f83] font-aller">RT Nagar, Bangalore, Karnataka, India</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-[#f5f5f5] p-6 lg:p-10 rounded-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-bold text-black mb-2 font-aller">
                  Name *
                </label>
                <Input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  placeholder="Your name"
                  className="w-full border-gray-300"
                />
              </div>
              
              <div>
                <label className="block text-sm font-bold text-black mb-2 font-aller">
                  Email *
                </label>
                <Input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  placeholder="your@email.com"
                  className="w-full border-gray-300"
                />
              </div>
              
              <div>
                <label className="block text-sm font-bold text-black mb-2 font-aller">
                  Phone
                </label>
                <Input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  placeholder="+91 XXXXXXXXXX"
                  className="w-full border-gray-300"
                />
              </div>
              
              <div>
                <label className="block text-sm font-bold text-black mb-2 font-aller">
                  Message *
                </label>
                <Textarea
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  placeholder="Tell us about your requirements..."
                  rows={5}
                  className="w-full border-gray-300"
                />
              </div>
              
              <Button 
                type="submit"
                className="w-full bg-[#e30613] hover:bg-[#c1050f] text-white font-bold py-5 lg:py-6 text-base"
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