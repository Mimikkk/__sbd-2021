const dragContainer = "drag__container";

const getContainer = () => document.getElementById(dragContainer)!;
const Container = () => <span id={dragContainer} />;

export const useDrag = () => ({ getContainer, Container } as const);
