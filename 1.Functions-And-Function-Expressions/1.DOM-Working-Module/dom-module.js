var actionsDom = (function () {
    function addDomElement(element, selector, content) {
        if (!element) {
            alert('Please enter element!');
            return;
        }
        if (!selector) {
            alert('Please enter selector!');
            return;
        }

        var elementToAdd = document.createElement(element);
        content = content || 'NO ENTERED CONTENT!';
        elementToAdd.innerHTML = content;
        var parent = document.querySelector(selector);
        parent.appendChild(elementToAdd);
    }

    function removeDomElement(selector) {
        if (!selector) {
            alert('Please enter selector!');
            return;
        }

        var elementToRemove = document.querySelector(selector);
        elementToRemove.parentNode.removeChild(elementToRemove);
    }

    function attachEvent(selector, eventType, eventFunction) {
        var element = document.querySelector(selector);
        element.addEventListener(eventType, eventFunction);
    }

    var buffer = [];
    function addElementToBuffer(element, selector) {
        var bufferElement = {
            element: element,
            selector: selector
        }

        buffer.push(bufferElement);
    }

    function appendBufferToDocument() {
        var content = 'div';
        for (var i = 0, len = buffer.length; i < len; i++) {
            var elementSelector = buffer[i].selector;
            var elementType = buffer[i].element;

            var currentParent = document.querySelector(elementSelector);
            var currentElement = document.createElement(elementType);
            currentElement.innerHTML = content;
            currentParent.appendChild(currentElement);
        }

        buffer = [];
    }

    function addElementsToBufferUntilOneHundred(element, selector) {
        addElementToBuffer(element, selector);

        if (buffer.length >= 100) {
            appendBufferToDocument();
        }
    }

    return {
        add: addDomElement,
        remove: removeDomElement,
        attachEvent: attachEvent,
        addElementToBuffer: addElementsToBufferUntilOneHundred
    }
}());

var addButton = document.getElementById('add-element-button');
addButton.addEventListener('click', function () {
    var inputElement = document.getElementById('input-type-of-element');
    var element = inputElement.value;

    var inputParent = document.getElementById('input-parent-selector-of-element');
    var selector = inputParent.value;

    var inputContentOfElement = document.getElementById('input-content-of-element');
    var content = inputContentOfElement.value;

    actionsDom.add(element, selector, content);
});

var removeButton = document.getElementById('remove-element-button');
removeButton.addEventListener('click', function () {
    var inputParent = document.getElementById('input-parent-selector-of-element');
    var selector = inputParent.value;

    actionsDom.remove(selector);
});

var attachHoverEventButton = document.getElementById('attach-hover-event-button');
attachHoverEventButton.addEventListener('click', function () {

    actionsDom.attachEvent('#add-element-button', 'mouseover', onMouseover);
    actionsDom.attachEvent('#add-element-button', 'mouseout', onMouseout);
});

function onMouseover(ev) {
    this.style.background = 'black';
    this.style.color = 'white';
}

function onMouseout(ev) {
    this.style.background = '';
    this.style.color = '';
}

var addToBufferButton = document.getElementById('add-to-buffer-button');
addToBufferButton.addEventListener('click', function () {
    for (var i = 0; i < 30; i++) {
        actionsDom.addElementToBuffer('span', 'body');
    }

    for (var i = 0; i < 35; i++) {
        actionsDom.addElementToBuffer('span', 'div');
    }

    for (var i = 0; i < 35; i++) {
        actionsDom.addElementToBuffer('span', 'h3');
    }
});