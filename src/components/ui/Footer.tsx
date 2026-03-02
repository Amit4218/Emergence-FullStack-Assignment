import { Badge } from "./badge";
import { Label } from "./label";

function Footer() {
  return (
    <div className="hidden lg:block fixed bottom-0 w-[60%] p-1">
      <footer className="flex py-1 gap-1 z-99 bg-primary font-bold font-sans rounded-sm justify-start items-center px-2 overflow-x-auto flex-wrap">
        <div className="font-extrabold text-xs">
          <Label className="text-secondary-foreground">Shortcuts : </Label>
        </div>
        <Badge className="font-sans">alt+l : toggle theme</Badge>
        <Badge className="font-sans">alt+d : Download resume</Badge>
        <Badge className="font-sans">alt+h : Home</Badge>
        <Badge className="font-sans">alt+c : Contact</Badge>
        <Badge className="font-sans">alt+a : About</Badge>
      </footer>
    </div>
  );
}

export default Footer;
