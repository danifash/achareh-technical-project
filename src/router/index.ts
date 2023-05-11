import { createRouter, createWebHistory } from "vue-router";
import type { RouteRecordRaw } from "vue-router";
import Layout from "../layouts/DefaultLayout.vue";
import AddressesPage from "../pages/addresses.vue";
import RecordAddressesPage from "../pages/index.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "addresses",
    children: [
      {
        path: "",
        name: "addresses",
        component: AddressesPage,
      },
      {
        path: "record-address",
        name: "recordAddress",
        component: RecordAddressesPage,
      },
    ],
    component: Layout,
  },
  {
    path: "/:pathMatch(.*)*",
    redirect: "/",
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes as Array<RouteRecordRaw>,
});

export { routes };

export default router;
