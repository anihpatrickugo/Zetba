import { createClient } from '@dynamic-labs/client'
import { ReactNativeExtension } from '@dynamic-labs/react-native-extension'

export const dynamicClient = createClient({
  environmentId: 'fae71c9f-8b24-4534-b955-405c7689fc1d',
}).extend(ReactNativeExtension())

