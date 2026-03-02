import { Badge } from "@/components/ui/badge";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";

function Projects({ project }) {
  return (
    <section>
      <div className="group rounded-2xl  transition-all duration-500 p-4 space-y-4 overflow-hidden">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="w-full space-y-6">
            <Label className="text-2xl font-bold tracking-tight">
              {project.project_name}
            </Label>

            <div className="space-y-4">
              <div className="flex flex-wrap items-center gap-3">
                <Label className="text-sm font-semibold text-muted-foreground">
                  Languages:
                </Label>
                <div className="flex flex-wrap gap-2">
                  {project.languages.map((val: string, idx: number) => (
                    <Badge
                      key={idx}
                      variant="secondary"
                      className="text-xs px-3 py-1 rounded-full"
                    >
                      {val}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <Label className="text-sm font-semibold text-muted-foreground">
                  Framework:
                </Label>
                <div className="flex flex-wrap gap-2">
                  {project.frameworks.map((val: string, idx: number) => (
                    <Badge
                      key={idx}
                      variant="secondary"
                      className="text-xs px-3 py-1 rounded-full"
                    >
                      {val}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <Label className="text-sm font-semibold text-muted-foreground">
                  Tools:
                </Label>
                <div className="flex flex-wrap gap-2">
                  {project.tools.map((val: string, idx: number) => (
                    <Badge
                      key={idx}
                      variant="secondary"
                      className="text-xs px-3 py-1 rounded-full"
                    >
                      {val}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center items-center w-full lg:w-1/2">
            {project.preview_image && (
              <img
                // src="https://ik.imagekit.io/auzr8atry/tools/tailwindcss.png?tr=w-600,fo-auto,q-auto,f-webp"
                src={project.preview_image}
                alt="Project preview"
                className="rounded-xl object-contain max-h-64 sm:max-h-80 transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
            )}
          </div>
        </div>

        <div className="flex gap-5">
          {project.link && (
            <Link to={project.link}>
              <Label className="ri-global-line text-sm font-bold font-sans  hover:cursor-pointer">
                live site here
              </Label>
            </Link>
          )}
          <Link to={project.github}>
            <Label className="ri-github-line text-sm font-bold font-sans  hover:cursor-pointer">
              Source Code
            </Label>
          </Link>
        </div>

        <div className="hidden lg:block text-center lg:group-hover:hidden w-full lg:transition-all lg:duration-700">
          <div className="flex justify-center items-center font-semibold text-xs -mb-1">
            <Label className="text-sm text-center">More</Label>
          </div>
          <i className="ri-arrow-down-s-line text-xl"></i>
        </div>

        <div
          className="
            max-h-[1000px] 
            opacity-100 

            lg:max-h-0 
            lg:opacity-0 
            lg:group-hover:max-h-[500px] 
            lg:group-hover:opacity-100 
            lg:transition-all 
            lg:duration-700 
            lg:ease-in-out 

            overflow-hidden
            space-y-6
          "
        >
          <div className="h-px bg-border" />

          <div>
            <Label className="text-lg font-semibold">Project Description</Label>
            <p className="mt-2 text-muted-foreground leading-relaxed">
              {project.project_description}
            </p>
          </div>

          <div>
            <Label className="text-lg font-semibold">Key Learnings</Label>
            <ol className="mt-3 list-decimal list-inside space-y-2 text-sm text-muted-foreground">
              {project.learnings.map((val: string, idx: number) => (
                <li key={idx}>{val}</li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
