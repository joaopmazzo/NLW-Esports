import { MagnifyingGlassPlus } from "phosphor-react";
import * as Dialog from "@radix-ui/react-dialog";

export function CreateAdBanner() {
  return (
    // <div className="mt-8 rounded-lg self-stretch overflow-hidden">
    //   <div className="bg-box-gradient p-1"></div>
    //   <div className="bg-[#2a2634] px-8 py-6"></div>
    // </div>

    <div className="mt-8 pt-1 self-stretch rounded-lg overflow-hidden bg-box-gradient">
      <div className="bg-[#2a2634] px-8 py-6 flex justify-between items-center">
        <div>
          <strong className="font-black text-white text-2xl block">
            Não encontrou o seu duo?
          </strong>
          <span className="text-zinc-400 block">
            Publique um anúncio para encontrar novos players!
          </span>
        </div>
        <Dialog.Trigger className="flex items-center gap-3 rounded-md px-4 py-3 bg-violet-500 hover:bg-violet-600 text-white font-medium">
          <MagnifyingGlassPlus size={24} />
          <span>Publicar anúncio</span>
        </Dialog.Trigger>
      </div>
    </div>
  );
}
