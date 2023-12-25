declare module "warpjs" {
  class Warp {
    constructor(element: SVGSVGElement);
    interpolate(arg: number): void;
    transform(arg: ([x, y]: Array<number>) => Array<number>): void;
  }

  export default Warp;
}
