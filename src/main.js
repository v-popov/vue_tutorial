import { createApp } from 'vue'

// We can create our component as a regular JS object:
// const App = {
//   data,
//   methods
// }

// Or alternatively we can create it as a Single File Component: src/App.vue
// and import it as follows:
import App from './App'




createApp(App).mount('#app') // there is a div with "app" id in index.html
