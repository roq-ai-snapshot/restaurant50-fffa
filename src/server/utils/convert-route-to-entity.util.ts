const mapping: Record<string, string> = {
  'menu-items': 'menu_item',
  orders: 'order',
  restaurants: 'restaurant',
  tables: 'table',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
