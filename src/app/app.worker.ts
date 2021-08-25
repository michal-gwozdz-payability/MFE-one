/// <reference lib="webworker" />

addEventListener('rail', ({ data }: any) => {
  postMessage(data);
});
