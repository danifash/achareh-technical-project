export interface Route {
  id: number;
  faName: string;
  enName: string;
  path: string;
}

export const ROUTES: Route[] = [
  {
    id: 0,
    faName: "ثبت آدرس",
    enName: "recordAddress",
    path: "/record-address",
  },
  { id: 1, faName: "مشاهده آدرس ها", enName: "addresses", path: "/" },
];
