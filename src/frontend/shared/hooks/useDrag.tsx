const dragContainer = "drag__container";

const getElement = () => document.getElementById(dragContainer)!;
const Container = () => <span id={dragContainer} />;

export const useDrag = () => {
  return { getElement, Container } as const;
};
