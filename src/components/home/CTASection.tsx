import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Phone, ArrowRight } from 'lucide-react';

export function CTASection() {
  return (
    <section className="py-20 bg-primary relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary-foreground rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-foreground rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
            Ready to Experience Quality Healthcare at Home?
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-8">
            Book a consultation today and let our team of healthcare professionals take care of you and your loved ones.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/book-consultation">
              <Button 
                variant="secondary" 
                size="lg"
                className="w-full sm:w-auto bg-primary-foreground text-primary hover:bg-primary-foreground/90"
              >
                <Phone className="w-5 h-5" />
                Book a Consultation
              </Button>
            </Link>
            <Link to="/contact">
              <Button 
                variant="heroOutline" 
                size="lg"
                className="w-full sm:w-auto border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10"
              >
                Contact Us
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </div>

          <p className="text-primary-foreground/60 text-sm mt-6">
            Or call us directly: <a href="tel:+911234567890" className="text-primary-foreground font-semibold hover:underline">+91 123 456 7890</a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default CTASection;
