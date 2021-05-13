import * as $ from 'jQuery';

function createAnalytics() {
  let counter = 0;
  let destroyed = false;

  // eslint-disable-next-line no-plusplus
  const listener = () => counter++;

  $(document).on('click', listener);

  return {
    destroy() {
      $(document).off('click', listener);
      destroyed = true;
    },

    getClicks() {
      if (destroyed) {
        return `Analytics is destroyed. Total clicks = ${counter}`;
      }
      return counter;
    }
  };
}

window.analytics = createAnalytics();
