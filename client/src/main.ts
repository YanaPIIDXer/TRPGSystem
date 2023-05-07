import { createApp } from "vue";
import App from "./App.vue";

const app = createApp(App);

// Vue-Router
import routes from "./routes";
app.use(routes);

app.mount("#app");
