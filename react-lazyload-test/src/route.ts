interface RouteMeta {
  permission?: string;
}

interface Route {
  path: string;
  redirect?: string;
  name: string;
  component: string;
  meta?: RouteMeta;
  children?: Route[];
}

const asyncRoutes: Route = {
  path: "/sys",
  redirect: '/sys/main',
  name: "SysLayout",
  component: "@/layouts/portal/index.vue",
  children: [
    {
      path: 'main',
      name: 'PortalMain',
      component: "@/pages/client/main/index.vue",
      meta: {
        permission: 'sys:main',
      }
    },
    {
      path: 'workbench',
      name: 'PortalWorkbench',
      component: "@/pages/client/workbench/index.vue",
      children: [
        {
          path: 'menu1',
          name: 'PortalWorkbenchMenu1',
          component: "@/pages/client/workbench/menu1.vue",
          meta: {
            permission: 'sys:workbench:menu1',
          }
        },
        {
          path: 'menu2',
          name: 'PortalWorkbenchMenu2',
          component: "@/pages/client/workbench/menu2.vue",
          meta: {
            permission: 'sys:workbench:menu2',
          }
        }
      ]
    },
    {
      path: 'app',
      name: 'PortalApp',
      component: "@/pages/client/main/index.vue",
      meta: {
        permission: 'sys:app',
      }
    },
  ]
};

const userPermissions = ["sys:workbench:menu1", "sys:app"];

const hasPermission = (route: Route, permissions: string[]) => {
  if (!route.meta || !route.meta.permission) {
    return true;
  }
  return permissions.includes(route.meta.permission);
};

const filterRoutes = (routes: Route[], permissions: string[]): Route[] => {
  const res: Route[] = [];

  for (const route of routes) {
    const tmp = { ...route };
    if (hasPermission(tmp, permissions)) {
      if (tmp.children) {
        tmp.children = filterRoutes(tmp.children, permissions);
      }
      res.push(tmp);
    }
  }

  return res;
};

const filteredRoutes = filterRoutes([asyncRoutes], userPermissions);
const sysData = filteredRoutes.find(route => route.path === '/sys')

const menuData = sysData?.children || [];

console.log(JSON.stringify(menuData, null, 2));