import styles from "./button.module.styl";

type TButtonProps = {
  children?: string;
  stretched?: boolean;
  type?: "button" | "submit";
};

export const Button = ({
  children,
  stretched = false,
  type = "button",
}: TButtonProps) => {
  return (
    <button
      className={`${styles.button} ${stretched ? styles.stretched : ""}`}
      type={type}
    >
      {children}
    </button>
  );
};
