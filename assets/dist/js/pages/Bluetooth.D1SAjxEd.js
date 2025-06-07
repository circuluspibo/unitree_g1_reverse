import { d as s, c as l, o as u, a as i, ao as g } from "../../assets/index-By4o6enr.js";
const v = i("div", null, "web \u84DD\u7259\u6D4B\u8BD5", -1), m = s({ __name: "Bluetooth", setup(d) {
  const r = async () => {
    let e = await navigator.bluetooth.requestDevice({ filters: [{ namePrefix: "Unitree" }], optionalServices: [65504] });
    console.log("device: ", e);
    let t = await e.gatt.connect();
    console.log("server: ", t);
    let a = await t.getPrimaryService(65504);
    console.log("service: ", a);
    let c = await a.getCharacteristic(65505);
    console.log("characteristic: ", c);
    let o = await a.getCharacteristic(65506);
    console.log("unCharacteristic: ", o), c.addEventListener("characteristicvaluechanged", (n) => {
      console.log(n);
    }), c.startNotifications(), window.setTimeout(() => {
      o.writeValue(new Uint8Array([84]));
    }, 2e3);
  };
  return (e, t) => (u(), l(g, null, [v, i("button", { onClick: r }, "\u70B9\u51FB\u94FE\u63A5")], 64));
} });
export {
  m as default
};
