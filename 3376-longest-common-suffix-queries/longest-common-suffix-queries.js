/**
 * @param {string[]} wordsContainer
 * @param {string[]} wordsQuery
 * @return {number[]}
 */

class Node {
    constructor() {
        this.links = new Array(26).fill(null);
        this.index = -1;
        this.end = -1;
        this.min_length = 1e9;
    }
}

class Trie {
    constructor() {
        this.root = new Node();
    }

    insert(word, idx) {
        word = word.split('').reverse().join('');
        let ptr = this.root;
        for (let ch of word) {
            const index = ch.charCodeAt(0) - 'a'.charCodeAt(0);
            if (!ptr.links[index]) {
                ptr.links[index] = new Node();
            }
            if (word.length < ptr.min_length) {
                ptr.index = idx;
                ptr.min_length = word.length;
            }
            ptr = ptr.links[index];
        }

        if (ptr.end === -1) {
            ptr.end = idx;
        }
    }

    find(word) {
        word = word.split('').reverse().join('');
        let ptr = this.root;

        for (let ch of word) {
            const index = ch.charCodeAt(0) - 'a'.charCodeAt(0);
            if (!ptr.links[index]) {
                if (ptr.end !== -1) {
                    return ptr.end;
                }
                return ptr.index;
            }
            ptr = ptr.links[index];
        }

        if (ptr.end !== -1) {
            return ptr.end;
        }

        return ptr.index;
    }
}

var stringIndices = function(wordsContainer, wordsQuery) {
    const trie = new Trie();
    for (let i = 0; i < wordsContainer.length; i++) {
        trie.insert(wordsContainer[i], i);
    }

    const ans = [];
    for (let i = 0; i < wordsQuery.length; i++) {
        ans.push(trie.find(wordsQuery[i]));
    }

    return ans;
};