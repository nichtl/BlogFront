/**
 * Pinia Persist Plugin
 * Pinia 持久化插件
 * @link https://prazdevs.github.io/pinia-plugin-persistedstate/zh/guide/
 *
 */
import { createPersistedState } from 'pinia-plugin-persistedstate';
import {AesEncryption } from '@/utils/cipher';
import { cacheCipher, SHOULD_ENABLE_STORAGE_ENCRYPTION } from '@/setting/encryptionSetting';

export const PERSIST_KEY_PREFIX =  process.env.VITE_GLOB_APP_TITLE

const persistEncryption = new  AesEncryption({
  key: cacheCipher.key,
  iv: cacheCipher.iv,
})

/**
 * Custom serializer for serialization and deserialization of storage data
 * 自定义序列化器，用于序列化和反序列化存储数据
 *
 * @param shouldEnableEncryption whether to enable encryption for storage data 是否启用存储数据加密
 * @returns serializer
 */
function customSerializer(shouldEnableEncryption)  {
  if (shouldEnableEncryption) {
    return {
      deserialize: (value) => {
        const decrypted = persistEncryption.decrypt(value);
        return JSON.parse(decrypted);
      },
      serialize: (value) => {
        const serialized = JSON.stringify(value);
        return persistEncryption.encrypt(serialized);
      },
    };
  } else {
    return {
      deserialize: (value) => {
        return JSON.parse(value);
      },
      serialize: (value) => {
        return JSON.stringify(value);
      },
    };
  }
}

/**
 * Register Pinia Persist Plugin
 * 注册 Pinia 持久化插件
 *
 * @param pinia Pinia instance Pinia 实例
 */
export function registerPiniaPersistPlugin(pinia) {
  pinia.use(createPersistedState(createPersistedStateOptions(PERSIST_KEY_PREFIX)));
}

/**
 * Create Persisted State Options
 * 创建持久化状态选项
 *
 * @param keyPrefix prefix for storage key 储存键前缀
 * @returns persisted state factory options
 */
export function createPersistedStateOptions(keyPrefix) {
  return {
    storage: localStorage,
    key: (id) => `${keyPrefix}__${id}`,
    serializer: customSerializer(SHOULD_ENABLE_STORAGE_ENCRYPTION),
  };
}
