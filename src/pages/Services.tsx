import { motion } from 'framer-motion';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import {
  Stethoscope,
  Heart,
  Brain,
  Activity,
  Pill,
  Users,
  Microscope,
  Smile,
  Sparkles,
  Home,
  Bed,
  Syringe,
  Phone,
} from 'lucide-react';

const services = [
  {
    id: 'doctor-visits',
    icon: Stethoscope,
    title: 'Home Doctor Visits',
    description: 'Experienced and compassionate doctors are available to visit you at home, offering a range of medical consultations and treatments tailored to your needs.',
    features: ['General health checkups', 'Chronic disease management', 'Prescription and follow-ups', 'Emergency consultations'],
  },
  {
    id: 'nursing',
    icon: Heart,
    title: 'Nursing Care',
    description: 'Our skilled nurses provide personalized care including wound management, post-surgical care, chronic disease management, and more.',
    features: ['Wound dressing', 'IV therapy', 'Catheter care', 'Medication administration'],
  },
  {
    id: 'physiotherapy',
    icon: Activity,
    title: 'Physiotherapy',
    description: 'Receive expert physiotherapy services at home to help with mobility, pain management, and rehabilitation following injury or surgery.',
    features: ['Post-surgery rehabilitation', 'Sports injury recovery', 'Chronic pain management', 'Mobility improvement'],
  },
  {
    id: 'lab',
    icon: Microscope,
    title: 'Laboratory Services',
    description: 'Convenient at-home lab tests and diagnostics including blood tests, ECGs, and other essential investigations.',
    features: ['Blood tests', 'ECG', 'Urine analysis', 'Same-day reports'],
  },
  {
    id: 'elderly',
    icon: Users,
    title: 'Elderly Care',
    description: 'Specialized care for the elderly, offering assistance with daily activities, medication management, companionship, and more.',
    features: ['24/7 caregiver support', 'Medication management', 'Companionship', 'Personal hygiene assistance'],
  },
  {
    id: 'palliative',
    icon: Bed,
    title: 'Palliative Care',
    description: 'Comprehensive end-of-life care services focusing on relief from symptoms and stress of serious illness.',
    features: ['Pain management', 'Emotional support', 'Family counseling', 'Comfort care'],
  },
  {
    id: 'dietician',
    icon: Pill,
    title: 'Dietician Consultancy',
    description: 'Personalized nutrition plans and dietary guidance for managing conditions like diabetes, heart disease, and weight management.',
    features: ['Custom meal plans', 'Weight management', 'Disease-specific diets', 'Nutritional counseling'],
  },
  {
    id: 'psychiatric',
    icon: Brain,
    title: 'Psychiatric Consultancy',
    description: 'Professional mental health support and counseling from experienced psychiatrists in the comfort of your home.',
    features: ['Depression & anxiety treatment', 'Stress management', 'Behavioral therapy', 'Family counseling'],
  },
  {
    id: 'speech',
    icon: Smile,
    title: 'Speech Therapy',
    description: 'Expert speech and language therapy services for children and adults facing communication challenges.',
    features: ['Speech disorders', 'Language development', 'Swallowing therapy', 'Stuttering treatment'],
  },
  {
    id: 'dermatology',
    icon: Sparkles,
    title: 'Dermatology',
    description: 'Skin care consultations and treatments for various dermatological conditions including acne, eczema, and more.',
    features: ['Skin analysis', 'Acne treatment', 'Eczema care', 'Anti-aging consultations'],
  },
  {
    id: 'equipment',
    icon: Syringe,
    title: 'Medical Equipment on Rent',
    description: 'Rent high-quality medical equipment for home use including wheelchairs, oxygen concentrators, and hospital beds.',
    features: ['Wheelchairs', 'Oxygen concentrators', 'Hospital beds', 'ICU setup at home'],
  },
  {
    id: 'spiritual',
    icon: Home,
    title: 'Spiritual Healing Sessions',
    description: 'Holistic healing sessions combining traditional practices with modern wellness approaches for overall well-being.',
    features: ['Meditation guidance', 'Yoga therapy', 'Energy healing', 'Stress relief'],
  },
];

const ServicesPage = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-hero-pattern">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-secondary text-primary text-sm font-medium mb-4">
              Our Services
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
              Comprehensive Home Healthcare Services
            </h1>
            <p className="text-lg text-muted-foreground">
              From doctor visits to specialized care, we bring quality healthcare to your doorstep. 
              Available in Hindi and English, 24/7.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                id={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5 }}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center mb-6">
                    <service.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h2 className="text-3xl font-bold text-foreground mb-4">{service.title}</h2>
                  <p className="text-lg text-muted-foreground mb-6">{service.description}</p>
                  
                  <ul className="grid grid-cols-2 gap-3 mb-8">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-foreground">
                        <div className="w-2 h-2 rounded-full bg-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Link to="/book-consultation">
                    <Button variant="healthcare">
                      <Phone className="w-4 h-4" />
                      Book This Service
                    </Button>
                  </Link>
                </div>

                <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="healthcare-card aspect-video flex items-center justify-center">
                    <service.icon className="w-24 h-24 text-primary-foreground/50" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Can't Find What You Need?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Contact us to discuss your specific healthcare requirements. We're here to help with customized solutions.
            </p>
            <Link to="/contact">
              <Button variant="healthcare" size="lg">
                Get in Touch
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default ServicesPage;
