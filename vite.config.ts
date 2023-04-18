import react from '@vitejs/plugin-react'
import ssr from 'vite-plugin-ssr/plugin'
import { UserConfig } from 'vite'

const config: UserConfig = {
  plugins: [react(), ssr()],
  build: {
    commonjsOptions: {
      transformMixedEsModules: true
    }
  },
  ssr: {
    noExternal: [
      '@adobe/react-spectrum',
      '@spectrum-icons/illustrations',
      '@spectrum-icons',
      '@spectrum-icons/ui',
      '@spectrum-icons/workflow',
      "@adobe/react-spectrum-ui"
    ]
  }
}

export default config
