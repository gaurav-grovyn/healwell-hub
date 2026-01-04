import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const reasons = [
  'Certified and experienced healthcare professionals',
  'Available 24/7 for emergency and routine care',
  'Personalized treatment plans for every patient',
  'Multilingual support in Hindi and English',
  'Affordable and transparent pricing',
  'State-of-the-art medical equipment',
];

export function WhyChooseUsSection() {
  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Why Choose Us
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
              Trusted Healthcare Partner for Your Family
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              At The 247 Care, we understand that health is your most valuable asset. 
              Our mission is to deliver exceptional healthcare services with compassion, 
              expertise, and convenience.
            </p>

            <div className="space-y-4">
              {reasons.map((reason, index) => (
                <motion.div
                  key={reason}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-primary-foreground" />
                  </div>
                  <span className="text-foreground">{reason}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <div className="aspect-square bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center">
                <div className="text-center text-primary-foreground p-8">
                  <div className="text-7xl font-bold mb-4">24/7</div>
                  <div className="text-2xl font-semibold mb-2">Always Available</div>
                  <p className="text-primary-foreground/80">
                    Round-the-clock care for you and your family
                  </p>
                </div>
              </div>
            </div>
            
            {/* Floating Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="absolute -bottom-6 -left-6 bg-card rounded-2xl p-6 shadow-xl border border-border"
            >
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center">
                  <span className="text-2xl font-bold text-accent">98%</span>
                </div>
                <div>
                  <div className="font-semibold text-foreground">Patient Satisfaction</div>
                  <div className="text-sm text-muted-foreground">Based on 5000+ reviews</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUsSection;
