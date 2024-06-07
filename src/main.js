/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */
// Plugins
import {registerPlugins} from '@/plugins'
// 引入动画库
import "animate.css"
// Components
import App from './App.vue'


// Composables
import {createApp} from 'vue'

const app = createApp(App)

registerPlugins(app)
const win = window

if (process.env.NODE_ENV === 'development') {

  if ('__VUE_DEVTOOLS_GLOBAL_HOOK__' in win) {

    win.__VUE_DEVTOOLS_GLOBAL_HOOK__.Vue = app

  }

}


app.mount('#app')
