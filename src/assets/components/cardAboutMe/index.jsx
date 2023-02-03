import styles from "./styles.module.scss";
import { IconDownload, IconGit, IconLinkedin } from "../SVG";

import { useTranslation } from "react-i18next";
import { useContext } from "react";
import { UserContext } from "../useContext";

export default function CardAboutMe() {
  const { t } = useTranslation();
  const user = useContext(UserContext);

  return (
    <>
      <aside className={styles.containerAboutMe + " animeLeft"}>
        <div className={styles.cardInfo}>
          <div>
            {user ? (
              <img
                className="animeRight"
                src={user[0].owner.avatar_url}
                alt="foto de perfil do Clinton Rocha"
              />
            ) : (
              <div className="loader"></div>
            )}
          </div>
          <h1>&#60;clinton rocha&#62;</h1>
          <p>Front&#8211;end Developer</p>
          <div className={styles.warrapIcons}>
            <a
              href="https://github.com/Clintonrocha98"
              title="Github"
              target="_blank"
            >
              <IconGit />
            </a>
            <a
              href="https://www.linkedin.com/in/clintonrocha/"
              title="Linkedin"
              target="_blank"
            >
              <IconLinkedin />
            </a>
            <a
              href="Clintongoncalvesrocha.pdf"
              target="_blank"
              title="curriculo download"
              download="Clintongoncalvesrocha.pdf"
            >
              <IconDownload />
            </a>
          </div>
        </div>

        <div className={styles.about}>
          <h1>&#60;{t("title")}&#62;</h1>
          <p>{t("about")}</p>
        </div>
      </aside>
    </>
  );
}
