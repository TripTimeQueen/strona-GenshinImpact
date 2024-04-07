document.body.addEventListener('htmx:afterSwap', function(event) {
    if (event.detail.target.id === 'content') {
        var converter = new showdown.Converter();
        var html = converter.makeHtml(event.detail.target.innerHTML);
        event.detail.target.innerHTML = html;
    }
}
);