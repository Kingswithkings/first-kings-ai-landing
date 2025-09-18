import { Card, CardContent } from "@/components/ui/card";
import { Award, Globe, Users, Zap } from "lucide-react";

const About = () => {
  const stats = [
    {
      icon: Users,
      number: "500+",
      label: "Clients Served",
      description: "Global enterprises trust our AI solutions"
    },
    {
      icon: Globe,
      number: "50+",
      label: "Countries",
      description: "Worldwide presence and expertise"
    },
    {
      icon: Award,
      number: "99%",
      label: "Success Rate",
      description: "Proven track record of project delivery"
    },
    {
      icon: Zap,
      number: "24/7",
      label: "Support",
      description: "Round-the-clock technical assistance"
    }
  ];

  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Leading the AI Revolution
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              At 1stKings International, we're pioneers in artificial intelligence, 
              committed to helping businesses harness the transformative power of AI 
              technology. Our team of world-class experts combines deep technical 
              knowledge with industry expertise to deliver solutions that drive 
              real business impact.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-accent rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-muted-foreground">
                  <span className="font-semibold text-primary">Innovation-First Approach:</span> We stay at the cutting edge of AI research and development.
                </p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-accent rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-muted-foreground">
                  <span className="font-semibold text-primary">Client-Centric Solutions:</span> Every solution is tailored to your specific business needs.
                </p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-accent rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-muted-foreground">
                  <span className="font-semibold text-primary">Proven Expertise:</span> Years of experience across diverse industries and use cases.
                </p>
              </div>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-6 animate-slide-up">
            {stats.map((stat, index) => (
              <Card key={index} className="card-elegant text-center p-6 bg-card border-border group hover:bg-muted/50">
                <CardContent className="p-0">
                  <div className="w-12 h-12 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                    <stat.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                  <div className="font-semibold text-foreground mb-2">{stat.label}</div>
                  <p className="text-sm text-muted-foreground">{stat.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Mission Statement */}
        <div className="mt-20 text-center">
          <div className="max-w-4xl mx-auto p-8 rounded-2xl bg-gradient-to-r from-primary/5 to-accent/5 border border-primary/10">
            <h3 className="text-2xl font-bold text-primary mb-4">Our Mission</h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              To democratize artificial intelligence and make it accessible to businesses of all sizes, 
              empowering them to innovate, compete, and thrive in an AI-driven world.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;