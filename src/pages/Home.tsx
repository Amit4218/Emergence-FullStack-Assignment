import { useTheme } from "@/contexts/themProvider";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import Projects from "./Projects";
import { Label } from "@/components/ui/label";
import { useEffect, useState } from "react";
import { getProjects } from "@/api/projects";

function Home() {
  const languagesImge = [
    { img: "/python.png", alt: "python", hover: "python" },
    { img: "/js.png", alt: "javaScript", hover: "javaScript" },
    { img: "/dart.png", alt: "dart", hover: "dart" },
  ];

  const [project, setProjects] = useState([]);
  console.log(project);

  const { theme } = useTheme();

  let cat_image = theme == "dark" ? "cat_white.png" : "cat_black.png";

  useEffect(() => {
    const fetchProjects = async () => {
      const result = await getProjects();
      setProjects(result);
    };
    fetchProjects();
  }, []);

  return (
    <>
      <section className="p-2 flex flex-col lg:flex-row gap-1 sm:mt-6">
        <div className="w-full lg:w-1/2 mt-2">
          <div className="font-extrabold text-xl md:text-3xl mb-2">
            <h1>Hi, I'm Amit Bhagat</h1>
          </div>
          <div className="font-semibold text-xs md:text-sm mb-1">
            <strong>
              <h4>Full-Stack Developer</h4>
            </strong>
          </div>
          <div className="text-xs py-1">
            <span>
              Specializing in both <strong>WEB</strong> and{" "}
              <strong>MOBILE</strong> frameworks
            </span>
          </div>
          <div className="text-xs mt-1 flex flex-col sm:flex-row gap-2 font-semibold text-wrap">
            <div className="ri-map-pin-2-fill"> Sikkim, India</div>
            <div id="languages" className="text-xs flex gap-1">
              <div className="text-xs font-semibold">Prefered languages: </div>
              {languagesImge.map((val, idx) => (
                <HoverCard key={idx} openDelay={100} closeDelay={100}>
                  <HoverCardTrigger asChild>
                    <img
                      key={idx}
                      src={`/languages${val.img}`}
                      alt={val.alt}
                      className="h-4"
                    />
                  </HoverCardTrigger>
                  <HoverCardContent
                    className="w-auto px-2 py-1 text-xs"
                    side={"top"}
                  >
                    {val.hover}
                  </HoverCardContent>
                </HoverCard>
              ))}
            </div>
          </div>
          <div className="flex gap-4 mt-3">
            <a href="/resume-amit-bhagat.pdf" download>
              <button className="px-4 py-1 text-xs border rounded-md hover:bg-muted transition-all duration-300">
                Download Resume
              </button>
            </a>
          </div>
        </div>

        {/* cat image */}
        <div className="hidden justify-center items-center lg:flex lg:w-1/2 -mt-13 ">
          <img src={cat_image} alt="cat_image" className="h-70 w-auto" />
        </div>
      </section>
      <div className="p-2">
        <hr />
        <Label className="text-3xl font-bold py-2">Projects</Label>
        <hr />
      </div>
      <div className="mt-2">
        {project.map((project, idx) => (
          <Projects key={idx} project={project} />
        ))}
        <hr />
      </div>
    </>
  );
}

export default Home;
