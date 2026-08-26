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
        <div className="container">
          <div className="copyright">
            <span>Copyright</span>{" "}
            <strong className="px-1 sitename">{footerData.copyright}</strong>{" "}
            <span>All Rights Reserved</span>
          </div>
          <div className="credits">
            Designed by{" "}
            <a href="https://bootstrapmade.com/">BootstrapMade</a>{" "}
            Distribuited by{" "}
            <a href="https://themewagon.com">ThemeWagon</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
