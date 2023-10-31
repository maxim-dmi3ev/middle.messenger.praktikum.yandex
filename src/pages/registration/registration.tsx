import { Input } from "src/components/input";
import { Flex } from "src/components/flex";
import { Button } from "../../components/button";
import { Link } from "../../components/link";
import styles from "./registration.module.styl";

export const Registration = () => {
  return (
    <div className={styles.root}>
      <Flex direction="column" gap="30px">
        <h1 className={styles.title}>Регистрация</h1>
        <Input name="email" placeholder="Введите почту" label="Почта" />
        <Input name="login" placeholder="Введите логин" label="Логин" />
        <Input name="first_name" placeholder="Введите имя" label="Имя" />
        <Input
          name="second_name"
          placeholder="Введите фамилию"
          label="Фамилия"
        />
        <Input name="phone" placeholder="Введите телефон" label="Телефон" />
        <Input
          name="password"
          placeholder="Введите пароль"
          label="Пароль"
          type="password"
        />
        <Input
          name="password"
          placeholder="Введите пароль"
          label="Пароль (еще раз)"
          type="password"
        />
      </Flex>
      <Flex direction="column" gap="10px" align="center">
        <Button stretched>Создать профиль</Button>
        <Link to="/authorization">Войти</Link>
      </Flex>
    </div>
  );
};
