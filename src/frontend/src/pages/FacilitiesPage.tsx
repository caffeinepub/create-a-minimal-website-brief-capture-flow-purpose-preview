import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Building2, Thermometer, Package, Zap, Shield, Gauge } from 'lucide-react';

export default function FacilitiesPage() {
  const facilities = [
    {
      name: 'Main Cold Storage Facility',
      location: 'Industrial Zone A',
      capacity: '30,000 pallets',
      temperature: '0°C to 10°C',
      features: [
        'Multi-temperature zones',
        'Automated storage systems',
        'Loading docks with temperature control',
        'Advanced fire suppression',
      ],
      badge: 'Primary',
    },
    {
      name: 'Frozen Storage Complex',
      location: 'Industrial Zone B',
      capacity: '15,000 pallets',
      temperature: '-18°C to -30°C',
      features: [
        'Deep freeze chambers',
        'Blast freezing units',
        'Energy-efficient cooling',
        'Backup power systems',
      ],
      badge: 'Premium',
    },
    {
      name: 'Distribution Center',
      location: 'Logistics Hub',
      capacity: '5,000 pallets',
      temperature: 'Variable',
      features: [
        'Cross-docking facilities',
        'Temperature-controlled loading',
        'Rapid turnaround',
        'Fleet parking',
      ],
      badge: null,
    },
  ];

  const specifications = [
    {
      icon: Building2,
      title: 'Total Capacity',
      value: '50,000+ Pallets',
      description: 'Combined storage across all facilities',
    },
    {
      icon: Thermometer,
      title: 'Temperature Range',
      value: '-30°C to +10°C',
      description: 'Flexible temperature zones',
    },
    {
      icon: Package,
      title: 'Storage Types',
      value: 'Multi-Purpose',
      description: 'Cold, frozen, and blast freezing',
    },
    {
      icon: Zap,
      title: 'Power Backup',
      value: '100% Redundancy',
      description: 'Uninterrupted operations',
    },
    {
      icon: Shield,
      title: 'Security',
      value: '24/7 Surveillance',
      description: 'Advanced monitoring systems',
    },
    {
      icon: Gauge,
      title: 'Efficiency',
      value: 'Energy Star',
      description: 'Eco-friendly operations',
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-background via-background to-primary/5 py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground">Our Facilities</h1>
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
              State-of-the-art cold storage infrastructure designed for maximum efficiency, reliability, and product safety.
            </p>
          </div>
        </div>
      </section>

      {/* Specifications Grid */}
      <section className="py-16 lg:py-24 bg-card border-y border-border/40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {specifications.map((spec, index) => {
              const Icon = spec.icon;
              return (
                <div key={index} className="p-6 rounded-lg bg-background border border-border/40 space-y-3">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">{spec.title}</div>
                    <div className="text-2xl font-bold text-foreground mb-1">{spec.value}</div>
                    <div className="text-sm text-muted-foreground">{spec.description}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Facilities Details */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Facility Locations</h2>
            <p className="text-lg text-muted-foreground">
              Strategically located facilities to serve your distribution needs efficiently.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {facilities.map((facility, index) => (
              <Card key={index} className="border-2 hover:border-primary/50 transition-all hover:shadow-warm relative">
                {facility.badge && (
                  <div className="absolute top-4 right-4">
                    <Badge variant="default">{facility.badge}</Badge>
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="text-2xl">{facility.name}</CardTitle>
                  <CardDescription className="text-base">{facility.location}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="text-xs text-muted-foreground mb-1">Capacity</div>
                      <div className="font-semibold text-foreground">{facility.capacity}</div>
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground mb-1">Temperature</div>
                      <div className="font-semibold text-foreground">{facility.temperature}</div>
                    </div>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-foreground mb-3">Key Features</div>
                    <ul className="space-y-2">
                      {facility.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <div className="h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Card className="border-2 border-primary/20 shadow-warm">
              <CardHeader className="text-center">
                <CardTitle className="text-3xl">Advanced Technology</CardTitle>
                <CardDescription className="text-base">
                  Our facilities are equipped with cutting-edge technology for optimal performance
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <h4 className="font-semibold text-foreground">Monitoring Systems</h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• Real-time temperature tracking</li>
                      <li>• Automated alert systems</li>
                      <li>• Remote monitoring capabilities</li>
                      <li>• Data logging and reporting</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-foreground">Safety Features</h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• Fire suppression systems</li>
                      <li>• Emergency backup power</li>
                      <li>• Access control systems</li>
                      <li>• 24/7 security surveillance</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
