import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  CheckCircle2, 
  Droplets, 
  Wrench, 
  Pipette as Pipe, 
  Sun, 
  AlertCircle, 
  Hammer, 
  MessageCircle, 
  Menu, 
  X, 
  Star,
  ArrowRight,
  ChevronRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const SimakadePlumbing = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const services = [
    {
      title: "Residential Plumbing Repairs",
      description: "Quick and efficient repairs for all your household plumbing issues, from leaky taps to burst pipes.",
      icon: <Wrench className="w-8 h-8 text-primary" />
    },
    {
      title: "Pipe Installation & Maintenance",
      description: "Professional installation of new piping systems and regular maintenance to prevent future problems.",
      icon: <Pipe className="w-8 h-8 text-primary" />
    },
    {
      title: "Leak Detection & Fixing",
      description: "Advanced leak detection technology to find hidden leaks and fix them before they cause major damage.",
      icon: <Droplets className="w-8 h-8 text-primary" />
    },
    {
      title: "Solar Geyser Installation",
      description: "Energy-efficient solar geyser solutions to help you save on electricity costs while enjoying hot water.",
      icon: <Sun className="w-8 h-8 text-primary" />
    },
    {
      title: "Emergency Plumbing",
      description: "24/7 emergency services for those urgent plumbing crises that just can't wait.",
      icon: <AlertCircle className="w-8 h-8 text-primary" />
    },
    {
      title: "General Handyman Services",
      description: "Versatile handyman services for various home maintenance and repair tasks beyond plumbing.",
      icon: <Hammer className="w-8 h-8 text-primary" />
    }
  ];

  const whyChooseUs = [
    {
      title: "Experienced & Certified",
      description: "7+ years of hands-on experience with full trade certification.",
      icon: <CheckCircle2 className="w-6 h-6 text-green-500" />
    },
    {
      title: "Fast Response Time",
      description: "We understand plumbing emergencies and prioritize quick arrivals.",
      icon: <Clock className="w-6 h-6 text-green-500" />
    },
    {
      title: "Affordable Pricing",
      description: "Professional service at competitive rates with no hidden costs.",
      icon: <CheckCircle2 className="w-6 h-6 text-green-500" />
    },
    {
      title: "Quality Workmanship",
      description: "We take pride in our work and ensure every job is done right.",
      icon: <CheckCircle2 className="w-6 h-6 text-green-500" />
    }
  ];

  const testimonials = [
    {
      name: "Thabo Mokoena",
      role: "Homeowner in Braamfontein",
      content: "Simakade fixed a major leak in our kitchen that two other plumbers couldn't find. He was professional, fast, and very affordable. Highly recommended!",
      rating: 5
    },
    {
      name: "Sarah Jenkins",
      role: "Property Manager",
      content: "We use Simakade for all our rental properties in the CBD. He is reliable and always provides high-quality work. The solar geyser installation he did was top-notch.",
      rating: 5
    },
    {
      name: "Lindiwe Dlamini",
      role: "Small Business Owner",
      content: "Excellent service! Simakade responded quickly to our emergency call and had our shop's plumbing back in order in no time. A true professional.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-primary/20 selection:text-primary">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <div className="flex items-center gap-2">
              <div className="bg-primary p-2 rounded-lg">
                <Wrench className="text-white w-6 h-6" />
              </div>
              <span className="text-xl font-bold font-display tracking-tight text-gray-900">
                Simakade <span className="text-primary">Plumbing</span>
              </span>
            </div>
            
            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#services" className="text-gray-600 hover:text-primary font-medium transition-colors">Services</a>
              <a href="#about" className="text-gray-600 hover:text-primary font-medium transition-colors">About</a>
              <a href="#why-us" className="text-gray-600 hover:text-primary font-medium transition-colors">Why Us</a>
              <a href="#contact" className="bg-primary text-white px-6 py-2.5 rounded-full font-semibold hover:bg-primary-dark transition-all shadow-lg shadow-primary/20">
                Get a Quote
              </a>
            </div>

            {/* Mobile Nav Toggle */}
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 text-gray-600">
                {isMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-b border-gray-100 overflow-hidden"
            >
              <div className="px-4 pt-2 pb-6 space-y-2">
                <a href="#services" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 text-gray-600 font-medium">Services</a>
                <a href="#about" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 text-gray-600 font-medium">About</a>
                <a href="#why-us" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 text-gray-600 font-medium">Why Us</a>
                <a href="#contact" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 text-primary font-bold">Get a Quote</a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative py-20 lg:py-32 overflow-hidden bg-gradient-to-br from-blue-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-primary text-sm font-bold mb-6">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Certified Plumber in Johannesburg</span>
                </div>
                <h1 className="text-5xl lg:text-6xl font-extrabold font-display leading-tight text-gray-900 mb-6">
                  Reliable Plumbing Services in <span className="text-primary">Johannesburg CBD</span> You Can Trust
                </h1>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-lg">
                  Fast, affordable, and professional plumbing & handyman services for homes and businesses. 7+ years of expert experience.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a href="#contact" className="inline-flex items-center justify-center bg-primary text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-primary-dark transition-all shadow-xl shadow-primary/25 group">
                    Get a Free Quote
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                  <a href="tel:+27123456789" className="inline-flex items-center justify-center bg-white text-gray-900 border-2 border-gray-100 px-8 py-4 rounded-xl font-bold text-lg hover:border-primary hover:text-primary transition-all">
                    <Phone className="mr-2 w-5 h-5" />
                    Call Now
                  </a>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative hidden lg:block"
              >
                <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                  <img 
                    src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=1000" 
                    alt="Professional Plumbing Service" 
                    className="w-full h-auto"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                  <div className="absolute bottom-8 left-8 right-8 bg-white/90 backdrop-blur p-6 rounded-2xl shadow-lg">
                    <div className="flex items-center gap-4">
                      <div className="bg-green-100 p-3 rounded-full">
                        <Clock className="text-green-600 w-6 h-6" />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-gray-500 uppercase tracking-wider">Fast Response</p>
                        <p className="text-lg font-bold text-gray-900">Emergency Services 24/7</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
          {/* Background Decorations */}
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-4xl font-bold font-display text-gray-900 mb-4">Our Professional Services</h2>
              <p className="text-lg text-gray-600">Comprehensive plumbing and maintenance solutions tailored to your needs.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-8 rounded-2xl bg-white border border-gray-100 hover:border-primary/30 hover:shadow-xl transition-all group"
                >
                  <div className="mb-6 p-4 bg-blue-50 rounded-xl w-fit group-hover:bg-primary group-hover:text-white transition-colors">
                    {React.cloneElement(service.icon as React.ReactElement, { className: "w-8 h-8 transition-colors" })}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-24 bg-gray-50 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="relative rounded-3xl overflow-hidden shadow-xl">
                  <img 
                    src="https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&q=80&w=1000" 
                    alt="Simakade Ngcobo - Expert Plumber" 
                    className="w-full h-auto"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-primary text-white p-8 rounded-3xl shadow-2xl hidden sm:block">
                  <p className="text-4xl font-bold mb-1">7+</p>
                  <p className="text-sm font-medium opacity-90 uppercase tracking-widest">Years Experience</p>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl font-bold font-display text-gray-900 mb-6">Meet Simakade Ngcobo</h2>
                <p className="text-xl text-primary font-bold mb-4">Certified Plumber & Handyman Expert</p>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  With over 7 years of hands-on expertise, Simakade Ngcobo has built a reputation for excellence in Johannesburg. As a certified plumber with trade certification, he brings deep knowledge of both residential systems and large-scale municipal infrastructure.
                </p>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Whether it's a simple tap repair or a complex solar geyser installation, Simakade ensures that every project is handled with the utmost professionalism and attention to detail.
                </p>
                <div className="grid grid-cols-2 gap-6">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="text-primary w-5 h-5" />
                    <span className="font-semibold text-gray-700">Trade Certified</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="text-primary w-5 h-5" />
                    <span className="font-semibold text-gray-700">Licensed & Insured</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="text-primary w-5 h-5" />
                    <span className="font-semibold text-gray-700">Local Expert</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="text-primary w-5 h-5" />
                    <span className="font-semibold text-gray-700">Reliable Service</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section id="why-us" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-primary rounded-[3rem] p-12 lg:p-20 relative overflow-hidden">
              <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-4xl font-bold font-display text-white mb-6">Why Choose Simakade Plumbing?</h2>
                  <p className="text-xl text-blue-100 mb-10">We combine technical expertise with a commitment to customer satisfaction.</p>
                  <div className="space-y-6">
                    {whyChooseUs.map((item, index) => (
                      <div key={index} className="flex gap-4 items-start bg-white/10 backdrop-blur p-6 rounded-2xl border border-white/10">
                        <div className="bg-white rounded-full p-1 shrink-0">
                          {item.icon}
                        </div>
                        <div>
                          <h4 className="text-white font-bold text-lg mb-1">{item.title}</h4>
                          <p className="text-blue-100">{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="hidden lg:block relative">
                  <img 
                    src="https://images.unsplash.com/photo-1581244277943-fe4a9c777189?auto=format&fit=crop&q=80&w=800" 
                    alt="Quality Work" 
                    className="rounded-3xl shadow-2xl rotate-3"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
              {/* Decorative circles */}
              <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-white/10 rounded-full"></div>
              <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-64 h-64 bg-white/10 rounded-full"></div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold font-display text-gray-900 mb-4">What Our Clients Say</h2>
              <p className="text-lg text-gray-600">Real feedback from satisfied customers across Johannesburg.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col"
                >
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-700 italic mb-6 flex-grow">"{testimonial.content}"</p>
                  <div>
                    <p className="font-bold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16">
              <div>
                <h2 className="text-4xl font-bold font-display text-gray-900 mb-6">Get in Touch</h2>
                <p className="text-lg text-gray-600 mb-10">Have a plumbing emergency or need a quote? Fill out the form or contact us directly.</p>
                
                <div className="space-y-8">
                  <div className="flex items-center gap-6">
                    <div className="bg-blue-50 p-4 rounded-2xl text-primary">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-gray-500 uppercase tracking-wider">Call Us</p>
                      <a href="tel:+27123456789" className="text-xl font-bold text-gray-900 hover:text-primary transition-colors">+27 12 345 6789</a>
                    </div>
                  </div>
                  <div className="flex items-center gap-6">
                    <div className="bg-blue-50 p-4 rounded-2xl text-primary">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-gray-500 uppercase tracking-wider">Email Us</p>
                      <a href="mailto:info@simakadeplumbing.co.za" className="text-xl font-bold text-gray-900 hover:text-primary transition-colors">info@simakadeplumbing.co.za</a>
                    </div>
                  </div>
                  <div className="flex items-center gap-6">
                    <div className="bg-blue-50 p-4 rounded-2xl text-primary">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-gray-500 uppercase tracking-wider">Location</p>
                      <p className="text-xl font-bold text-gray-900">Johannesburg CBD, South Africa</p>
                    </div>
                  </div>
                </div>

                <div className="mt-12 p-8 bg-blue-50 rounded-3xl">
                  <h4 className="font-bold text-gray-900 mb-4">Service Areas:</h4>
                  <ul className="grid grid-cols-2 gap-3 text-gray-600">
                    <li className="flex items-center gap-2"><ChevronRight className="w-4 h-4 text-primary" /> Braamfontein</li>
                    <li className="flex items-center gap-2"><ChevronRight className="w-4 h-4 text-primary" /> Marshalltown</li>
                    <li className="flex items-center gap-2"><ChevronRight className="w-4 h-4 text-primary" /> Newtown</li>
                    <li className="flex items-center gap-2"><ChevronRight className="w-4 h-4 text-primary" /> Jeppestown</li>
                    <li className="flex items-center gap-2"><ChevronRight className="w-4 h-4 text-primary" /> Hillbrow</li>
                    <li className="flex items-center gap-2"><ChevronRight className="w-4 h-4 text-primary" /> Maboneng</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white p-8 lg:p-12 rounded-3xl border border-gray-100 shadow-2xl relative">
                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-700">Full Name</label>
                      <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" placeholder="John Doe" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-700">Phone Number</label>
                      <input type="tel" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" placeholder="+27 12 345 6789" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700">Service Needed</label>
                    <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all appearance-none bg-white">
                      <option>Residential Repair</option>
                      <option>Pipe Installation</option>
                      <option>Leak Detection</option>
                      <option>Solar Geyser</option>
                      <option>Emergency Service</option>
                      <option>Handyman Work</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700">Message</label>
                    <textarea rows={4} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" placeholder="Tell us about your plumbing issue..."></textarea>
                  </div>
                  <button type="submit" className="w-full bg-primary text-white py-4 rounded-xl font-bold text-lg hover:bg-primary-dark transition-all shadow-xl shadow-primary/25">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <h2 className="text-4xl font-bold font-display text-white mb-6">Need a plumber urgently?</h2>
            <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">Don't let a small leak become a big disaster. Contact us today for fast, reliable service.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+27123456789" className="bg-white text-primary px-10 py-4 rounded-xl font-bold text-lg hover:bg-blue-50 transition-all shadow-xl">
                Call Us Now
              </a>
              <a href="https://wa.me/27123456789" className="bg-green-500 text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-green-600 transition-all shadow-xl flex items-center justify-center gap-2">
                <MessageCircle className="w-6 h-6" />
                WhatsApp Us
              </a>
            </div>
          </div>
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <div className="bg-primary p-2 rounded-lg">
                  <Wrench className="text-white w-5 h-5" />
                </div>
                <span className="text-xl font-bold font-display tracking-tight text-white">
                  Simakade <span className="text-primary">Plumbing</span>
                </span>
              </div>
              <p className="max-w-sm mb-6">
                Professional plumbing and handyman services in Johannesburg CBD. Certified, reliable, and affordable solutions for your home or business.
              </p>
              <div className="flex gap-4">
                {/* Social links could go here */}
              </div>
            </div>
            <div>
              <h4 className="text-white font-bold mb-6">Quick Links</h4>
              <ul className="space-y-4">
                <li><a href="#services" className="hover:text-primary transition-colors">Services</a></li>
                <li><a href="#about" className="hover:text-primary transition-colors">About Us</a></li>
                <li><a href="#why-us" className="hover:text-primary transition-colors">Why Choose Us</a></li>
                <li><a href="#contact" className="hover:text-primary transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-6">Contact Info</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary shrink-0" />
                  <span>Johannesburg CBD, South Africa</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-primary shrink-0" />
                  <span>+27 12 345 6789</span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-primary shrink-0" />
                  <span>info@simakadeplumbing.co.za</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-gray-800 text-center text-sm">
            <p>&copy; {new Date().getFullYear()} Simakade Plumbing & Handyman Services. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Floating Action Buttons */}
      <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-50">
        <motion.a 
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          href="https://wa.me/27123456789" 
          className="bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 transition-colors flex items-center justify-center"
          title="WhatsApp Us"
        >
          <MessageCircle className="w-6 h-6" />
        </motion.a>
        <motion.a 
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          href="tel:+27123456789" 
          className="bg-primary text-white p-4 rounded-full shadow-2xl hover:bg-primary-dark transition-colors flex items-center justify-center"
          title="Call Us"
        >
          <Phone className="w-6 h-6" />
        </motion.a>
      </div>
    </div>
  );
};

export default SimakadePlumbing;
