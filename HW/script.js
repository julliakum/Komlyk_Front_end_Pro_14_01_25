function HtmlElement(tagName, attributes = {}, children = []) {
    this.tagName = tagName;
    this.attributes = attributes;
    this.children = children;

    this.addAttribute = function (name, value) {
        this.attributes[name] = value;
    };

    this.addChild = function (child) {
        this.children.push(child);
    };

    this.render = function () {
        const element = document.createElement(this.tagName);

        for (let attribute in this.attributes) {
            element.setAttribute(attribute, this.attributes[attribute]);
        }

        this.children.forEach(child => {
            if (child instanceof HtmlElement) {
                element.appendChild(child.render());
            } else {
                element.appendChild(document.createTextNode(child));
            }
        });

        return element;
    };
}


//Приклад
const div = new HtmlElement('div', {
    id: 'wrapper',
    class: 'container'
});

const p = new HtmlElement('p');
p.addChild('Hello world!');

div.addChild(p);
document.body.appendChild(div.render());
