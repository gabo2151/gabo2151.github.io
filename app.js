// import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js';
import { createApp } from './src/js/vue.esm-browser.js';
import HomePage from './src/views/HomePage.js';
import HtmlPageViewer from './src/views/HtmlPageViewer.js';

export default createApp({
  data() {
    /** @type {IframePage[]} */
    const iframeList = [
      { name: 'Yay!', link: 'yay/index.html' },
      { name: 'UACh - Taller grupal - Animación JS', link: 'UACh/taller-TG_animacionJS/crateGroupRC.html' },
      { name: 'UACh - Taller grupal - Mapeo', link: 'UACh/taller-TG_mapeo/peliculas.html' },
      { name: 'UACh - Taller individual - Test', link: 'UACh/taller-TI_test/index.html' },
    ];

    return {
      year: new Date().getFullYear(),
      /** @type {IframePage} */
      iframeSelected: iframeList[3],
    };
  },
  components: {
    HomePage,
    HtmlPageViewer,
  },
});
