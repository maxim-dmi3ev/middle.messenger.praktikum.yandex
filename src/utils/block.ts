import { v4 as makeUUID } from "uuid";
import { EventBus } from "./event-bus";

export type Props = {
  [index: string]: any;
  events?: Record<string, (evt: any) => void>;
};

type Children = Record<string, Block | Block[]>;

export type BlockConstructor = new (propsAndChildren: {}) => Block;

export class Block<P extends {} = {}> {
  static EVENTS = {
    INIT: "_init",
    FLOW_CDM: "flow:component-did-mount",
    FLOW_RENDER: "flow:render",
    FLOW_CDU: "flow:component-did-update",
    FLOW_CWU: "flow:component-will-unmount",
  };

  private _element: HTMLElement | null = null;

  private _id: string;

  props: P;

  protected children: Children;

  protected elements: Record<string, Block<P>> = {};

  constructor(propsAndChildren: P) {
    const eventBus = new EventBus();

    const { children, props } = this._getChildren(propsAndChildren);

    this._id = makeUUID();
    this.props = this._makePropsProxy({ ...props, __id: this._id });

    this.children = children;
    this.initChildren();

    this.eventBus = () => eventBus;
    this._registerEvents();

    eventBus.emit(Block.EVENTS.INIT);
  }

  protected initChildren() {}

  protected eventBus: () => EventBus;

  protected componentDidMount() {}

  protected componentWillUnmount() {}

  dispatchComponentDidMount() {
    this.eventBus().emit(Block.EVENTS.FLOW_CDM);
  }

  dispatchComponentWillUnmount() {
    this.eventBus().emit(Block.EVENTS.FLOW_CWU);
  }

  // @ts-ignore
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  protected componentDidUpdate(oldProps: P, newProps: P): boolean {
    return true;
  }

  protected render(): DocumentFragment {
    return document.createDocumentFragment();
  }

  getContent() {
    return this._element;
  }

  setProps(nextProps: Partial<P>) {
    Object.assign(this.props, nextProps);
  }

  protected compile(tmplFunc: (param?: any) => string, context?: Record<string, any>) {
    const contextAndStubs = { ...context } as any;

    Object.entries(this.children).forEach(([key, child]) => {
      if (Array.isArray(child)) {
        contextAndStubs[key] = child.map((ch) => `<div data-id="${ch._id}"></div>`);
      } else {
        contextAndStubs[key] = `<div data-id="${child._id}"></div>`;
      }
    });

    const fragment = this._createDocumentElement("template");
    fragment.innerHTML = tmplFunc(contextAndStubs);

    Object.values(this.children).forEach((child) => {
      if (Array.isArray(child)) {
        child.forEach((ch) => {
          // @ts-ignore
          const stub = fragment.content.querySelector(`[data-id="${ch._id}"]`);
          stub.replaceWith(ch.getContent());
        });
      } else {
        // @ts-ignore
        const stub = fragment.content.querySelector(`[data-id="${child._id}"]`);
        stub.replaceWith(child.getContent());
      }
    });

    // @ts-ignore
    return fragment.content as DocumentFragment;
  }

  private _getChildren(propsAndChildren: P) {
    const children: Children = {};
    const props: Record<string, any> = {};

    Object.entries(propsAndChildren).forEach(([key, value]) => {
      if (Array.isArray(value) && value.every((v) => v instanceof Block)) {
        children[key] = value;
      } else if (value instanceof Block) {
        children[key] = value;
      } else {
        props[key] = value;
      }
    });

    return { children, props } as { children: Children; props: P };
  }

  private _makePropsProxy(props: P) {
    const self = this;
    const isPrivateProp = (prop: string) => {
      if (prop.indexOf("_") === 0) {
        throw new Error(`Private field: ${prop}`);
      }
    };

    return new Proxy(props, {
      get(target, prop) {
        if (typeof prop === "symbol") {
          return undefined;
        }
        isPrivateProp(prop);
        const value = target[prop as keyof P];
        return typeof value === "function" ? value.bind(target) : value;
      },
      set(target, prop, value) {
        if (typeof prop === "symbol") {
          return false;
        }
        isPrivateProp(prop);
        const prevTarget = { ...target };
        target[prop as keyof P] = value;
        self.eventBus().emit(Block.EVENTS.FLOW_CDU, prevTarget, target);
        return true;
      },
      deleteProperty(target, prop) {
        if (typeof prop === "symbol") {
          return false;
        }
        isPrivateProp(prop);
        delete target[prop as keyof P];
        return true;
      },
    });
  }

  private _registerEvents() {
    const eventBus = this.eventBus();
    eventBus.on(Block.EVENTS.INIT, this._init.bind(this));
    eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
    eventBus.on(Block.EVENTS.FLOW_CWU, this._componentWillUnmount.bind(this));
    eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this));
    eventBus.on(Block.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));
  }

  private _init() {
    this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
  }

  private _createDocumentElement(tagName: string) {
    const element = document.createElement(tagName);
    element.setAttribute("data-id", this._id);
    return element;
  }

  private _componentDidMount() {
    this.componentDidMount();

    Object.values(this.children).forEach((child) => {
      if (Array.isArray(child)) {
        child.forEach((ch) => ch.dispatchComponentDidMount());
      } else {
        child.dispatchComponentDidMount();
      }
    });
  }

  private _componentWillUnmount() {
    this.componentWillUnmount();

    Object.values(this.children).forEach((child) => {
      if (Array.isArray(child)) {
        child.forEach((ch) => ch.dispatchComponentWillUnmount());
      } else {
        child.dispatchComponentWillUnmount();
      }
    });
  }

  private _render() {
    const fragment = this.render();
    const newElement = fragment.firstElementChild as HTMLElement;

    if (this._element) {
      this._componentWillUnmount();
      this._removeEvents();
      this._element.replaceWith(newElement);
    }

    this._element = newElement;
    this._addEvents();
  }

  private _addEvents() {
    // @ts-ignore
    const { events = {} } = this.props;
    Object.entries(events).forEach(([event, handler]) =>
      // @ts-ignore
      this._element!.addEventListener(event, handler)
    );
  }

  private _removeEvents() {
    // @ts-ignore
    const { events = {} } = this.props;
    Object.entries(events).forEach(([event, handler]) =>
      // @ts-ignore
      this._element!.removeEventListener(event, handler)
    );
  }

  private _componentDidUpdate(oldProps: P, newProps: P) {
    if (this.componentDidUpdate(oldProps, newProps)) {
      this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
    }
  }

  hide() {
    if (this._element) {
      this._element.style.display = "none";
    }
  }

  show() {
    if (this._element) {
      this._element.style.display = "";
    }
  }
}
