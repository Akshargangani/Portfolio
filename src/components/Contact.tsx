import React, { useState, useEffect, useRef, FormEvent } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { aboutMe } from '../data';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    
    // Clear error when user types
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email address';
    }
    
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      
      try {
        // Replace with your actual form submission endpoint
        const response = await fetch('https://formspree.io/your-email@example.com', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
        
        if (response.ok) {
          setIsSubmitted(true);
          setFormData({
            name: '',
            email: '',
            subject: '',
            message: '',
          });
          
          // Reset submission status after 5 seconds
          setTimeout(() => {
            setIsSubmitted(false);
          }, 5000);
        } else {
          throw new Error('Form submission failed');
        }
      } catch (error) {
        console.error('Error submitting form:', error);
        // Handle error state
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="section bg-white dark:bg-slate-800 opacity-0"
    >
      <div className="container">
        <div className="section-title">
          <h2 className="relative inline-block text-slate-900 dark:text-white after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-1 after:bg-indigo-500 dark:after:bg-indigo-400">
            Contact Me
          </h2>
          <p>Get in touch</p>
        </div>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
              Let's Talk
            </h3>
            <p className="text-slate-700 dark:text-slate-300">
              Have a project in mind or want to discuss a potential collaboration? Feel free to reach out through any of the following contact methods.
            </p>

            <div className="space-y-4">
              <div className="flex items-start">
                <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 bg-indigo-100 rounded-lg dark:bg-indigo-900/30">
                  <Mail className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-slate-900 dark:text-white">
                    Email
                  </h4>
                  <a
                    href={`mailto:${aboutMe.email}`}
                    className="text-slate-700 hover:text-indigo-600 dark:text-slate-300 dark:hover:text-indigo-400"
                  >
                    {aboutMe.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 bg-indigo-100 rounded-lg dark:bg-indigo-900/30">
                  <Phone className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-slate-900 dark:text-white">
                    Phone
                  </h4>
                  <a
                    href={`tel:${aboutMe.phone.replace(/\D/g, '')}`}
                    className="text-slate-700 hover:text-indigo-600 dark:text-slate-300 dark:hover:text-indigo-400"
                  >
                    {aboutMe.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 bg-indigo-100 rounded-lg dark:bg-indigo-900/30">
                  <MapPin className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-slate-900 dark:text-white">
                    Location
                  </h4>
                  <p className="text-slate-700 dark:text-slate-300">
                    {aboutMe.location}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-slate-700 dark:text-slate-300"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-slate-700 dark:border-slate-600 dark:text-white ${
                    errors.name ? 'border-red-500 dark:border-red-500' : 'border-slate-300'
                  }`}
                  placeholder="Akshar"
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-500">{errors.name}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-slate-700 dark:text-slate-300"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-slate-700 dark:border-slate-600 dark:text-white ${
                    errors.email ? 'border-red-500 dark:border-red-500' : 'border-slate-300'
                  }`}
                  placeholder="akshar@example.com"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block mb-2 text-sm font-medium text-slate-700 dark:text-slate-300"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-slate-700 dark:border-slate-600 dark:text-white ${
                    errors.subject ? 'border-red-500 dark:border-red-500' : 'border-slate-300'
                  }`}
                  placeholder="Project Inquiry"
                />
                {errors.subject && (
                  <p className="mt-1 text-sm text-red-500">{errors.subject}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block mb-2 text-sm font-medium text-slate-700 dark:text-slate-300"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-slate-700 dark:border-slate-600 dark:text-white ${
                    errors.message ? 'border-red-500 dark:border-red-500' : 'border-slate-300'
                  }`}
                  placeholder="Your message here..."
                ></textarea>
                {errors.message && (
                  <p className="mt-1 text-sm text-red-500">{errors.message}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting || isSubmitted}
                className={`btn ${
                  isSubmitted
                    ? 'bg-green-600 hover:bg-green-700 focus:ring-green-500'
                    : 'btn-primary'
                } w-full`}
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <svg
                      className="w-5 h-5 mr-2 animate-spin"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Sending...
                  </span>
                ) : isSubmitted ? (
                  <span className="flex items-center justify-center">
                    Message Sent Successfully!
                  </span>
                ) : (
                  <span className="flex items-center justify-center">
                    <Send size={18} className="mr-2" />
                    Send Message
                  </span>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;