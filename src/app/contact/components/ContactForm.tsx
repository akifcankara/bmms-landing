"use client";

import { useState } from 'react';
import Icon from '@/components/ui/AppIcon';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: ''
      });
    }, 1500);
  };

  return (
    <div className="glass-card p-8 md:p-12 border-[rgba(62,130,239,0.302)]">
      <h3 className="text-2xl font-bold text-foreground mb-6">Send Us a Message</h3>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-muted-foreground mb-2">
            Full Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full bg-transparent border-b border-border py-3 text-sm text-foreground focus:outline-none focus:border-accent transition-colors placeholder:text-muted"
            placeholder="John Doe" />

        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-muted-foreground mb-2">
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full bg-transparent border-b border-border py-3 text-sm text-foreground focus:outline-none focus:border-accent transition-colors placeholder:text-muted"
            placeholder="john@company.com" />

        </div>

        {/* Phone */}
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-muted-foreground mb-2">
            Phone Number *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full bg-transparent border-b border-border py-3 text-sm text-foreground focus:outline-none focus:border-accent transition-colors placeholder:text-muted"
            placeholder="+971 50 123 4567" />

        </div>

        {/* Company */}
        <div>
          <label htmlFor="company" className="block text-sm font-medium text-muted-foreground mb-2">
            Company Name
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className="w-full bg-transparent border-b border-border py-3 text-sm text-foreground focus:outline-none focus:border-accent transition-colors placeholder:text-muted"
            placeholder="Your Company Ltd" />

        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-muted-foreground mb-2">
            Message *
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={4}
            className="w-full bg-transparent border border-border rounded-lg p-4 text-sm text-foreground focus:outline-none focus:border-accent transition-colors placeholder:text-muted resize-none"
            placeholder="Tell us about your expansion plans..." />

        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full btn-primary flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed">

          {isSubmitting ?
          <>
              <Icon name="ArrowPathIcon" size={16} variant="outline" className="text-white animate-spin" />
              Sending...
            </> :

          <>
              Send Message
              <Icon name="PaperAirplaneIcon" size={16} variant="outline" className="text-white" />
            </>
          }
        </button>

        {/* Success Message */}
        {submitStatus === 'success' &&
        <div className="p-4 rounded-lg bg-success/20 border border-success/30 flex items-center gap-3">
            <Icon name="CheckCircleIcon" size={20} variant="solid" className="text-success" />
            <p className="text-sm text-foreground">
              Thank you! We'll get back to you within 24 hours.
            </p>
          </div>
        }
      </form>
    </div>);

}