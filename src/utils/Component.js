export class Component {
  static create(ComponentImpl, props) {
    const instance = new ComponentImpl(props);
    return instance.render();
  }

  constructor(props = {}) {
    this.props = props;
  }

  render() {
    throw new Error("This method should be implemented!");
  }
}
