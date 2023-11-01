import { Flex } from "src/components/flex";
import { Input } from "src/components/input";
import styles from "./form.module.styl";
import { Link } from "../../../../components/link";

export const Form = () => {
  return (
    <div className={styles.root}>
      <Flex direction="column" gap="40px">
        <Flex direction="column" gap="20px">
          <Input
            disabled
            name="email"
            placeholder="sheldon123@bbt.com"
            label="Почта"
          />
          <Input disabled name="login" placeholder="sheldon123" label="Логин" />
          <Input disabled name="first_name" placeholder="Шелдон" label="Имя" />
          <Input
            disabled
            name="second_name"
            placeholder="Купер"
            label="Фамилия"
          />
          <Input
            disabled
            name="display_name"
            placeholder="Маэстро"
            label="Имя в чате"
          />
          <Input disabled name="phone" placeholder="911" label="Телефон" />
        </Flex>
        <Flex direction="column" gap="15px">
          <Link>Изменить данные</Link>
          <Link>Изменить пароль</Link>
          <Link type="danger" to="/authorization">
            Выйти
          </Link>
        </Flex>
      </Flex>
    </div>
  );
};
