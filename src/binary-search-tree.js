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
    let node = this.root2;
    let traverse = function(node) {
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
    if (!this.root2) {
      return;
    }

    let node = this.root2;
    let traverse = function(node) {
        if (!node) return false;
        if (data === node.data) {
            return node;
        } else if (data > node.data) {
            return traverse(node.right);
        } else if (data < node.data) {
            return traverse(node.left);
        } 
    };
    return traverse(node) || null;
    
  }

  remove(data) {
    this.root2 = removeNode(this.root2, data);

    function removeNode(node, data) {
      if (!node) {
        return null;
      }

      if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else if (node.data < data) {
        node.right = removeNode(node.right, data);
        return node;
      } else {
        if (!node.left && !node.right) {
          return null;
        }

        if (!node.left) {
          node = node.right;
          return node;
        }

        if (!node.right) {
          node = node.left;
          return node;
        }

        let minFromRight = node.right;
        while (minFromRight.left) {
          minFromRight = minFromRight.left;
        }
        node.data = minFromRight.data;

        node.right = removeNode(node.right, minFromRight.data);

        return node;
      }
    }
  }

  min() {
    if (!this.root2) {
      return;
    }

    let node = this.root2;
    while (node.left) {
      node = node.left;
    }

    return node.data;
  }

  max() {
      if (!this.root2) {
      return;
    }

    let node = this.root2;
    while (node.right) {
      node = node.right;
    }

    return node.data;
  }

}