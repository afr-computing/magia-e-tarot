import { getConfig } from "./config";

export default function Home() {
  const { test } = getConfig();
  return (
    <div>
      <h1 className="text-7xl font-extrabold text-center">
        Magia e tarot
      </h1>
        <span>{test}</span>
    </div>
  );
}
