import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";

function About() {
  return (
    <div className="p-2 text-sm leading-relaxed">
      {/* Header */}
      <div className="flex items-center gap-2 mb-2">
        <i className="ri-user-3-line text-xl"></i>
        <Label className="text-3xl font-bold">About Me</Label>
      </div>

      <p className="mt-2">
        Hi, I'm <strong>Amit Bhagat</strong>, a Full-Stack Development student
        pursuing my Bachelor’s in Computer Application.
      </p>

      <p className="mt-2">
        I enjoy building real-world applications that solve meaningful problems.
        My work spans across frontend development, backend systems, cloud
        deployment, and Linux-based environments.
      </p>

      <hr className="my-6" />

      {/* Education */}
      <div className="flex items-center gap-2 mb-2">
        <i className="ri-graduation-cap-line text-lg"></i>
        <Label className="text-2xl font-bold">Education</Label>
      </div>

      <div className="mt-2">
        <div className="font-semibold">
          Bachelor’s in Computer Application (Full Stack Development)
        </div>
        <div className="text-muted-foreground">
          Medhavi Skills University | 2023 – 2026
        </div>
        <div className="mt-1">Cumulative GPA: 7/10</div>
      </div>

      <hr className="my-6" />

      {/* Skills */}
      <div className="flex items-center gap-2 mb-2">
        <i className="ri-code-s-slash-line text-lg"></i>
        <Label className="text-2xl font-bold">Technical Skills</Label>
      </div>

      <div className="mt-3">
        <div className="font-semibold mb-2">Languages</div>
        <div className="flex flex-wrap gap-2">
          {["JavaScript", "TypeScript", "Python", "C/C++", "HTML", "CSS"].map(
            (skill) => (
              <Badge key={skill} variant="secondary">
                {skill}
              </Badge>
            ),
          )}
        </div>
      </div>

      <div className="mt-4">
        <div className="font-semibold mb-2">Technologies</div>
        <div className="flex flex-wrap gap-2">
          {[
            "React",
            "Next.js",
            "Express",
            "Hono",
            "Tailwind CSS",
            "PostgreSQL",
            "Prisma",
            "Docker",
            "Linux",
            "AWS",
            "Nginx",
            "Git",
          ].map((tech) => (
            <Badge key={tech} variant="outline">
              {tech}
            </Badge>
          ))}
        </div>
      </div>

      <hr className="my-6" />

      {/* Projects */}
      <div className="flex items-center gap-2 mb-2">
        <i className="ri-server-line text-lg"></i>
        <Label className="text-2xl font-bold">Notable Projects</Label>
      </div>

      <ul className="mt-3 space-y-2">
        <li className="flex gap-2 items-start">
          <i className="ri-checkbox-circle-line mt-0.5"></i>
          Digital Raid System (Government of Sikkim)
        </li>
        <li className="flex gap-2 items-start">
          <i className="ri-checkbox-circle-line mt-0.5"></i>
          File Hosting Platform (Flask-based)
        </li>
        <li className="flex gap-2 items-start">
          <i className="ri-checkbox-circle-line mt-0.5"></i>
          DNS Lookup Tool
        </li>
        <li className="flex gap-2 items-start">
          <i className="ri-checkbox-circle-line mt-0.5"></i>
          Net-cli (TUI application)
        </li>
        <li className="flex gap-2 items-start">
          <i className="ri-checkbox-circle-line mt-0.5"></i>
          Local AI Chat (Ollama-powered)
        </li>
        <li className="flex gap-2 items-start">
          <i className="ri-checkbox-circle-line mt-0.5"></i>
          Image Text Parser (Gemini API)
        </li>
      </ul>

      <hr className="my-6" />

      {/* Hackathons */}
      <div className="flex items-center gap-2 mb-2">
        <i className="ri-trophy-line text-lg"></i>
        <Label className="text-2xl font-bold">Hackathons</Label>
      </div>

      <div className="mt-3 space-y-3">
        <div>
          <strong>Hackathon SumMIT@Sikkim'50 (2025)</strong>
          <div className="text-muted-foreground text-xs">
            Designed and implemented a Digital Raid System for the Excise
            Department.
          </div>
        </div>

        <div>
          <strong>Smart India Hackathon</strong>
          <div className="text-muted-foreground text-xs">
            Built a digital tourism exploration interface.
          </div>
        </div>
      </div>

      <hr className="my-6" />

      {/* Motivation */}
      <div className="flex items-center gap-2 mb-2">
        <i className="ri-rocket-2-line text-lg"></i>
        <Label className="text-2xl font-bold">What Drives Me</Label>
      </div>

      <p className="mt-2">
        I believe the best way to learn is by building. I enjoy designing
        backend systems, experimenting with cloud deployments, and integrating
        AI into practical applications.
      </p>

      <p className="mt-2">
        My goal is to continuously grow as a developer and contribute to
        scalable, impactful systems.
      </p>
    </div>
  );
}

export default About;
