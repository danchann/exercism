// http://exercism.io/submissions/8345314952a543d492191a0cbc110d3f

class FoodChain {
    constructor() {
        this.list = ['fly', 'spider', 'bird', 'cat', 'dog', 'goat', 'cow', 'horse'];
        this.second = ['', 'It wriggled and jiggled and tickled inside her.', 'How absurd to swallow a bird!', 'Imagine that, to swallow a cat!', 'What a hog, to swallow a dog!', 'Just opened her throat and swallowed a goat!', 'I don\'t know how she swallowed a cow!'];
        this.song = [];
        this.init_song();
    }
    verse(start) {
        return this.verses(start);
    }
    verses(start, l = 1) {
        var res = '';
        for (var i = 0; i < l; i++) {
            res += this.song[start - 1 + i];
            if (l > 1) {
                res += '\n';
            }
        }
        return res;
    }
    init_song() {
        for (var i = 0; i < this.list.length; i++) {
            var v = '';
            v += `I know an old lady who swallowed a ${this.list[i]}.\n`;
            if (i == this.list.length - 1) {    // last verse
                v += `She\'s dead, of course!\n`;
            } else {
                if (i >= 1) {
                    v += `${this.second[i]}\n`;
                    if (i > 2) {
                        var j = i;
                        while (j > 2) { // loop
                            v += `She swallowed the ${this.list[j]} to catch the ${this.list[j - 1]}.\n`;
                            j--;
                        }
                    }
                    if (i >= 2)
                        v += `She swallowed the ${this.list[2]} to catch the ${this.list[1]} that wriggled and jiggled and tickled inside her.\n`;    //dyn
                    v += `She swallowed the ${this.list[1]} to catch the ${this.list[0]}.\n`;
                }
                v += `I don't know why she swallowed the ${this.list[0]}. Perhaps she'll die.\n`;
            }
            this.song[i] = v;
        }
    }
}

module.exports = FoodChain;

var song = new FoodChain();
song.verses(1, 8)