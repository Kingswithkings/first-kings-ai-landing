import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Bot, Brain, Database, Lightbulb, Shield, TrendingUp } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Brain,
      title: "Machine Learning Solutions",
      description: "Custom ML models tailored to your business needs, from predictive analytics to intelligent automation."
    },
    {
      icon: Bot,
      title: "AI Automation",
      description: "Streamline operations with intelligent workflows that reduce costs and increase efficiency."
    },
    {
      icon: Database,
      title: "Data Intelligence",
      description: "Transform raw data into actionable insights with advanced analytics and visualization tools."
    },
    {
      icon: Lightbulb,
      title: "Innovation Consulting",
      description: "Strategic AI implementation guidance to identify opportunities and maximize ROI."
    },
    {
      icon: Shield,
      title: "Secure AI Systems",
      description: "Enterprise-grade security and compliance for all AI implementations and data handling."
    },
    {
      icon: TrendingUp,
      title: "Performance Optimization",
      description: "Continuous monitoring and enhancement of AI systems to ensure peak performance."
    }
  ];

  return (
    <section id="services" className="py-24 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Our AI Solutions
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive artificial intelligence services designed to transform your business 
            operations and drive unprecedented growth.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="card-elegant hover-scale bg-card border-border group cursor-pointer"
            >
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                  <service.icon className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-xl text-primary group-hover:text-primary-glow transition-colors duration-300">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-muted-foreground leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <p className="text-lg text-muted-foreground mb-6">
            Ready to explore what AI can do for your business?
          </p>
          <button className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary-glow transition-colors duration-300">
            Schedule a Consultation
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;