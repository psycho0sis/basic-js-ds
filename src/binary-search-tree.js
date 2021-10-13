const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
module.exports = class BinarySearchTree {
  constructor() {
      this.root2 = null;
    }

  root() {
    if (this.root2 === null) {
      return null;
    }
    return this.root2;
  }

  add(data) {
    this.root2 = addWhithin(this.root2, data);

    function addWhithin(node, data) {
      if (!node) {
        return new Node(data);
      }

      if (node.data === data) {
        return node;
      }

      if (data < node.data) {
        node.left = addWhithin(node.left, data)
      } else {
        node.right = addWhithin(node.right, data)
      }
      return node;
    }
  }

  has(data) {
   var node = this.root2;
    var traverse = function(node) {
        if (!node) return false;
        if (data === node.data) {
            return true;
        } else if (data > node.data) {
            return traverse(node.right);
        } else if (data < node.data) {
            return traverse(node.left);
        }
    };
    return traverse(node);
  }

  find(data) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  remove(data) {
    this.root2 = this.removeNode(this.root2, data);
  }

  min() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  max() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

}