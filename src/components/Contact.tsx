import React from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-900 via-blue-900/20 to-purple-900/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto"></div>
          <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
            I'm always interested in hearing about new opportunities and projects. 
            Let's connect and discuss how we can work together!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 bg-gray-800/50 rounded-lg border border-gray-700">
                  <Mail className="h-6 w-6 text-blue-400" />
                  <div>
                    <p className="text-white font-medium">Email</p>
                    <a href="mailto:keshrimuskan997@gmail.com" className="text-blue-400 hover:underline">
                      keshrimuskan997@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-gray-800/50 rounded-lg border border-gray-700">
                  <Phone className="h-6 w-6 text-green-400" />
                  <div>
                    <p className="text-white font-medium">Phone</p>
                    <p className="text-gray-400">7061293688</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-gray-800/50 rounded-lg border border-gray-700">
                  <MapPin className="h-6 w-6 text-red-400" />
                  <div>
                    <p className="text-white font-medium">Location</p>
                    <p className="text-gray-400">Guntur, India</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white mb-4">Follow Me</h3>
              <div className="flex gap-4">
                <a href="https://github.com/Muskan392" className="w-12 h-12 bg-gray-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors">
                  <Github className="h-6 w-6 text-gray-300" />
                </a>
                <a href="https://www.linkedin.com/in/muskan669/" className="w-12 h-12 bg-gray-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors">
                  <Linkedin className="h-6 w-6 text-gray-300" />
                </a>
                <a href="mailto:keshrimuskan997@gmail.com" className="w-12 h-12 bg-gray-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors">
                  <Mail className="h-6 w-6 text-gray-300" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 p-8">
            <h3 className="text-2xl font-semibold text-white mb-6">Send Message</h3>
            <form
              action="https://formsubmit.co/keshrimuskan997@gmail.com"
              method="POST"
              className="space-y-6"
            >
              {/* Hidden Inputs */}
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_autoresponse" value="Thanks for reaching out! I'll get back to you soon." />

              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 bg-gray-900/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500"
                  placeholder="Your Name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 bg-gray-900/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="w-full px-4 py-3 bg-gray-900/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 resize-none"
                  placeholder="Tell me about your project or just say hello..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-6 py-3 rounded-lg flex items-center justify-center gap-2 transition-all duration-300 transform hover:scale-105"
              >
                <Send className="h-5 w-5" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
