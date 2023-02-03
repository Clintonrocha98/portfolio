import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import styles from "./styles.module.scss";

function Header() {
  const [selectedLanguage, setSelectedLanguage] = useState("en");
  const { i18n } = useTranslation();

  const handleLanguageChange = ({ target }) => {
    const language = target.value;
    i18n.changeLanguage(language);
    setSelectedLanguage(language);
    localStorage.setItem("language", language);
  };

  useEffect(() => {
    const storedLanguage = localStorage.getItem("language");
    if (storedLanguage) {
      i18n.changeLanguage(storedLanguage);
      setSelectedLanguage(storedLanguage);
    }
    document.documentElement.setAttribute(
      "lang",
      selectedLanguage === "ptBR" ? "pt-BR" : "en"
    );
  }, [selectedLanguage]);

  return (
    <>
      <header>
        <div className="container">
          <span>
            Lenguege&#x0003A;
            <select
              value={selectedLanguage}
              onChange={(e) => handleLanguageChange(e)}
            >
              <option value="en">en</option>
              <option value="ptBR">pt-BR</option>
            </select>{" "}
          </span>
        </div>
      </header>
    </>
  );
}
export default Header;
