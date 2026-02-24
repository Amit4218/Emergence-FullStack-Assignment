import { Label } from "@/components/ui/label";

function Contact() {
  return (
    <div className="p-2 text-sm leading-relaxed">
      {/* Header */}
      <div className="flex items-center gap-2 mb-2">
        <i className="ri-mail-line text-xl"></i>
        <Label className="text-3xl font-bold">Contact</Label>
      </div>

      <p className="mt-2 text-muted-foreground max-w-md">
        I'm always open to discussing new projects, collaboration opportunities,
        or backend-focused roles. Feel free to reach out.
      </p>

      <hr className="my-6" />

      {/* Contact Info */}
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <i className="ri-mail-send-line text-lg"></i>
          <a href="mailto:amitbhagat621@gmail.com" className="hover:underline">
            amitbhagat621@gmail.com
          </a>
        </div>

        <div className="flex items-center gap-3">
          <i className="ri-github-line text-lg"></i>
          <a
            href="https://github.com/Amit4218"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            github.com/Amit4218
          </a>
        </div>

        <div className="flex items-center gap-3">
          <i className="ri-linkedin-box-line text-lg"></i>
          <a
            href="https://linkedin.com/in/amit-bhagat-109a7a2b2"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            linkedin.com/in/amit-bhagat
          </a>
        </div>

        <div className="flex items-center gap-3">
          <i className="ri-map-pin-2-line text-lg"></i>
          <span>Sikkim, India</span>
        </div>
      </div>

      <hr className="my-6" />

      {/* Minimal Contact Form */}
      <div>
        <Label className="text-2xl font-bold">Send a Message</Label>

        <form className="mt-4 space-y-4 max-w-md">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full border-b border-border bg-transparent outline-none py-1 text-sm"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="w-full border-b border-border bg-transparent outline-none py-1 text-sm"
          />

          <textarea
            placeholder="Your Message"
            rows={4}
            className="w-full border-b border-border bg-transparent outline-none py-1 text-sm resize-none"
          />

          <button
            type="submit"
            className="mt-2 px-4 py-1 text-xs border border-border rounded-md hover:bg-muted transition-all duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
