import styles from "./input.module.styl";

type TInputProps = {
  disabled?: boolean;
  label?: string;
  name?: string;
  placeholder?: string;
  type?: "text" | "password";
  value?: string;
};

export const Input = ({
  disabled = false,
  label,
  name,
  placeholder = "",
  type = "text",
  value = "",
}: TInputProps) => {
  return (
    <div className={styles.root}>
      {label && <div className={styles.label}>{label}</div>}
      <input
        disabled={disabled}
        autocomplete="off"
        type={type}
        className={styles.input}
        name={name}
        placeholder={placeholder}
        value={value}
      />
      <div className={styles.error}></div>
    </div>
  );
};
