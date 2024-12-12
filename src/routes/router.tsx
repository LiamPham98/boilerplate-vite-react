import type { JSX, LazyExoticComponent } from "react";
import { lazy } from "react";

export interface Router {
  index?: true;
  label: string;
  icon?: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & {
      title?: string;
    }
  >;
  path?: string;
  children?: Router[];
  element?: LazyExoticComponent<() => JSX.Element>;
}

export const ROUTER: Router[] = [
  {
    label: "Product Management",
    children: [
      {
        label: "Product",
        path: "/products",
        children: [
          {
            index: true,
            label: "Product List",
            element: lazy(() => import("@/pages/home")),
          },
        ],
      },
    ],
  },
];
