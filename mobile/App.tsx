import { StatusBar } from "react-native";
import {
  useFonts,
  Inter_400Regular,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_900Black,
} from "@expo-google-fonts/inter";

import { Background } from "./src/components/Background";
import { Loading } from "./src/components/Loading";
import { Home } from "./src/screens/Home";

export default function App() {
  // usado para carregar as font na aplicação e o "fontsLoaded" é usado para saber se nossa fonte foi carregada ou não
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_900Black,
  });

  return (
    <Background>
      {/* usado para manipular a barra superior de status dos celulares */}
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      {/* só carregaram o component "Home" se as fontes foram carregadas, senão ficara mostrando um loading na tela */}
      {fontsLoaded ? <Home /> : <Loading />}
    </Background>
  );
}
