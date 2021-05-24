var Factory = function(type, content) {
    if(this instanceof Factory) {
        var s = new this[type](content)
    } else {
        return new Factory(type, content)
    }
}

Factory.prototype = {
    Java: function(content) {},
    JavaScript: function(content) {},
    UI: function(content) {
        this.content = content;
        (function() {
            var div = document.createElement('div');
            div.innerHTML = content;
            div.style.border = '1px solid red';
            document.body.appendChild(div)
        })()
    }
}

var data = [
    {type: 'UI', content: 'UI 哪家强'},
    {type: 'UI', content: 'UI 哪家强'},
    {type: 'Java', content: 'Java 哪家强'},
    {type: 'JavaScript', content: 'JavaScript 哪家强'}
]

for (let i = 0; i < data.length; i++) {
   Factory(data[i].type, data[i].content)
}
