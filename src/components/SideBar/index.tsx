import styles from "./index.module.scss";

const sidebarLinks = [
  "colors",
  "typography",
  "spaces",
  "buttons",
  "inputs",
  "grid",
];

const currentSupport = (name: string) =>
  name === "buttons" || name === "inputs";

interface IProps {
  currentRoot: string;
  setCurrentRoot: React.Dispatch<React.SetStateAction<string>>;
}

const SideBar = ({ currentRoot, setCurrentRoot }: IProps) => {
  const handleClick = (link: string) => {
    if (currentSupport(link)) {
      setCurrentRoot(link);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.logo}>
          <span>Dev</span>
          <span>challenges.io</span>
        </div>
        <ul>
          {sidebarLinks.map((link: string) => {
            return (
              <li
                className={`${currentSupport(link) && styles.support} ${
                  currentRoot === link && styles.active
                }`}
                onClick={() => handleClick(link)}
              >
                {link}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
