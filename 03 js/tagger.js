(function() {
    function tagger(tag) {
        return function(content){
            result = `<${tag}>${content}</${tag}>`;
            return result;
        }
    }

h1 = tagger('h1');
h2 = tagger('h2');
p = tagger('p');
})();