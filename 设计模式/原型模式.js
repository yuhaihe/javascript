/**
 * @description 焦点图
 * 用原型实例指向创建对象的类，使用于创建新的对象的类共享原型对象的属性以及方法
 */

class LoopImages {
    constructor(imgArr, container) {
        //  轮播图片数组
        this.imagesArray = imgArr;
        //  轮播图片容器
        this.container = container;
    }
    //  创建轮播图片
    createImage() {
        console.log('LoopImages createImage function');
    }
    //  切换下一张图片
    changeImage() {
        console.log('LoopImages changeImage function');
    }
    getImageLength() {
        return this.imagesArray.length;
    }
}

//  上下滑动切换类
class SlideLoopImg extends LoopImages {
    constructor(imgArr, container) {
        // 继承图片轮播类
        super(imgArr, container);
    }
    // 重写切换下一张图片方法
    changeImage() {
        console.log('SlideLoopImg changeImage function');
    }
}

//  渐隐切换类
class FadeLoopImg extends LoopImages {
    constructor(imgArr, container, arrow) {
        super(imgArr, container);
        this.arrow = arrow;
    }
    changeImage() {
        console.log('FadeLoopImg changeImage function');
    }
    getContainer() {
        return this.container;
    }
}

const fadeImg = new FadeLoopImg(
    ['1.png'],
    'slide',
    ['left.png', 'right.png']);
// console.log(fadeImg.getImageLength());
// console.log(fadeImg.getContainer());

// 原型继承
function prototypeExtend() {
    const F = function () {}
    const args = arguments;
    let { length } = args;
    for (let i = 0; i < length; i++) {
        for (let j in args[i]) {
            F.prototype[j] = args[i][j];
        }
    }
    return new F();
}

const penguin = prototypeExtend({
    speed: 20,
    swim: function () {
        console.log('游泳速度' + this.speed);
    }
})
console.log(penguin)
penguin.run = function() {
    console.log('奔跑速度' + this.speed);
}
penguin.run();