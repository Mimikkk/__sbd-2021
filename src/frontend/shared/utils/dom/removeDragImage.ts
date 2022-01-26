const imageFromString = (source: string) => {
  const image = new Image();
  image.src = source;
  return image;
};

const transparent =
  "data:image/gif;base64,R0lGODlhAQABAIAAAAUEBAAAACwAAAAAAQABAAACAkQBADs=";

export const removeDragImage = (event: DragEvent) =>
  event.dataTransfer?.setDragImage(imageFromString(transparent), 0, 0);
