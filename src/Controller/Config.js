class Config {
  constructor() {}

  getCSSImage(img) {
    return `url(${img})`;
  }
}

var obj = new Config();

export default obj;
