/*
|-------------------------------------------------------------------------------
| routes.js
|-------------------------------------------------------------------------------
| Contains all of the routes for the application
*/

/*
    Imports Vue and VueRouter to extend with the routes.
*/
import Vue from "vue";
import VueRouter from "vue-router";

import Layout from "./components/Layout.vue";
import Setup from "./components/Setup.vue";
/*
    Extends Vue to use Vue Router
*/
Vue.use(VueRouter);

/*
    Makes a new VueRouter that we will use to run all of the routes
    for the app.
*/
export default new VueRouter({
    routes: [
        {
            path: "/",
            name: "layout",
            component: Layout,
            children: [
                {
                    path: "setup",
                    name: "setup",
                    component: Setup
                }
            ]
        }
    ]
});
