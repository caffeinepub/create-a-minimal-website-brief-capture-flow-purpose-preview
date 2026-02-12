import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Target, Eye, Award, Users } from 'lucide-react';

export default function AboutPage() {
  const values = [
    {
      icon: Target,
      title: 'Our Mission',
      description: 'To provide world-class cold storage solutions that ensure product quality and safety while delivering exceptional customer service.',
    },
    {
      icon: Eye,
      title: 'Our Vision',
      description: 'To be the leading cold storage provider recognized for innovation, reliability, and commitment to sustainability.',
    },
    {
      icon: Award,
      title: 'Our Values',
      description: 'Integrity, excellence, innovation, and customer focus drive everything we do in serving our clients.',
    },
    {
      icon: Users,
      title: 'Our Team',
      description: 'Experienced professionals dedicated to maintaining the highest standards in cold chain management.',
    },
  ];

  const milestones = [
    { year: '1998', event: 'Company founded with first cold storage facility' },
    { year: '2005', event: 'Expanded to 20,000 pallet capacity' },
    { year: '2012', event: 'Achieved HACCP and ISO certifications' },
    { year: '2018', event: 'Opened state-of-the-art frozen storage complex' },
    { year: '2023', event: 'Reached 50,000+ pallet capacity milestone' },
    { year: '2026', event: 'Serving 500+ satisfied clients nationwide' },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-background via-background to-primary/5 py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground">About KFPCS Group</h1>
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
              With over 25 years of experience, we've built a reputation as a trusted partner in temperature-controlled storage solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Card className="border-2 border-primary/20 shadow-warm">
              <CardHeader>
                <CardTitle className="text-3xl">Our Story</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Founded in 1998, KFPCS Group began with a simple mission: to provide reliable, high-quality cold storage solutions for businesses that demand excellence. What started as a single facility has grown into a comprehensive network of state-of-the-art cold storage complexes.
                </p>
                <p>
                  Over the years, we've invested heavily in technology, infrastructure, and our team to ensure we remain at the forefront of the cold storage industry. Our commitment to innovation has led us to implement advanced monitoring systems, energy-efficient cooling technologies, and automated warehouse management solutions.
                </p>
                <p>
                  Today, we proudly serve over 500 clients across various industries, including food and beverage, pharmaceuticals, and agriculture. Our facilities maintain the highest standards of safety, quality, and compliance, backed by certifications from leading industry bodies.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 lg:py-24 bg-card border-y border-border/40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">What Drives Us</h2>
            <p className="text-lg text-muted-foreground">
              Our core values and principles guide our operations and relationships with clients.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index} className="border-2 hover:border-primary/50 transition-all">
                  <CardHeader>
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base leading-relaxed">{value.description}</CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 space-y-4">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Our Journey</h2>
              <p className="text-lg text-muted-foreground">Key milestones in our growth and development</p>
            </div>
            <div className="space-y-6">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex gap-6 items-start">
                  <div className="flex-shrink-0 w-20 text-right">
                    <span className="text-2xl font-bold text-primary">{milestone.year}</span>
                  </div>
                  <div className="flex-shrink-0 mt-2">
                    <div className="h-3 w-3 rounded-full bg-primary" />
                  </div>
                  <div className="flex-1 pb-8 border-l-2 border-border/40 pl-6 -ml-[7px]">
                    <p className="text-foreground leading-relaxed">{milestone.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
