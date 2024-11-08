let lastExecutionTime = 0;
const throttleInterval = 2000;

const speakTextCustom = (text: string) => {
  const now = Date.now();
  if (now - lastExecutionTime > throttleInterval) {
    lastExecutionTime = now;
    const synth = window.speechSynthesis;
    const utterThis = new SpeechSynthesisUtterance(text);
    const voices = synth.getVoices();

    utterThis.voice =
      voices.find((voice) => voice.lang === "es-PE") ||
      voices.find((voice) => voice.lang.startsWith("es")) ||
      voices.find((voice) => voice.name.includes("Google")) ||
      voices[0];

    utterThis.rate = 0.7;
    utterThis.pitch = 1.1;
    utterThis.volume = 1;

    synth.speak(utterThis);
  }
};

export { speakTextCustom };
