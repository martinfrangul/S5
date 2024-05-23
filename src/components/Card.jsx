import Indicator from "./Indicator";
import { AnimatePresence, motion } from "framer-motion";

function Card({
  currentCardData,
  nextStepHandler,
  prevStepHandler,
  step,
  tutorialData,
  direction,
}) {

  const variants = {
    initial: (direction) => {
      return {
        x: direction > 0 ? 200 : -200,
        opacity: 0,
      };
    },
    animate: {
      x: 0,
      opacity: 1,
    },
    exit: (direction) => {
      return {
        x: direction > 0 ? -200 : 200,
        opacity: 0,
      };
    },
  };

  return (
    <>
      <div className="h-screen flex items-center justify-center">
        <div className="flex justify-center items-center">
          <div className="max-w-sm rounded overflow-hidden shadow-xl">
            <AnimatePresence initial={false} mode="wait" custom={direction}>
              <motion.img
                variants={variants}
                animate="animate"
                initial="initial"
                exit="exit"
                key={currentCardData.id}
                className="w-full p-5"
                src={currentCardData.image}
                alt="card-image"
                style={{ backgroundColor: currentCardData.bgColor }}
                custom={direction}
              />
            </AnimatePresence>
            <div className="px-6 py-4">
              <h1 className="text-2xl font-semibold p-4">
                {currentCardData.title}
              </h1>

              <p className="mb-4 text-left p-4">
                {currentCardData.description}
              </p>
              <div
                id="nav-card"
                className="flex flex-row items-center justify-between"
              >
                <Indicator step={step} tutorialData={tutorialData}></Indicator>
                <div
                  id="buttons-container"
                  className="text-center flex justify-end"
                >
                  {step > 0 && (
                    <button
                      className="bg-zinc-400 hover:bg-zinc-300 text-black font-bold py-3 px-3 mx-3 rounded-full"
                      onClick={prevStepHandler}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m18.75 4.5-7.5 7.5 7.5 7.5m-6-15L5.25 12l7.5 7.5"
                        />
                      </svg>
                    </button>
                  )}

                  {step < tutorialData.length - 1 && (
                    <button
                      className="bg-orange-800 hover:bg-orange-700 text-white py-3 px-3 mx-3 rounded-full"
                      onClick={nextStepHandler}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="w-6 h-6 rounded-full"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5"
                        />
                      </svg>
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
