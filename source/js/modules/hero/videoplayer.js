const video = document.querySelector('[data-video]');
const link = document.querySelector('[data-video-link]');
const button = document.querySelector('[data-video-button]');
const cover = document.querySelector('[data-video-poster]');

const showButton = () => {
  button.style.display = 'block';
};

const showCover = () => {
  cover.style.display = 'block';
};

const createVideo = (element) => {
  if (document.querySelector('.video__wrapper iframe')) {
    document.querySelector('.video__wrapper iframe').remove();
  }
  const iframe = document.createElement('iframe');
  iframe.title = 'YouTube video player';
  iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
  iframe.width = '100%';
  iframe.height = '100%';
  iframe.loading = 'lazy';
  iframe.style = 'border: 0;';
  (element).appendChild(iframe);
};

const initVideoPlayer = () => {
  if (video && cover && button) {
    button.addEventListener('click', () => {
      cover.style.display = 'none';
      button.style.display = 'none';
      createVideo(document.querySelector('.video__wrapper'));
      document.querySelector('.video__wrapper iframe').src = 'https://www.youtube.com/embed/9TZXsZItgdw?autoplay=1';
    });
    link.removeAttribute('href');
    video.classList.add('video--enabled');
  }
};

export {initVideoPlayer, showButton, showCover, createVideo};
