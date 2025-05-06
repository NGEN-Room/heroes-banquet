import kaia from "@/data/heroes/kaia/chObject.js";
import { applyModifiers } from "@/engine/statModifiers";

export default function BattlePage() {
  const modified = applyModifiers(kaia);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Battle Testing</h1>
      <pre className="mt-4 bg-gray-100 p-4 rounded">
        {JSON.stringify(modified, null, 2)}
      </pre>
    </div>
  );
}