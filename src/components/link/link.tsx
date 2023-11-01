import styles from "./link.module.styl";

type TLinkProps = {
  children?: string;
  to?: string;
  type?: "prime" | "danger";
};

export const Link = ({ children, to, type = "prime" }: TLinkProps) => {
  return (
    <a
      href={to}
      className={`${styles.link} ${
        type === "prime" ? styles.prime : styles.danger
      }`}
    >
      {children}
    </a>
  );
};
