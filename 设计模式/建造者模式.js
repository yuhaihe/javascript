/**
 * @description 应聘者创建案例
 * 将一个复杂对象的构建层与其表示层相互分离，同样的构建过程可采用不同的表示
 */

// 创建人
class Human {
    constructor(props = {}) {
        // 技能
        this.skill = props.skill || '保密';
        // 兴趣爱好
        this.hobby = props.hobby || '保密';
    }

    getSkill() {
        return this.skill;
    }
    getHobby() {
        return this.hobby;
    }
}

// 实例化姓名类
class Named {
    constructor(name) {
        this.wholeName = name;
        // 解析姓与名
        if (name.indexOf(' ') > -1) {
            this.FirstName = name.slice(0, name.indexOf(' '));
            this.secondName = name.slice(name.indexOf(' '));
        }
    }
}

// 实例化职位类
class Work {
    constructor(work) {
        this.resolve(work);
    }

    resolve(work) {
        switch (work) {
            case 'code':
                this.work = '工程师';
                this.workDescript = '每天沉醉于编程';
                break;
            case 'UI':
            case 'UE':
                this.work = '设计师';
                this.workDescript = '设计更似一种艺术';
                break;
            case 'teach':
                this.work = '教师';
                this.workDescript = '分享也是一种快乐';
                break;
            default:
                this.work = work;
                this.workDescript = '暂无相关描述';
                break;
        }
    }
    changeWork(work) {
        this.work = work;
    }
    changeDescript(setence) {
        this.workDescript = setence;
    }
}

/**
 * 应聘者建造者
 * name: 姓名
 * work: 期望职位
 */
class Person {
    constructor(name, work, data={}) {
        // 创建应聘者缓存对象
        const _person = new Human(data);
        // 姓名解析
        _person.name = new Named(name);
        // 期望职位
        _person.work = new Work(work);
        return _person;
    }
}

const person = new Person('于 海贺', 'code', {skill: '做菜'});
console.log(person.skill);
console.log(person.name.FirstName);
console.log(person.work.work);
console.log(person.work.workDescript);
person.work.changeDescript('变更职位描述');
console.log(person.work.workDescript);