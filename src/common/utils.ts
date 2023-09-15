export const delay = (time: number) =>
  new Promise<void>((resolve) => setTimeout(() => resolve(), time));

export const getRandomColor = () => `#${Math.floor(Math.random()*16777215).toString(16)}`;