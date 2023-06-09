// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	css: ['@/assets/tailwindcss.css'],
	modules: ['@nuxthq/ui'],
	runtimeConfig: {
		public: {
			apiURL: 'https://api.jerpbd.com:8081/api',
		}
	}
});
 