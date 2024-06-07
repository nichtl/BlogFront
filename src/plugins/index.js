/**
 * plugins/index.js
 *
 * Automatically included in `./src/main.js`
 */

// Plugins
import vuetify from './vuetify'
import pinia from '@/stores'
import router from '@/router'
import VMdPreviewHtml from './htmlPreview'
import VMdPreview from './mdPreview'
import VMdEditor from './mdEditor'
//import MdEditor from './mdEditorV3';

export function registerPlugins (app) {
  app
    .use(vuetify)
    .use(router)
    .use(pinia)
    .use(VMdPreviewHtml)
    .use(VMdPreview)
    .use(VMdEditor)
    //.use(MdEditor)
}
