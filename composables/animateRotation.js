export const useAnimateRotation = () => {
  const el = ref(null);
  const { animate, startTime, currentTime, playbackRate } = useAnimate(
    el,
    { transform: "rotate(360deg)" },
    2000
  );

  return {
    el,
    animate,
    startTime,
    currentTime,
    playbackRate,
  };
};
