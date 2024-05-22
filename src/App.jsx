import { useState } from "react";
import "./App.css";
import Card from "./components/Card";

function App() {
  const [step, setStep] = useState(0);

  const nextStep = () => {
    if (step < tutorialData.length - 1) {
      setStep((prev) => prev + 1);
    }
  };

  const prevStep = () => {
    if (step > 0) {
      setStep((prev) => prev - 1);
    }
  };

  const tutorialData = [
    {
      title: "Deprímete muchísimo",
      description:
        "Cae en un pozo depresivo cuando no encuentres la forma de alinear perfectamente un div",
      bgColor: "red",
      image: "/src/assets/meditation.svg",
    },
    {
      title: "Cuando todo pete, haz siempre lo mismo",
      description:
        "Haz siempre lo mismo si no te sale. Es una muy mala idea debuggear el código",
      bgColor: "red",
      image: "/src/assets/programming.svg",
    },
    {
      title: "Usa ChatGPT en vez de leer documentación",
      description:
        "Documentación? Para qué? Pregúntale a tu robot amigo y ahorra lectura innecesaria",
      bgColor: "red",
      image: "/src/assets/time_managment.svg",
    },
  ];

  return (
    <>
        <Card
          currentCardData={tutorialData[step]}
          nextStepHandler={nextStep}
          prevStepHandler={prevStep}
        ></Card>
    </>
  );
}

export default App;
