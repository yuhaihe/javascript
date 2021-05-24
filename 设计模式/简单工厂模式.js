var BasketBall = function() {
    this.intro = '篮球'
}

BasketBall.prototype = {
    getMember: function() {
        console.log('每个队伍需要5名球员')
    },
    getBallSize: function() {
        console.log('篮球很大')
    }
}

var FooterBall = function() {
    this.intro = '足球'
}

FooterBall.prototype = {
    getMember: function() {
        console.log('每个队伍需要11名球员')
    },
    getBallSize: function() {
        console.log('足球很大')
    }
}

var SportFactory = function(name) {
    switch(name) {
        case 'NBA':
            return new BasketBall();
        case 'wordCup': 
            return new FooterBall()
    }
}

var footerBall = SportFactory('wordCup');
footerBall.getMember()

/**
 * @example 2
 */

function createPop(type, text) {
    var o = new Object()
    o.content = text
    o.show = function() {
        // 显示方法
    }
    if(type === 'alert') {
        // 警示框
        console.log('alert')
    }
    if(type === 'promet') {
        // 提示框差异部分
        console.log('promet')
    }
    if(type === 'confirm') {
        // 确认框差异部分
        console.log('confirm')
    }
}

var useNameAlert = createPop('confirm', '请确认用户名是否正确？')