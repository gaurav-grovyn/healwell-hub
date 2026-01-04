import { motion } from 'framer-motion';
import Layout from '@/components/Layout';
import { Heart, Target, Eye, Users, Award, Clock } from 'lucide-react';

const team = [
  { name: 'Dr. Arun Mehta', role: 'Chief Medical Officer', initials: 'AM' },
  { name: 'Dr. Priya Singh', role: 'Head of Nursing', initials: 'PS' },
  { name: 'Vikram Sharma', role: 'Operations Director', initials: 'VS' },
  { name: 'Dr. Neha Gupta', role: 'Head Physiotherapist', initials: 'NG' },
];

const values = [
  { icon: Heart, title: 'Compassion', description: 'We treat every patient with empathy and understanding.' },
  { icon: Award, title: 'Excellence', description: 'We strive for the highest standards in healthcare delivery.' },
  { icon: Users, title: 'Accessibility', description: 'Quality healthcare should be available to everyone.' },
  { icon: Clock, title: 'Reliability', description: 'Available 24/7, because health emergencies don\'t wait.' },
];

const AboutPage = () => {
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
              About Us
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
              Bringing Healthcare Home Since 2020
            </h1>
            <p className="text-lg text-muted-foreground">
              The 247 Care was founded with a simple mission: to make quality healthcare accessible 
              to everyone, right in the comfort of their homes.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="glass-card rounded-2xl p-8"
            >
              <div className="w-14 h-14 rounded-xl bg-primary flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-primary-foreground" />
              </div>
              <h2 className="text-2xl font-bold text-foreground mb-4">Our Mission</h2>
              <p className="text-muted-foreground leading-relaxed">
                To revolutionize home healthcare in India by providing accessible, affordable, 
                and high-quality medical services to every household. We believe that everyone 
                deserves professional healthcare without the stress of traveling to hospitals.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="glass-card rounded-2xl p-8"
            >
              <div className="w-14 h-14 rounded-xl bg-accent flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-accent-foreground" />
              </div>
              <h2 className="text-2xl font-bold text-foreground mb-4">Our Vision</h2>
              <p className="text-muted-foreground leading-relaxed">
                To be India's most trusted home healthcare provider, recognized for our 
                commitment to patient care, innovation in service delivery, and the positive 
                impact we create in the lives of families across the nation.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-foreground mb-4">Our Core Values</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              These principles guide everything we do at The 247 Care.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card rounded-2xl p-6 text-center shadow-lg"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-foreground mb-4">Our Leadership Team</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Experienced healthcare professionals leading the way in home healthcare.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-32 h-32 rounded-full bg-primary mx-auto mb-4 flex items-center justify-center">
                  <span className="text-4xl font-bold text-primary-foreground">{member.initials}</span>
                </div>
                <h3 className="text-lg font-semibold text-foreground">{member.name}</h3>
                <p className="text-muted-foreground">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { value: '10,000+', label: 'Patients Served' },
              { value: '50+', label: 'Healthcare Professionals' },
              { value: '24/7', label: 'Availability' },
              { value: '98%', label: 'Satisfaction Rate' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <div className="text-4xl font-bold text-primary-foreground mb-2">{stat.value}</div>
                <div className="text-primary-foreground/70">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AboutPage;
