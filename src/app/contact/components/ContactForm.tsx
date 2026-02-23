"use client";

import { useState } from 'react';
import Icon from '@/components/ui/AppIcon';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ firstName: '', lastName: '', email: '', phone: '', message: '' });
    }, 1500);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* First Name + Last Name */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label htmlFor="firstName" className="block text-sm font-medium text-foreground mb-2">
            First Name <span className="text-accent">*</span>
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
            className="w-full bg-transparent border-b border-white/20 py-3 text-sm text-foreground focus:outline-none focus:border-accent transition-colors placeholder:text-foreground/40"
            placeholder="John"
          />
        </div>
        <div>
          <label htmlFor="lastName" className="block text-sm font-medium text-foreground mb-2">
            Last Name <span className="text-accent">*</span>
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
            className="w-full bg-transparent border-b border-white/20 py-3 text-sm text-foreground focus:outline-none focus:border-accent transition-colors placeholder:text-foreground/40"
            placeholder="Doe"
          />
        </div>
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
          E-mail <span className="text-accent">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full bg-transparent border-b border-white/20 py-3 text-sm text-foreground focus:outline-none focus:border-accent transition-colors placeholder:text-foreground/40"
          placeholder="john@company.com"
        />
      </div>

      {/* Phone */}
      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
          Phone Number <span className="text-accent">*</span>
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
          className="w-full bg-transparent border-b border-white/20 py-3 text-sm text-foreground focus:outline-none focus:border-accent transition-colors placeholder:text-foreground/40"
          placeholder="+971 50 123 4567"
        />
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
          Message <span className="text-accent">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          className="w-full bg-white/5 border border-white/20 rounded-xl p-4 text-sm text-foreground focus:outline-none focus:border-accent transition-colors placeholder:text-foreground/40 resize-none"
          placeholder="Tell us about your expansion plans..."
        />
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full btn-primary flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? (
          <>
            <Icon name="ArrowPathIcon" size={16} variant="outline" className="text-white animate-spin" />
            Sending...
          </>
        ) : (
          <>
            Send Message
            <Icon name="PaperAirplaneIcon" size={16} variant="outline" className="text-white" />
          </>
        )}
      </button>

      {submitStatus === 'success' && (
        <div className="p-4 rounded-xl bg-success/10 border border-success/30 flex items-center gap-3">
          <Icon name="CheckCircleIcon" size={20} variant="solid" className="text-success" />
          <p className="text-sm text-foreground">
            Thank you! We'll get back to you within 24 hours.
          </p>
        </div>
      )}
    </form>
  );
}
