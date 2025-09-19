    import { createVuetify } from 'vuetify'
    import { aliases, mdi } from 'vuetify/iconsets/mdi'
    import '@mdi/font/css/materialdesignicons.css' // импорт иконок Material Design

    export default defineNuxtPlugin(nuxtApp => {
      const vuetify = createVuetify({
        icons: {
          defaultSet: 'mdi',
          aliases,
          sets: {
            mdi,
          },
        },
      })

      nuxtApp.vueApp.use(vuetify)
    })