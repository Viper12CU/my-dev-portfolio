import { Download } from "lucide-react";
import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("Footer");
  const year = new Date().getFullYear();

  return (
    <footer id="footer" className="footer position-relative light-background">
      <div className="container">
        <h3 className="sitename">{t("name")}</h3>
        <p>{t("description")}</p>
        <div className="social-links d-flex justify-content-center">
          <a href="https://linkedin.com/in/fabian-alejandro-lemus-865a643b1" target="_blank" rel="noopener noreferrer" aria-label="Linkedin">
            <i className="bi bi-linkedin"></i>
          </a>
          <a href="https://github.com/Viper12CU" target="_blank" rel="noopener noreferrer" aria-label="Github">
            <i className="bi bi-github"></i>
          </a>
          <a href="https://t.me/@Alex_fer4" target="_blank" rel="noopener noreferrer" aria-label="Telegram">
            <i className="bi bi-telegram"></i>
          </a>
        </div>
        <div className="footer-cv">
          <a
            href="/assets/files/cv_fabian_lemus.pdf"
            download="CV_Fabian_Lemus.pdf"
          >
            <Download size={20} />
            <span>{t("downloadCv")}</span>
          </a>
        </div>
        <div className="container">
          <div className="copyright">
            <span>{t("copyright")}</span>{" "}
            <strong className="px-1 sitename">{`${year} ${t("name")}`}</strong>{" "}
            <span>{t("allRights")}</span>
          </div>
            <span>{t("templateNote")} </span>
            <a
              href="https://github.com/Viper12CU/my-dev-portfolio"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("viewRepo")}
            </a>
          </div>
      </div>
    </footer>
  );
}
