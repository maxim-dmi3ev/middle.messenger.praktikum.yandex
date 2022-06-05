import { BlockConstructor } from "./block";
import { Route } from "./route";

export class Router {
  static __instance: Router;

  private routes: Route[] = [];

  private history: History = window.history;

  private currentRoute?: Route;

  private rootQuery?: string;

  constructor(rootQuery?: string) {
    if (Router.__instance) {
      // eslint-disable-next-line no-constructor-return
      return Router.__instance;
    }

    this.rootQuery = rootQuery;

    Router.__instance = this;
  }

  use(pathname: string, block: BlockConstructor) {
    const route = new Route(pathname, block, { rootQuery: this.rootQuery as string });

    this.routes.push(route);

    return this;
  }

  start() {
    window.onpopstate = (evt) => {
      const wnd = evt.currentTarget as typeof window;
      this.onRoute(wnd.location.pathname);
    };
    this.onRoute(window.location.pathname);
    return this;
  }

  go(pathname: string) {
    this.history.pushState({}, "", pathname);
    this.onRoute(pathname);
  }

  back() {
    this.history.back();
  }

  forward() {
    this.history.forward();
  }

  private onRoute(pathname: string) {
    const route = this.getRoute(pathname);

    if (!route) {
      return;
    }

    if (this.currentRoute && this.currentRoute !== route) {
      this.currentRoute.leave();
    }

    this.currentRoute = route;
    route.render();
  }

  private getRoute(pathname: string) {
    return this.routes.find((r) => r.match(pathname));
  }
}
