const container = document.querySelector('[data-audio-wrapper]');
const link = document.querySelector('[data-audio-link]');
const button = document.querySelector('[data-audio-button]');
const cover = document.querySelector('[data-audio-poster]');

const showAudioButton = () => {
  button.style.display = 'block';
};

const showAudioCover = () => {
  cover.style.display = 'block';
};

const createAudio = (element) => {
  if (document.querySelector('.audio-wrapper iframe')) {
    document.querySelector('.audio-wrapper iframe').remove();
  }
  const iframe = document.createElement('iframe');
  iframe.setAttribute('title', 'Yandex audioplayer');
  iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
  iframe.width = '100%';
  iframe.height = '100%';
  iframe.loading = 'lazy';
  iframe.style = 'border: 0;';
  (element).appendChild(iframe);
};

const initAudioPlayer = () => {
  if (container && cover && button) {
    button.addEventListener('click', () => {
      cover.style.display = 'none';
      button.style.display = 'none';
      createAudio(document.querySelector('.audio-wrapper'));
      document.querySelector('.audio-wrapper iframe').src = 'https://music.yandex.ru/iframe/#track/116266134/25474374';
    });
    link.removeAttribute('href');
    container.classList.add('audio--enabled');
  }
};

export {initAudioPlayer, showAudioButton, showAudioCover, createAudio};
