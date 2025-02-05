// vite.config.js
import { defineConfig } from "file:///C:/Users/Lenovo/Desktop/hydrogen-quickstart/node_modules/vite/dist/node/index.js";
import { hydrogen } from "file:///C:/Users/Lenovo/Desktop/hydrogen-quickstart/node_modules/@shopify/hydrogen/dist/vite/plugin.js";
import { oxygen } from "file:///C:/Users/Lenovo/Desktop/hydrogen-quickstart/node_modules/@shopify/mini-oxygen/dist/vite/plugin.js";
import { vitePlugin as remix } from "file:///C:/Users/Lenovo/Desktop/hydrogen-quickstart/node_modules/@remix-run/dev/dist/index.js";
import tsconfigPaths from "file:///C:/Users/Lenovo/Desktop/hydrogen-quickstart/node_modules/vite-tsconfig-paths/dist/index.mjs";
var vite_config_default = defineConfig({
  plugins: [
    hydrogen(),
    oxygen(),
    remix({
      presets: [hydrogen.preset()],
      future: {
        v3_fetcherPersist: true,
        v3_relativeSplatPath: true,
        v3_throwAbortReason: true,
        v3_lazyRouteDiscovery: true
      }
    }),
    tsconfigPaths()
  ],
  build: {
    // Allow a strict Content-Security-Policy
    // withtout inlining assets as base64:
    assetsInlineLimit: 0
  },
  ssr: {
    optimizeDeps: {
      /**
       * Include dependencies here if they throw CJS<>ESM errors.
       * For example, for the following error:
       *
       * > ReferenceError: module is not defined
       * >   at /Users/.../node_modules/example-dep/index.js:1:1
       *
       * Include 'example-dep' in the array below.
       * @see https://vitejs.dev/config/dep-optimization-options
       */
      include: []
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxMZW5vdm9cXFxcRGVza3RvcFxcXFxoeWRyb2dlbi1xdWlja3N0YXJ0XCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxMZW5vdm9cXFxcRGVza3RvcFxcXFxoeWRyb2dlbi1xdWlja3N0YXJ0XFxcXHZpdGUuY29uZmlnLmpzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9DOi9Vc2Vycy9MZW5vdm8vRGVza3RvcC9oeWRyb2dlbi1xdWlja3N0YXJ0L3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IHtkZWZpbmVDb25maWd9IGZyb20gJ3ZpdGUnO1xuaW1wb3J0IHtoeWRyb2dlbn0gZnJvbSAnQHNob3BpZnkvaHlkcm9nZW4vdml0ZSc7XG5pbXBvcnQge294eWdlbn0gZnJvbSAnQHNob3BpZnkvbWluaS1veHlnZW4vdml0ZSc7XG5pbXBvcnQge3ZpdGVQbHVnaW4gYXMgcmVtaXh9IGZyb20gJ0ByZW1peC1ydW4vZGV2JztcbmltcG9ydCB0c2NvbmZpZ1BhdGhzIGZyb20gJ3ZpdGUtdHNjb25maWctcGF0aHMnO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICBwbHVnaW5zOiBbXG4gICAgaHlkcm9nZW4oKSxcbiAgICBveHlnZW4oKSxcbiAgICByZW1peCh7XG4gICAgICBwcmVzZXRzOiBbaHlkcm9nZW4ucHJlc2V0KCldLFxuICAgICAgZnV0dXJlOiB7XG4gICAgICAgIHYzX2ZldGNoZXJQZXJzaXN0OiB0cnVlLFxuICAgICAgICB2M19yZWxhdGl2ZVNwbGF0UGF0aDogdHJ1ZSxcbiAgICAgICAgdjNfdGhyb3dBYm9ydFJlYXNvbjogdHJ1ZSxcbiAgICAgICAgdjNfbGF6eVJvdXRlRGlzY292ZXJ5OiB0cnVlLFxuICAgICAgfSxcbiAgICB9KSxcbiAgICB0c2NvbmZpZ1BhdGhzKCksXG4gIF0sXG4gIGJ1aWxkOiB7XG4gICAgLy8gQWxsb3cgYSBzdHJpY3QgQ29udGVudC1TZWN1cml0eS1Qb2xpY3lcbiAgICAvLyB3aXRodG91dCBpbmxpbmluZyBhc3NldHMgYXMgYmFzZTY0OlxuICAgIGFzc2V0c0lubGluZUxpbWl0OiAwLFxuICB9LFxuICBzc3I6IHtcbiAgICBvcHRpbWl6ZURlcHM6IHtcbiAgICAgIC8qKlxuICAgICAgICogSW5jbHVkZSBkZXBlbmRlbmNpZXMgaGVyZSBpZiB0aGV5IHRocm93IENKUzw+RVNNIGVycm9ycy5cbiAgICAgICAqIEZvciBleGFtcGxlLCBmb3IgdGhlIGZvbGxvd2luZyBlcnJvcjpcbiAgICAgICAqXG4gICAgICAgKiA+IFJlZmVyZW5jZUVycm9yOiBtb2R1bGUgaXMgbm90IGRlZmluZWRcbiAgICAgICAqID4gICBhdCAvVXNlcnMvLi4uL25vZGVfbW9kdWxlcy9leGFtcGxlLWRlcC9pbmRleC5qczoxOjFcbiAgICAgICAqXG4gICAgICAgKiBJbmNsdWRlICdleGFtcGxlLWRlcCcgaW4gdGhlIGFycmF5IGJlbG93LlxuICAgICAgICogQHNlZSBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL2RlcC1vcHRpbWl6YXRpb24tb3B0aW9uc1xuICAgICAgICovXG4gICAgICBpbmNsdWRlOiBbXSxcbiAgICB9LFxuICB9LFxufSk7XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQTZULFNBQVEsb0JBQW1CO0FBQ3hWLFNBQVEsZ0JBQWU7QUFDdkIsU0FBUSxjQUFhO0FBQ3JCLFNBQVEsY0FBYyxhQUFZO0FBQ2xDLE9BQU8sbUJBQW1CO0FBRTFCLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFNBQVM7QUFBQSxJQUNQLFNBQVM7QUFBQSxJQUNULE9BQU87QUFBQSxJQUNQLE1BQU07QUFBQSxNQUNKLFNBQVMsQ0FBQyxTQUFTLE9BQU8sQ0FBQztBQUFBLE1BQzNCLFFBQVE7QUFBQSxRQUNOLG1CQUFtQjtBQUFBLFFBQ25CLHNCQUFzQjtBQUFBLFFBQ3RCLHFCQUFxQjtBQUFBLFFBQ3JCLHVCQUF1QjtBQUFBLE1BQ3pCO0FBQUEsSUFDRixDQUFDO0FBQUEsSUFDRCxjQUFjO0FBQUEsRUFDaEI7QUFBQSxFQUNBLE9BQU87QUFBQTtBQUFBO0FBQUEsSUFHTCxtQkFBbUI7QUFBQSxFQUNyQjtBQUFBLEVBQ0EsS0FBSztBQUFBLElBQ0gsY0FBYztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFXWixTQUFTLENBQUM7QUFBQSxJQUNaO0FBQUEsRUFDRjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
