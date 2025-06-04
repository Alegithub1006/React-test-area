import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { KeysJsx } from "./components/02-keys-jsx";
export default function FrameworksImage() {
  return (
    <section>
      <img src={reactLogo} className="logo react" alt="React logo" />
      <img src={viteLogo} className="logo" alt="Vite logo" />
    </section>
  );
}

export function Gallery() {
  const mytext = "hola react";
  const mylogo = <img src="./assets/react.svg" alt="react-img" />;
  return (
    <section>
      <FrameworksImage />
      <FrameworksImage />
      <FrameworksImage />
      <FrameworksImage />
      <p>
        texto con imagen {mytext} {mylogo}{" "}
      </p>
      <KeysJsx />
    </section>
  );
}
