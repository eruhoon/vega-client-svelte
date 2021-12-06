class SoundServiceInit {
  playNotificationSound() {
    const audio = new Audio('/assets/sound/notification-sound.mp3');
    audio.play();
  }
}

export const SoundService = new SoundServiceInit();
