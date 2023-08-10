// AliveformsJS Library
function AliveformsJS(config) {
    this.config = config || {};
}

AliveformsJS.prototype.embedForm = function(targetElement, formId, customClasses = []) {
    if (!(targetElement instanceof HTMLElement)) {
        console.error('Invalid target element provided.');
        return null;
    }

    // Create an iframe and embed the Aliveforms
    const iframe = document.createElement('iframe');
    iframe.setAttribute('src', `https://aliveforms.com/form/${formId}`);
    iframe.setAttribute('frameborder', '0');
    iframe.setAttribute('allowfullscreen', 'true');
    iframe.setAttribute('scrolling', 'no');
    iframe.style.width = '100%';
    iframe.style.height = '100%';

    // Add custom classes to the iframe
    if (Array.isArray(customClasses) && customClasses.length > 0) {
        iframe.classList.add(...customClasses);
    }

    // Append the iframe to the target element
    targetElement.innerHTML = '';
    targetElement.appendChild(iframe);

    // Return the reference to the newly created iframe
    return iframe;
};