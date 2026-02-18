import {
  MapPin,
  Phone,
  Mail,
  MessageCircle,
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  Globe,
} from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    label: "Location",
    value: "Ahmedabad, India",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91-887-563-0033",
  },
  {
    icon: Mail,
    label: "Email",
    value: "shivang007@gmail.com",
  },
];

const socialLinks = [
  {
    icon: MessageCircle,
    label: "WhatsApp",
    link: "https://wa.me/918875630033",
  },
  {
    icon: Facebook,
    label: "Facebook",
    link: "https://www.facebook.com/share/1C4uiXrsmo/?mibextid=wwXIfr",
  },
  {
    icon: Instagram,
    label: "Instagram",
    link: "https://www.instagram.com/drshivang.patel?igsh=MW9sZmlzMWdlOW5hMA==",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    link: "https://www.linkedin.com/in/dr-shivang-patel-a244103a",
  },
  {
    icon: Youtube,
    label: "YouTube",
    link: "https://www.youtube.com/@drshivangpatel",
  },
  {
    icon: Globe,
    label: "Google",
    link: "https://share.google/55yTWkjBYw1FMrOAu",
  },
];

const Contact = () => {
  return (
    <section id="contact" className="section-padding section-alt">
      <div className="container-narrow">
        <h2 className="mb-4 text-center">Contact</h2>

        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          Connect directly for professional inquiries, consultations, or collaborations.
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          
          {/* CONTACT INFO */}
          <div>
            <h3 className="text-xl font-semibold mb-6">
              Contact Information
            </h3>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <info.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">
                      {info.label}
                    </p>
                    <p>{info.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* SOCIAL LINKS */}
          <div>
            <h3 className="text-xl font-semibold mb-6">
              Connect on Social Media
            </h3>

            <div className="grid grid-cols-2 gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 rounded-xl border hover:bg-primary/5 transition hover:shadow-md"
                >
                  <social.icon className="w-5 h-5 text-primary" />
                  <span className="font-medium">{social.label}</span>
                </a>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
