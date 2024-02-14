import _ from 'lodash';
function component() {
    const element = document.createElement('div');
    element.innerHTML = _.join(['Hello', 'ua bundle o dau v'], ' ');

    return element;
}

document.body.appendChild(component());
