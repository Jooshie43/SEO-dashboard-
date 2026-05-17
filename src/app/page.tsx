import { BarChart3, Search, TrendingUp, Globe } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        <header className="text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight text-foreground mb-4 text-balance">
            SEO Dashboard
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Monitor, analyze, and optimize your website&apos;s search engine performance
            with powerful insights and actionable recommendations.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <FeatureCard
            icon={<Search className="h-8 w-8" />}
            title="Keyword Tracking"
            description="Track your rankings for target keywords across search engines"
          />
          <FeatureCard
            icon={<BarChart3 className="h-8 w-8" />}
            title="Analytics"
            description="Comprehensive traffic and engagement analytics"
          />
          <FeatureCard
            icon={<TrendingUp className="h-8 w-8" />}
            title="Performance"
            description="Monitor Core Web Vitals and page speed metrics"
          />
          <FeatureCard
            icon={<Globe className="h-8 w-8" />}
            title="Site Audit"
            description="Identify and fix technical SEO issues automatically"
          />
        </div>

        <div className="flex justify-center">
          <button className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors">
            Get Started
          </button>
        </div>
      </div>
    </main>
  );
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="bg-card border border-border rounded-lg p-6 hover:shadow-md transition-shadow">
      <div className="text-primary mb-4">{icon}</div>
      <h3 className="text-lg font-semibold text-card-foreground mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  );
}
