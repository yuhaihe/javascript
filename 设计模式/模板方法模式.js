/**
 * @description 提示框实现
 */

class Alert {
    constructor(data) {
        if(!data) return null;
        this.content = data.content;
        this.panel = document.createElement('div');
        this.contentNode = document.createElement('p');
        this.confirmBtn = document.createElement('span');
        this.closeBtn = document.createElement('b');
        this.panel.className = 'alert';
        this.closeBtn.className = 'a-close';
        this.confirmBtn.className = 'a-confirm';
        this.confirmBtn.innerHTML = data.confirm || '确认';
        this.contentNode.innerHTML = this.content;
        this.success = data.success || function() {};
        this.fail = data.fail || function() {};
    }

    init() {
        this.panel.appendChild(this.closeBtn);
        this.panel.appendChild(this.contentNode);
        this.panel.appendChild(this.confirmBtn);
        document.body.appendChild(this.panel);
        this.bindEvent();
        this.show();
    }

    bindEvent() {
        this.closeBtn.onclick = () => {
            this.fail();
            this.hide();
        }
        this.confirmBtn.onclick = () => {
            this.success();
            this.hide();
        }
    }

    show() {
        this.panel.style.display = 'block';
    }

    hide() {
        this.panel.style.display = 'none';
    }
}

// 右侧按钮提示框
class RightAlert extends Alert {
    constructor(data) {
        super(data);
        this.confirmBtn.className = this.confirmBtn.className + ' right'
    }
}

// 标题提示框
class TitleAlert extends Alert {
    constructor(data) {
        super(data);
        this.title = data.title;
        this.titleNode = document.createElement('h3');
        this.titleNode.innerHTML = this.title;
    }

    init() {
        this.panel.insertBefore(this.titleNode, this.panel.firstChild)
        super.init();
    }
}

// 带有取消按钮的弹出框
class CancelAlert extends TitleAlert {
    constructor(data) {
        console.log(data)
        super(data);
        this.cancel = data.cancel;
        this.cancelBtn = document.createElement('span');
        this.cancelBtn.className = 'cancel';
        this.cancelBtn.innerHTML = this.cancel || '取消';
    }

    init() {
        super.init();
        this.panel.appendChild(this.cancelBtn);
    }

    bindEvent() {
        super.bindEvent();
        this.cancelBtn.onclick = () => {
            this.fail();
            this.hide();
        }
    }
}

new CancelAlert({
    title: '提示标题',
    content: '',
    success(){
        console.log('ok')
    },
    fail(){
        console.log('cancel')
    }
}).init();