import { IButton } from "@/lib/types";

const ButtonType5: IButton = {
  title: "Button type 5",
  favourite: true,
  source: (
    <button
      type="submit"
      className="group relative rounded-md p-px text-[0.8125rem] font-semibold leading-6 shadow-xl shadow-zinc-950 text-white"
    >
      <span className="absolute inset-0 overflow-hidden rounded-md">
        <span className="absolute inset-0 rounded-md bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
      </span>
      <div className="relative z-[2] rounded-md bg-gradient-to-b from-zinc-800 to-zinc-900 py-1 px-4 ring-1 ring-white/10 flex items-center space-x-2">
        <span className="flex gap-2">Button 5</span>
      </div>
      <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40"></span>
    </button>
  ),
};

export default ButtonType5;
