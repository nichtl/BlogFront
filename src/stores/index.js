// Utilities
import { createPinia } from 'pinia'
import  {registerPiniaPersistPlugin} from '@/stores/plugin/persist'

const pinia =  createPinia()

registerPiniaPersistPlugin(pinia)

export default pinia
