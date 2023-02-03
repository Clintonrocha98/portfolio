import { useContext } from "react";
import { UserContext } from "../useContext";
import styles from "./styles.module.scss";
import {
  IconCss,
  IconHtml,
  IconReact,
  IconJavascript,
  IconSass,
  IconEye,
  IconGit,
} from "../SVG/index";

function Icons(topic) {
  const mapping = {
    css: <IconCss key={topic} title={topic} />,
    html: <IconHtml key={topic} title={topic} />,
    react: <IconReact key={topic} title={topic} />,
    javascript: <IconJavascript key={topic} title={topic} />,
    sass: <IconSass key={topic} title={topic} />,
  };
  return mapping[topic] || null;
}
function Projects() {
  const user = useContext(UserContext);

  return (
    <>
      <aside className={styles.containerProjects + " animeRight"}>
        <div className={styles.projects}>
          {user ? (
            user.map(({ id, name, description, html_url, homepage, topics }) =>
              name === "Clintonrocha98" ? null : (
                <div key={id} className={styles.project + " animeRight"}>
                  <div>
                    <h2>{name}</h2>
                    <p>{description}</p>
                  </div>

                  <div className={styles.containerLinks}>
                    <div className={styles.links}>
                      <a
                        href={html_url}
                        title="Github repository"
                        target="_blank"
                      >
                        <IconGit />
                      </a>

                      {homepage && (
                        <a href={homepage} title="Project page" target="_blank">
                          <IconEye />
                        </a>
                      )}
                    </div>

                    <div className={styles.warrapIcons}>
                      {topics.map((topic) => (
                        <span key={topic} title={topic}>
                          {Icons(topic)}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )
            )
          ) : (
            <div className="loader"></div>
          )}
        </div>
      </aside>
    </>
  );
}
export default Projects;
