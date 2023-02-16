function getTargetCopy(original: TreeNode | null, cloned: TreeNode | null, target: TreeNode | null): TreeNode | null {
    let ans = target;
    inOrder(original, cloned);
    function inOrder(original, cloned) {
        if(!original) return;
        inOrder(original.left, cloned.left);
        if(original === target) ans = cloned;
        inOrder(original.right, cloned.right);
    }
    return ans;
};
