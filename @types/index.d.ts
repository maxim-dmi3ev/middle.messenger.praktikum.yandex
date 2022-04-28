declare module "*.hbs" {
  const templateFunction: (param?: any) => string;
  export default templateFunction;
}

declare module "*.handlebars" {
  const templateFunction: (param?: any) => string;
  export default templateFunction;
}

declare module "*.png" {
  const value: string;
  export default value;
}

declare module "*.svg" {
  const value: string;
  export default value;
}
