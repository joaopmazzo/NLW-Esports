import { useEffect, useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";

import "./styles/main.css";
import logoNlwImage from "./assets/logo-nlw-esports.svg";

import { GameBanner } from "./components/GameBanner";
import { CreateAdBanner } from "./components/CreateAdBanner";
import { GameController } from "phosphor-react";
import { Input } from "./components/Form/Input";
import { DaysWeek } from "./components/Form/DaysWeek";

interface Game {
  id: string;
  bannerUrl: string;
  title: string;
  _count: {
    ads: number;
  };
}

function App() {
  const [games, setGames] = useState<Game[]>([]);

  useEffect(() => {
    fetch("http://localhost:3333/games")
      .then((response) => response.json())
      .then((data) => setGames(data));
  }, []); // ao deixar o colchetes vazio o conteudo do useEffect só sera executado uma única vez durante o ciclo de vida do componente

  return (
    <div className="max-w-[1344px] mx-auto flex flex-col items-center my-20">
      <img src={logoNlwImage} alt="logo do nlw-esports" />
      <h1 className="text-6xl text-white font-black mt-20">
        Seu{" "}
        <span className="text-transparent bg-clip-text bg-nlw-gradient">
          duo
        </span>{" "}
        está aqui.
      </h1>
      <div className="grid grid-cols-6 gap-6 mt-16">
        {games.map((game) => (
          <GameBanner
            key={game.id}
            bannerUrl={game.bannerUrl}
            bannerAlt={"Logo do jogo" + game.title}
            title={game.title}
            adsCount={game._count.ads}
          />
        ))}
      </div>

      <Dialog.Root>
        <CreateAdBanner />

        <Dialog.Portal>
          <Dialog.Overlay className="bg-black/60 inset-0 fixed" />

          <Dialog.Content className="fixed bg-[#2a2634] py-8 px-10 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-[480px] shadow-lg shadow-black/30">
            <Dialog.Title className="font-black text-3xl">
              Publique um anúncio
            </Dialog.Title>
            <Dialog.Description>
              <form className="mt-8 flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                  <label htmlFor="game" className="font-semibold">
                    Qual o game?
                  </label>
                  <Input
                    id="game"
                    type="text"
                    placeholder="Selecione o game que deseja jogar"
                  />
                </div>

                <div className="flex flex-col">
                  <label htmlFor="nickname">Seu nome (ou nickname)</label>
                  <Input
                    id="nickname"
                    type="text"
                    placeholder="Como te chamam dentro do game?"
                  />
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="yearsPlaying">Joga há quantos anos?</label>
                    <Input
                      id="yearsPlaying"
                      type="number"
                      placeholder="Tudo bem ser ZERO"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="discord">Qual o seu Discord?</label>
                    <Input
                      id="discord"
                      type="text"
                      placeholder="Usuario#0000"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="weekDays">Quando costuma jogar?</label>
                    <div className="flex gap-2">
                      <DaysWeek title="Domingo" dayWeek="D" />
                      <DaysWeek title="Segunda" dayWeek="S" />
                      <DaysWeek title="Terça" dayWeek="T" />
                      <DaysWeek title="Quarta" dayWeek="Q" />
                    </div>
                    <div className="flex justify-center gap-2">
                      <DaysWeek title="Quinta" dayWeek="Q" />
                      <DaysWeek title="Sexta" dayWeek="S" />
                      <DaysWeek title="Sabado" dayWeek="S" />
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="hourStartEnd">Qual horário do dia?</label>
                    <div className="grid grid-cols-2 gap-2">
                      <Input id="hourStart" type="time" placeholder="de" />
                      <Input id="hourEnd" type="time" placeholder="de" />
                    </div>
                  </div>
                </div>

                <div className="mt-2 flex gap-2 text-sm">
                  <Input type="checkbox" id="voiceChat" />
                  Costumo me conectar ao chat de voz
                </div>

                <footer className="mt-4 flex gap-4 justify-end font-semibold">
                  <Dialog.Close className="px-5 py-3 bg-zinc-500 rounded-md hover:bg-zinc-600">
                    Cancelar
                  </Dialog.Close>
                  <button
                    type="submit"
                    className="flex gap-3 items-center justify-center px-5 py-3 bg-violet-500 hover:bg-violet-600 rounded-md"
                  >
                    <GameController />
                    Encontrar duo
                  </button>
                </footer>
              </form>
            </Dialog.Description>
            <Dialog.Close />
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  );
}

export default App;
