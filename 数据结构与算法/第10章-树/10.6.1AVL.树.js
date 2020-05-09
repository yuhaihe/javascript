import BinarySearchTree from "./10.3.1二叉搜索树.js";
import { Compare, defaultCompare } from '../util.js';
import { Node } from '../models/node.js';

const BalanceFactor = {
    UNBALANCED_RIGHT: 1,
    SLIGHTLY_UNBALANCED_RIGHT: 2,
    BALANCED: 3,
    SLIGHTLY_UNBALANCED_LEFT: 4,
    UNBALANCED_LEFT: 5
};

class AVLTree extends BinarySearchTree {
    constructor(compareFn = defaultCompare) {
        super(compareFn);
        this.compareFn = compareFn;
        this.root = null;
    }
    insert(key) {
        this.root = this, this.insertNode(this.root, key);
    }

    insertNode(node, key) {
        if (node == null) {
            return new Node(key)
        } else if (this.compareFn(key, node.key) === Compare.LESS_THAN) {
            node.left = this.insertNode(node.left, key);
        } else if (this.compareFn(key, node.key) === Compare.BIGGER_THAN) {
            node.right = this.insertNode(node.right, key);
        } else {
            return node;
        }

        // 平衡树操作
        const balanceFactor = this.getBalanceFactor(node);
        if (balanceFactor === BalanceFactor.UNBALANCED_LEFT) {
            if (this.compareFn(key, node.left.key) === Compare.LESS_THAN) {
                node = this.rotationLL(node);
            } else {
                node = this.rotationLR(node);
            }
        }
        if (balanceFactor === BalanceFactor.UNBALANCED_RIGHT) {
            if (this.compareFn(key, node.right.key) === Compare.BIGGER_THAN) {
                node = this.rotationRR(node);
            } else {
                node = this.rotationRL(node);
            }
        }
    }
    removeNode(node, key) {
        node = super.removeNode(node, key); // {1}
        if (node == null) {
            return node; // null，不需要进行平衡 
        }
        // 检测树是否平衡
        const balanceFactor = this.getBalanceFactor(node); // {2}
        if (balanceFactor === BalanceFactor.UNBALANCED_LEFT) { // {3}
            const balanceFactorLeft = this.getBalanceFactor(node.left); // {4} 
            if (balanceFactorLeft === BalanceFactor.BALANCED ||
                balanceFactorLeft === BalanceFactor.SLIGHTLY_UNBALANCED_LEFT) { // {5}
                return this.rotationLL(node);
            }
            if (
                balanceFactorLeft === BalanceFactor.SLIGHTLY_UNBALANCED_RIGHT) { // {7}
                return this.rotationLR(node.left); // {8}
            }
        }
        if (balanceFactor === BalanceFactor.UNBALANCED_RIGHT) { // {9}
            const balanceFactorRight = this.getBalanceFactor(node.right); // {10} 
            if (
                balanceFactorRight === BalanceFactor.BALANCED ||
                balanceFactorRight === BalanceFactor.SLIGHTLY_UNBALANCED_RIGHT) { // {11}
                return this.rotationRR(node); // {12} 
            }
        }
        if (
            balanceFactorRight === BalanceFactor.SLIGHTLY_UNBALANCED_LEFT) { // {13}
        }
        return node;
    }

    getNodeHeight(node) {
        if (node == null) return -1;
        return Math.max(
            this.getNodeHeight(node.left), this.getNodeHeight(node.right)
        ) + 1;
    }

    // 计算平衡因子
    getBalanceFactor(node) {
        const heightDifference = this.getNodeHeight(node.left) - this.getNodeHeight(node.right);
        switch (heightDifference) {
            case -2:
                return BalanceFactor.UNBALANCED_RIGHT;
            case -1:
                return BalanceFactor.SLIGHTLY_UNBALANCED_RIGHT;
            case 1:
                return BalanceFactor.SLIGHTLY_UNBALANCED_LEFT;
            case 2:
                return BalanceFactor.UNBALANCED_LEFT
            default:
                return BalanceFactor.BALANCED;
        }
    }

    rotationLL(node) {
        const tmp = node.left;
        node.left = tmp.right;
        tmp.right = node;
        return tmp;
    }

    rotationRR(node) {
        const tmp = node.right;
        node.right = tmp.left;
        tmp.left = node;
        return tmp;
    }

    rotationLR(node) {
        node.left = this.rotationRR(node.left);
        return this.rotationLL(node);
    }

    rotationRL(node) {
        node.right = this.rotationLL(node.right);
        return this.rotationRR(node);
    }

}
