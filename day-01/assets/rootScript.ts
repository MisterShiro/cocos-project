import { _decorator, Component, Input, input, Node } from "cc";
const { ccclass, property } = _decorator;

@ccclass("rootScript")
export class rootScript extends Component {
 @property()


  start() {
    // 注册事件
    input.on(Input.EventType.TOUCH_START, this.onTouchStart, this);
  }

  onTouchStart() {
    // 缓动系统

    

    console.log(1111111111);
  }
  update(deltaTime: number) {}
}
