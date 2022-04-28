export abstract class Component<P = {}> {
  protected props: P;

  static create<K>(ComponentImpl: new (props: K) => Component, props: K) {
    const instance = new ComponentImpl(props);
    return instance.render();
  }

  constructor(props: P) {
    this.props = props;
  }

  abstract render(): string;
}
