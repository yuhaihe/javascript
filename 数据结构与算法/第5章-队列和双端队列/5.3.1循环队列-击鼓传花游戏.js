import Queue from './5.1.1创建队列.js';

function hotPotato(elementList, num) {
    const queue = new Queue();
    // 存放淘汰者
    const elimitatedList = [];

    // 所以的参赛者加入队列
    for (let i = 0; i < elementList.length; i++) {
        queue.enqueue(elementList[i]);
    }

    // queue.size() > 1时只剩一个参赛者代表游戏结束
    while(queue.size() > 1) {
        for (let i = 0; i < num; i++) {
            // 队列头部移到尾部代表完成了一次传球
            queue.enqueue(queue.dequeue());
        }
        // 一个循环完毕头部的即为拿球者，淘汰掉
        elimitatedList.push(queue.dequeue());
    }

    return {
        elimitated: elimitatedList,
        winner: queue.dequeue()
    }
}

const names = ['John', 'Jack','Camila','Ingrid','Carl'];
const result = hotPotato(names, 7);
result.elimitated.forEach(name => {
    console.log(`${name}已淘汰`)
})
console.log(`获胜者为${result.winner}`);