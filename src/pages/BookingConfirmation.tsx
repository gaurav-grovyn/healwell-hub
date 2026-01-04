import { motion } from 'framer-motion';
import { useLocation, Link, Navigate } from 'react-router-dom';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { CheckCircle, Calendar, Clock, MapPin, Phone, Home, User, Stethoscope } from 'lucide-react';

const BookingConfirmationPage = () => {
  const location = useLocation();
  const booking = location.state?.booking;

  // Redirect if no booking data
  if (!booking) {
    return <Navigate to="/book-consultation" replace />;
  }

  return (
    <Layout>
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-2xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2, type: 'spring' }}
              className="w-24 h-24 rounded-full bg-primary flex items-center justify-center mx-auto mb-6"
            >
              <CheckCircle className="w-12 h-12 text-primary-foreground" />
            </motion.div>
            
            <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Booking Confirmed!
            </h1>
            <p className="text-lg text-muted-foreground">
              Thank you for choosing The 247 Care. We've received your consultation request.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="glass-card rounded-2xl p-8 mb-8"
          >
            <h2 className="text-xl font-semibold text-foreground mb-6 pb-4 border-b border-border">
              Booking Details
            </h2>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center flex-shrink-0">
                  <User className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Patient Name</div>
                  <div className="font-medium text-foreground">{booking.name}</div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Contact</div>
                  <div className="font-medium text-foreground">{booking.phone}</div>
                  <div className="text-sm text-muted-foreground">{booking.email}</div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center flex-shrink-0">
                  <Stethoscope className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Service</div>
                  <div className="font-medium text-foreground">{booking.service}</div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center flex-shrink-0">
                  <Calendar className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Date</div>
                  <div className="font-medium text-foreground">
                    {new Date(booking.date).toLocaleDateString('en-IN', {
                      weekday: 'long',
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Time Slot</div>
                  <div className="font-medium text-foreground">{booking.time}</div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Address</div>
                  <div className="font-medium text-foreground">{booking.address}</div>
                </div>
              </div>

              {booking.notes && (
                <div className="mt-4 p-4 bg-secondary rounded-xl">
                  <div className="text-sm text-muted-foreground mb-1">Additional Notes</div>
                  <div className="text-foreground">{booking.notes}</div>
                </div>
              )}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-primary/10 rounded-2xl p-6 mb-8"
          >
            <h3 className="font-semibold text-foreground mb-2">What's Next?</h3>
            <ul className="text-muted-foreground space-y-2">
              <li>• Our team will call you within 30 minutes to confirm the appointment</li>
              <li>• You'll receive an SMS and email confirmation</li>
              <li>• The healthcare professional will arrive at your location on schedule</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link to="/">
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                <Home className="w-4 h-4" />
                Back to Home
              </Button>
            </Link>
            <Link to="/services">
              <Button variant="healthcare" size="lg" className="w-full sm:w-auto">
                Explore More Services
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default BookingConfirmationPage;
