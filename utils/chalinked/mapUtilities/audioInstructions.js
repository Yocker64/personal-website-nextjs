/* eslint-disable no-undef */

let lastLocation = null;
let audioUnlocked = false;
let audioMap = {}; // Start empty

// Initialize audio objects only on the client
function initAudioMap() {
  if (typeof window === "undefined" || Object.keys(audioMap).length > 0) return;

  const paths = {
    left: "/chalinked/audio/left.mp3",
    right: "/chalinked/audio/right.mp3",
    "slight left": "/chalinked/audio/slight-left.mp3",
    "slight right": "/chalinked/audio/slight-right.mp3",
    "sharp left": "/chalinked/audio/sharp-left.mp3",
    "sharp right": "/chalinked/audio/sharp-right.mp3",
    straight: "/chalinked/audio/straight.mp3",
    arrive: "/chalinked/audio/arrival.mp3",
  };

  for (const [key, path] of Object.entries(paths)) {
    const audio = new Audio(path);
    audio.preload = "auto";
    audio.playsInline = true;
    audioMap[key] = audio;
  }
}

export function unlockAudio() {
  if (typeof window === "undefined") return;

  // Ensure map is created before unlocking
  initAudioMap();

  if (audioUnlocked) return;

  Object.values(audioMap).forEach((audio) => {
    const originalVolume = audio.volume;
    audio.volume = 0;
    audio.muted = true;

    audio
      .play()
      .then(() => {
        audio.pause();
        audio.currentTime = 0;
        audio.muted = false;
        audio.volume = originalVolume;
      })
      .catch((err) => {
        console.warn("Audio unlock failed:", err);
      });
  });

  audioUnlocked = true;
  console.log("Audio Engine Unlocked");
}

export function resetAudioHistory() {
  lastLocation = null;
}

export function playAudioDirection(allDirections) {
  if (!audioUnlocked || typeof window === "undefined") return;

  const currentDirection = allDirections[1];
  if (!currentDirection) return;

  if (isValid(currentDirection)) {
    lastLocation = currentDirection.location;
    playAudio(currentDirection);
  }
}

function playAudio(direction) {
  let audio;

  if (direction.type === "arrive") {
    audio = audioMap.arrive;
  } else {
    audio = audioMap[direction.modifier] || audioMap.straight;
  }

  if (audio) {
    audio.pause();
    audio.currentTime = 0;
    audio.play().catch(() => {});
  }
}

function isValid(direction) {
  return (
    direction.distance <= 50 &&
    direction.type !== "depart" &&
    JSON.stringify(direction.location) !== JSON.stringify(lastLocation)
  );
}
