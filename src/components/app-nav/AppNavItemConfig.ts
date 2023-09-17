export type AppNavItemConfig = {

  icon: React.ReactNode;
  destination: string | string[];
  label: string;

}


export function getDestination(itemConfig: AppNavItemConfig): string {

  if (!Array.isArray(itemConfig.destination)) return itemConfig.destination;

  return itemConfig.destination.join('/');

}
