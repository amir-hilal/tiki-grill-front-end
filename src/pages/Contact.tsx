import { useState, FormEvent } from 'react';
import Seo from '../components/Seo';
import { businessInfo, formatPhone } from '../data/business';
import styles from './Contact.module.css';

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      // In a real app, this would send to a backend
      console.log('Form submitted:', formData);
      setSubmitted(true);
      setFormData({ name: '', email: '', phone: '', message: '' });

      // Reset success message after 5 seconds
      setTimeout(() => setSubmitted(false), 5000);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <>
      <Seo
        title="Contact Us - Tiki Grill"
        description="Get in touch with Tiki Grill for bookings, inquiries, or to find us at your next festival or event. Call (919) 335-5288 or email tikigrill@hotmail.com"
        path="/contact"
      />
      <div className={styles.container}>
        <header className={styles.header}>
          <h1 className={styles.title}>Contact Us</h1>
          <p className={styles.subtitle}>
            We'd love to hear from you and serve you at your next event!
          </p>
        </header>

        <div className={styles.content}>
          <section className={styles.section}>
            <h2>Get In Touch</h2>
            <div className={styles.contactInfo}>
              <div className={styles.contactItem}>
                <strong>Phone:</strong>
                <a href={`tel:${businessInfo.phone}`}>
                  {formatPhone(businessInfo.phone)}
                </a>
              </div>
              <div className={styles.contactItem}>
                <strong>Email:</strong>
                <a href={`mailto:${businessInfo.email}`}>
                  {businessInfo.email}
                </a>
              </div>
              <div className={styles.contactItem}>
                <strong>Address:</strong>
                <span>
                  {businessInfo.address.street}
                  <br />
                  {businessInfo.address.city}, {businessInfo.address.state}{' '}
                  {businessInfo.address.zip}
                </span>
              </div>
              <div className={styles.contactItem}>
                <strong>Contact:</strong>
                <span>{businessInfo.contactName}</span>
              </div>
            </div>

            <div className={styles.bookingInfo}>
              <h3>📅 Book Us for Your Event</h3>
              <p>
                Looking to add amazing food to your festival, fair, or community
                event? We'd love to be part of it! Call or email us to discuss
                availability and booking details.
              </p>
            </div>
          </section>

          <section className={styles.section}>
            <h2>Send Us a Message</h2>
            {submitted && (
              <div className={styles.successMessage}>
                Thank you for your message! We'll get back to you soon.
              </div>
            )}
            <form className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.formGroup}>
                <label htmlFor="name">Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={errors.name ? styles.error : ''}
                  aria-required="true"
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? 'name-error' : undefined}
                />
                {errors.name && (
                  <span id="name-error" className={styles.errorText}>
                    {errors.name}
                  </span>
                )}
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="email">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={errors.email ? styles.error : ''}
                  aria-required="true"
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? 'email-error' : undefined}
                />
                {errors.email && (
                  <span id="email-error" className={styles.errorText}>
                    {errors.email}
                  </span>
                )}
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="phone">Phone</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className={errors.message ? styles.error : ''}
                  aria-required="true"
                  aria-invalid={!!errors.message}
                  aria-describedby={
                    errors.message ? 'message-error' : undefined
                  }
                />
                {errors.message && (
                  <span id="message-error" className={styles.errorText}>
                    {errors.message}
                  </span>
                )}
              </div>

              <button type="submit" className={styles.submitButton}>
                Send Message
              </button>
            </form>
          </section>
        </div>
      </div>
    </>
  );
};

export default Contact;
