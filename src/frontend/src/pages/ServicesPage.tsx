import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Snowflake, Package, Zap, Truck, BarChart3, Thermometer, Shield, Clock } from 'lucide-react';

export default function ServicesPage() {
  const services = [
    {
      icon: Snowflake,
      title: 'Cold Storage',
      description: 'Temperature-controlled storage ranging from 0°C to 10°C, perfect for fresh produce, dairy, and pharmaceuticals.',
      features: ['Climate-controlled chambers', 'Humidity management', 'Real-time monitoring', 'Quality assurance'],
      badge: 'Popular',
    },
    {
      icon: Thermometer,
      title: 'Frozen Storage',
      description: 'Deep freeze storage at -18°C to -30°C for long-term preservation of frozen foods, seafood, and meat products.',
      features: ['Ultra-low temperature', 'Energy efficient', 'Rapid freeze capability', 'Blast freezing available'],
      badge: 'Premium',
    },
    {
      icon: Zap,
      title: 'Blast Freezing',
      description: 'Quick-freeze technology that rapidly reduces product temperature, preserving texture, flavor, and nutritional value.',
      features: ['Fast freezing cycles', 'Minimal ice crystal formation', 'Batch processing', 'Quality preservation'],
      badge: 'Advanced',
    },
    {
      icon: Truck,
      title: 'Distribution Services',
      description: 'Integrated logistics and distribution with temperature-controlled transportation to maintain cold chain integrity.',
      features: ['Fleet management', 'Route optimization', 'GPS tracking', 'Timely delivery'],
      badge: null,
    },
    {
      icon: BarChart3,
      title: 'Inventory Management',
      description: 'Advanced warehouse management system with real-time inventory tracking and automated reporting.',
      features: ['Digital tracking', 'FIFO/LIFO management', 'Automated alerts', 'Custom reporting'],
      badge: null,
    },
    {
      icon: Package,
      title: 'Value-Added Services',
      description: 'Additional services including palletizing, labeling, repackaging, and quality inspection.',
      features: ['Custom packaging', 'Labeling services', 'Quality checks', 'Order fulfillment'],
      badge: null,
    },
  ];

  const certifications = [
    { icon: Shield, title: 'HACCP Certified', description: 'Food safety management system' },
    { icon: Shield, title: 'ISO 9001:2015', description: 'Quality management standards' },
    { icon: Shield, title: 'FDA Registered', description: 'Compliant with FDA regulations' },
    { icon: Clock, title: '24/7 Monitoring', description: 'Continuous temperature tracking' },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-background via-background to-primary/5 py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground">Our Services</h1>
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
              Comprehensive cold storage solutions designed to meet the diverse needs of your business with precision and reliability.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={index} className="border-2 hover:border-primary/50 transition-all hover:shadow-warm relative">
                  {service.badge && (
                    <div className="absolute top-4 right-4">
                      <Badge variant="default">{service.badge}</Badge>
                    </div>
                  )}
                  <CardHeader>
                    <div className="h-14 w-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                      <Icon className="h-7 w-7 text-primary" />
                    </div>
                    <CardTitle className="text-2xl">{service.title}</CardTitle>
                    <CardDescription className="text-base leading-relaxed">{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <div className="h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-16 lg:py-24 bg-card border-y border-border/40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Certifications & Standards</h2>
            <p className="text-lg text-muted-foreground">
              Our facilities meet the highest industry standards for safety, quality, and compliance.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => {
              const Icon = cert.icon;
              return (
                <div key={index} className="text-center space-y-3 p-6 rounded-lg bg-background border border-border/40">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground">{cert.title}</h3>
                  <p className="text-sm text-muted-foreground">{cert.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
