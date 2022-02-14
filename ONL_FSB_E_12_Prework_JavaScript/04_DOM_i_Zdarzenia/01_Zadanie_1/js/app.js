const childElements = document.querySelector("article").children;

function getTags(elements) {
    return [...elements].map(e => e.nodeName)
}

getTags(childElements)
