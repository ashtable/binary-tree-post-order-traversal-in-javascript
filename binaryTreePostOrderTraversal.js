const postOrder = function (node) {
  let result = [];
  if (node) {
    result = result.concat(postOrder(node.left));
    result = result.concat(postOrder(node.right));
    result.push(node.value);
  }
  return result;
}

module.exports = postOrder;
