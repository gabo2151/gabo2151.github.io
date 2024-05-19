export default {
  template: '<h1 class="text-align-center">Year {{ year }} and still nothing</h1>',
  data: () => {
    return {
      year: new Date().getFullYear(),
    };
  },
};
