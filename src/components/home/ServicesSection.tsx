import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { 
  Stethoscope, 
  Heart, 
  Brain, 
  Activity, 
  Pill, 
  Users,
  Microscope,
  Smile,
  ArrowRight
} from 'lucide-react';

const services = [
  {
    icon: Stethoscope,
    title: 'Home Doctor Visits',
    description: 'Experienced doctors available to visit you at home for consultations and treatments.',
  },
  {
    icon: Heart,
    title: 'Nursing Care',
    description: 'Professional nurses providing personalized care including wound management and post-surgical care.',
  },
  {
    icon: Activity,
    title: 'Physiotherapy',
    description: 'Expert physiotherapy services for mobility, pain management, and rehabilitation.',
  },
  {
    icon: Microscope,
    title: 'Laboratory Services',
    description: 'Convenient at-home lab tests including blood tests, ECGs, and diagnostics.',
  },
  {
    icon: Users,
    title: 'Elderly Care',
    description: 'Specialized care for seniors including medication management and daily assistance.',
  },
  {
    icon: Pill,
    title: 'Dietician Consultancy',
    description: 'Personalized nutrition plans and dietary guidance for better health.',
  },
  {
    icon: Brain,
    title: 'Psychiatric Consultancy',
    description: 'Mental health support and counseling from experienced professionals.',
  },
  {
    icon: Smile,
    title: 'Speech Therapy',
    description: 'Expert speech and language therapy for children and adults.',
  },
];

export function ServicesSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-secondary text-primary text-sm font-medium mb-4">
            Our Services
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Comprehensive Home Healthcare
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We offer a wide range of medical services designed to bring quality healthcare right to your doorstep.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="healthcare-card group cursor-pointer"
            >
              <div className="w-14 h-14 rounded-xl bg-primary-foreground/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <service.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-semibold text-primary-foreground mb-2">
                {service.title}
              </h3>
              <p className="text-primary-foreground/70 text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Link to="/services">
            <Button variant="outline" size="lg">
              View All Services
              <ArrowRight className="w-5 h-5" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

export default ServicesSection;
