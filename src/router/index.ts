import { createRouter, createWebHistory } from "vue-router";
import type { RouteRecordRaw } from "vue-router";
import AddressesPage from "../pages/addresses.vue";
import RecordAddressesPage from "../pages/index.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/addresses",
    name: "addresses",
    component: AddressesPage,
  },
  {
    path: "",
    name: "recordAddress",
    component: RecordAddressesPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes as Array<RouteRecordRaw>,
});

export { routes };

export default router;
