This project was bootstrapped with [Vue CLI 3](https://cli.vuejs.org/), and built by Typescript.

This project will show you as follows:
- Include other JS-Libraries<br>
  Like [jquery](https://www.npmjs.com/package/jquery), [bootstrap](https://www.npmjs.com/package/bootstrap)
- [vue-i18n](https://www.npmjs.com/package/vue-i18n)<br>
  Internationalize process.
- [vue-router](https://www.npmjs.com/package/vue-router)<br>
  Combine DOM bindings with dynamic imports, and design nested routes.
- [vuex](https://www.npmjs.com/package/vuex)<br>
  A flux plugin in Vue.

To see live [Live Demo](https://tabacotaco.github.io/vue-example)

## Table of Contents
- [Vue CLI 3](#vue-cli-3)
- [Npm Install](#npm-install)
- [Example Links](#example-links)

## Vue CLI 3

Typescript is stricter than Javascript, so it could help us to understand how to use the plugins quickly.

First of all, we must have to install `@vue/cli`,<br>
and run `vue create my-app`, and choice using Typescript.

This CLI will help us to create a new vue project with Typescript.

## Npm Install

When we create the new project, we could install other packages by the configurations of CLI,
or install by youself, as follows:
* `npm i vue-i18n -s`
* `npm i vue-router -s`
* `npm i vuex -s`

If you wanna use Bootstrap, you also need to install these:
* `npm i jquery -s`
* `npm i bootstrap -s`
* `npm i popper.js -s`
* `npm i hammerjs -s`

## Example Links

Here are some source code links for you, to help you know how to build the plugins quickly.
- vue-i18n
  - `lang.json`([Language Folder](https://github.com/Tabacotaco/vue-example/tree/master/src/assets/i18n))
  - Import `lang.json` and generate properties([I18nService.ts](https://github.com/Tabacotaco/vue-example/blob/master/src/services/I18nService.ts))
  - Don't forget to inject it `Vue.use(VueI18n);`. 
- vue-router
  - Root
    - Configurations & Code Splitting([AppRouters.tsx](https://github.com/Tabacotaco/vue-example/blob/master/src/app/AppRouter.ts))
    - Inject router `Vue.use(Router);`.
    - Router Component([Bling2Dashboard.vue](https://github.com/Tabacotaco/vue-example/blob/master/src/app/bling2-dashboard/Bling2Dashboard.vue))
  - Nested Routes
    - Sub-Configurations([MouseTrackingRouter.ts](https://github.com/Tabacotaco/vue-example/blob/master/src/app/mouse-tracking/MouseTrackingRouter.ts))
    - Root Component([MouseTracking.vue](https://github.com/Tabacotaco/vue-example/blob/master/src/app/mouse-tracking/MouseTracking.vue))
    - Sub-Router Component([TrackingLogs.vue](https://github.com/Tabacotaco/vue-example/blob/master/src/app/mouse-tracking/%40components/TrackingLogs.vue))
- vuex
  - Module Keeper([module.ts](https://github.com/Tabacotaco/vue-example/blob/master/src/vuex/module.ts))
  - Data Model and Module([Models Folder](https://github.com/Tabacotaco/vue-example/tree/master/src/vuex/models))
  - Vuex Store([store.ts](https://github.com/Tabacotaco/vue-example/blob/master/src/vuex/store.ts))
  - Inject vuex `Vue.use(Vuex);`.
  - Connext Example
    - [MouseTracking.vue](https://github.com/Tabacotaco/vue-example/blob/master/src/app/mouse-tracking/MouseTracking.vue)
    - [TrackingLogs.vue](https://github.com/Tabacotaco/vue-example/blob/master/src/app/mouse-tracking/%40components/TrackingLogs.vue)
    - [GraphicsSize.vue](https://github.com/Tabacotaco/vue-example/blob/master/src/app/mouse-tracking/%40components/GraphicsSize.vue)
    - [TrackingGraphics.vue](https://github.com/Tabacotaco/vue-example/blob/master/src/app/%40components/TrackingGraphics.vue)
- Include other JS-Libraries / CSS
  - [vue.config.js](https://github.com/Tabacotaco/vue-example/blob/master/vue.config.js)
  - [main.ts](https://github.com/Tabacotaco/vue-example/blob/master/src/main.ts)
  - [App.vue](https://github.com/Tabacotaco/vue-example/blob/master/src/app/App.vue)
