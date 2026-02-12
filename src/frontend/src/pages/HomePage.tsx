import { Link } from '@tanstack/react-router';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Snowflake, Thermometer, Package, TrendingUp, Shield, Clock, ArrowRight } from 'lucide-react';

export default function HomePage() {
  const features = [
    {
      icon: Thermometer,
      title: 'Temperature Control',
      description: 'Precise temperature management from -30°C to +10°C for optimal product preservation.',
    },
    {
      icon: Package,
      title: 'Flexible Storage',
      description: 'Scalable storage solutions from small batches to large-scale inventory management.',
    },
    {
      icon: Shield,
      title: 'Safety & Compliance',
      description: 'HACCP certified facilities meeting international food safety standards.',
    },
    {
      icon: Clock,
      title: '24/7 Operations',
      description: 'Round-the-clock access and monitoring for your peace of mind.',
    },
  ];

  const stats = [
    { value: '50,000+', label: 'Pallet Capacity' },
    { value: '25+', label: 'Years Experience' },
    { value: '500+', label: 'Happy Clients' },
    { value: '99.9%', label: 'Uptime Guarantee' },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-background via-background to-primary/5 py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
              <Snowflake className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">Premium Cold Storage Solutions</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Your Trusted Partner in
              <span className="block text-primary mt-2">Temperature-Controlled Storage</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              State-of-the-art cold storage facilities designed to preserve the quality and integrity of your products with precision and reliability.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button asChild size="lg" className="text-base px-8 py-6">
                <Link to="/contact">
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-base px-8 py-6">
                <Link to="/services">Explore Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-card border-y border-border/40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center space-y-2">
                <div className="text-3xl lg:text-4xl font-bold text-primary">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Why Choose KFPCS Group?</h2>
            <p className="text-lg text-muted-foreground">
              We combine cutting-edge technology with decades of expertise to deliver unmatched cold storage solutions.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="border-2 hover:border-primary/50 transition-all hover:shadow-warm">
                  <CardHeader>
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base leading-relaxed">{feature.description}</CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border-2 border-primary/20 shadow-warm">
            <CardContent className="p-8 lg:p-12">
              <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
                <div className="space-y-4 text-center lg:text-left">
                  <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Ready to Get Started?</h2>
                  <p className="text-lg text-muted-foreground max-w-2xl">
                    Contact us today for a customized cold storage solution tailored to your business needs.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild size="lg" className="text-base px-8 py-6">
                    <Link to="/contact">Request Quote</Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="text-base px-8 py-6">
                    <Link to="/facilities">View Facilities</Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
