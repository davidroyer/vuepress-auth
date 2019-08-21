import { auth } from "./auth";

export default ({
  Vue, // the version of Vue being used in the VuePress app
  options, // the options for the root Vue instance
  router, // the router instance for the app
  siteData // site metadata
}) => {
  Vue.prototype.$auth = auth;
  Vue.prototype.$user = {}


  router.beforeEach(async (to, from, next) => {
    console.log("TCL: to, from, next", to, from, next);
    console.log("beforeEach ran!!");
    console.log("Vue.prototype.$auth:", Vue.prototype.$auth);

    const currentUser = await Vue.prototype.$auth.currentUser();
    Vue.prototype.$user = {...currentUser }
    console.log("TCL: Vue.prototype.$user", Vue.prototype.$user)
    // next({
    //     path: '/fake'
    // })
    next();
    // next('/secure')
    // next()
    // if (currentUser) {
    //   next({
    //     path: "/secure"
    //   });
    // } else next('/');
  });
};
