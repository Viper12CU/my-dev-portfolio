import { Download } from "lucide-react";
import { footerData } from "@/data/footer";
import SocialLink from "@/components/atoms/SocialLink";

export default function Footer() {
  return (
    <footer id="footer" className="footer position-relative light-background">
      <div className="container">
        <h3 className="sitename">{footerData.name}</h3>
        <p>{footerData.description}</p>
        <div className="social-links d-flex justify-content-center">
          {footerData.socialLinks.map((link, i) => (
            <SocialLink key={i} icon={link.icon} href={link.href} />
          ))}
        </div>
        <div className="footer-cv">
          <a
            href="/assets/files/cv_fabian_lemus.pdf"
            download="CV_Fabian_Lemus.pdf"
          >
            <Download size={20} />
            <span>Descargar CV</span>
          </a>
        </div>
        <div className="container">
          <div className="copyright">
            <span>Copyright</span>{" "}
            <strong className="px-1 sitename">{footerData.copyright}</strong>{" "}
            <span>All Rights Reserved</span>
          </div>
            <span>Template and code on my GitHub. </span>
            <a
              href="https://github.com/Viper12CU/my-dev-portfolio"
              target="_blank"
              rel="noopener noreferrer"
            >
              View this website repository
            </a>
          </div>
      </div>
    </footer>
  );
}
