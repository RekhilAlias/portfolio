import { projects } from "@/lib/projectData";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Metadata } from "next";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return { title: "Project Not Found" };
  return {
    title: `${project.title} | Portfolio Project`,
    description: project.desc,
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  // Inject unique theme variables for this scope
  const themeStyles = {
    "--primary": project.theme.primary,
    "--secondary": project.theme.secondary,
    "--background": project.theme.background,
    "--shadow-color": project.theme.shadow,
  } as React.CSSProperties;

  return (
    <main
      className="min-h-screen pt-24 pb-20 px-4"
      style={{
        ...themeStyles,
        backgroundColor: "hsl(var(--background))",
      }}
    >
      <div className="container mx-auto max-w-4xl">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 font-bold text-muted-foreground hover:text-primary mb-8 transition-colors group"
        >
          <ArrowLeft
            size={20}
            className="group-hover:-translate-x-1 transition-transform"
          />
          Back to Portfolio
        </Link>

        {/* Project Header Card */}
        <div className="relative bg-card border-4 border-card rounded-[3rem] p-8 md:p-12 shadow-[8px_8px_0px_0px_hsl(var(--shadow-color))] mb-12 overflow-hidden">
          {/* Decorative Background Pattern */}
          <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
            <div className="absolute top-[-50%] left-[-20%] w-[150%] h-[200%] bg-[radial-gradient(circle,hsl(var(--primary))_1px,transparent_1px)] bg-[size:24px_24px] rotate-12"></div>
          </div>

          <div className="relative z-10 text-center">
            <span className="inline-block px-4 py-1.5 bg-secondary/30 text-secondary-foreground text-sm font-black rounded-full uppercase tracking-widest mb-6">
              Project Details
            </span>
            <h1 className="text-5xl md:text-7xl font-black text-foreground tracking-tighter mb-6">
              {project.title}
            </h1>
            <p className="text-xl md:text-2xl font-medium text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              {project.desc}
            </p>
          </div>
        </div>

        {/* Content Section */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Sidebar / Info */}
          <div className="md:col-span-1 space-y-6">
            <div className="bg-card/60 backdrop-blur border-2 border-card rounded-3xl p-6 shadow-sm">
              <h3 className="text-lg font-black text-primary uppercase mb-4">
                Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-card border border-primary/20 text-foreground font-bold text-xs rounded-full shadow-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-card/60 backdrop-blur border-2 border-card rounded-3xl p-6 shadow-sm">
              <h3 className="text-lg font-black text-primary uppercase mb-4">
                Links
              </h3>
              <div className="flex flex-col gap-3">
                <button className="w-full py-3 bg-foreground text-background font-bold rounded-xl hover:bg-primary transition-colors">
                  View Source
                </button>
                <button className="w-full py-3 bg-secondary text-secondary-foreground font-bold rounded-xl hover:brightness-110 transition-colors">
                  Live Demo
                </button>
              </div>
            </div>
          </div>

          {/* Main Detail Content */}
          <div className="md:col-span-2">
            <div className="bg-card/80 backdrop-blur border-4 border-card rounded-[2rem] p-8 shadow-sm">
              <h2 className="text-3xl font-black text-foreground mb-6">
                Overview
              </h2>
              <div className="prose prose-lg text-muted-foreground leading-relaxed">
                <p dangerouslySetInnerHTML={{ __html: project.details }}></p>
              </div>

              <div className="mt-12 p-6 bg-secondary/20 rounded-2xl border-2 border-secondary/50 border-dashed flex items-center justify-center text-center">
                <p className="font-bold text-secondary-foreground/80 italic">
                  Screenshot or Demo Video Placeholder
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
