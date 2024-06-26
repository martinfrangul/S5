import { useState } from "react";
import "./App.css";
import Card from "./components/Card";

function App() {

  const tutorialData = [
    {
      title: "Usa ChatGPT en vez de leer documentación",
      description:
        "¿Documentación? ¿Para qué? Pregúntale a tu robot amigo y ahorra lectura innecesaria",
      bgColor: "#4DA2A9",
      image: "/src/assets/time_managment.svg",
      id: 0
    },
    {
      title: "Cuando todo pete, haz siempre lo mismo",
      description:
        "Haz siempre lo mismo si no te sale. Es una muy mala idea debuggear el código",
      bgColor: "#D3D4D9",
      image: "/src/assets/programming.svg",
      id: 1
    },
    {
      title: "Deprímete muchísimo",
      description:
        "Cae en un pozo depresivo cuando no encuentres la forma de alinear perfectamente un div",
      bgColor: "#FFD167",
      image: "/src/assets/meditation.svg",
      id: 2
    },
  ];
  const [step, setStep] = useState(0);
  const [direction, setDirection] = useState(0)

  const nextStep = () => {
    setDirection(1)
    if (step < tutorialData.length - 1) {
      setStep((prev) => prev + 1);
    }
  };

  const prevStep = () => {
    setDirection(-1)

    if (step > 0) {
      setStep((prev) => prev - 1);
    }
  };

  const changeStepFromIndicator = (index) => {
    setStep(index)
  }


  return (
    <>
        <Card
          currentCardData={tutorialData[step]}
          step={step}
          nextStepHandler={nextStep}
          prevStepHandler={prevStep}
          tutorialData={tutorialData}
          direction={direction}
          changeStep={changeStepFromIndicator}
        ></Card>
    </>
  );
}

export default App;
