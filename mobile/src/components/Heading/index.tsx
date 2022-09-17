import { View, Text, ViewProps } from "react-native";

import { styles } from "./styles";

// "ViewProps" serve para passarmos alguns atributos adicionais para o nosso component "View"
interface Props extends ViewProps {
  title: string;
  subtitle: string;
}

// "...rest" serve para indicar que podemos passar mais parametros que não estão explicitos, esse "...rest" no nosso caso serve para podermos utilizar os parametos de "ViewProps"
export function Heading({ title, subtitle, ...rest }: Props) {
  return (
    <View style={styles.container} {...rest}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
    </View>
  );
}
