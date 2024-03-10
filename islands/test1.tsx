import type { Signal } from "@preact/signals";
import { Button } from "../components/Button.tsx";

export default function Testisland() {
  const handleClick = () => {
    // GoogleのURLにリダイレクト
    window.location.href = "https://google.co.jp/";
  };
  return (
    <div class="px-4 py-8 mx-auto bg-[#86efac]">
      <h1>welcome to test page</h1>
      <div class="flex gap-8 py-6">
        <Button onClick={handleClick}>waa</Button>
      </div>
    </div>
  );
}
