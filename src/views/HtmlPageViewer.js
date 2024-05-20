export default {
  template: `
<h1 class="text-align-center">{{ webpage.name }}</h1>
<iframe class="iframe-app" :src="webpage.link"></iframe>
`,
  props: {
    webpage: {
      type: Object,
      required: true,
    },
  },
};
