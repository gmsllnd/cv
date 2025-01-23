const { createApp } = Vue;

createApp({
  data() {
    return {
      msg: "hello world",
    };
  },
  //   template: `<div>count is {{ msg }}</div>`
}).mount("#app");
