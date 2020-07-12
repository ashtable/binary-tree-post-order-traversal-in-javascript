const TreeNode = require('./treeNode');
const postOrder = require('./binaryTreePostOrderTraversal');

test('null root TreeNode returns a result of empty array', () => {
  expect(postOrder(null)).toStrictEqual([]);
});

test('complete tree returns post-order traversal', () => {
  // Arrange
  const p = new TreeNode('P');
  const y = new TreeNode('Y');
  const t = new TreeNode('T');
  const h = new TreeNode('H');
  const o = new TreeNode('O');
  const n = new TreeNode('N');

  const rootNode = n;
  n.left = t;
  t.left = p;
  t.right = y;
  n.right = o;
  o.left = h;

  // Act & Assert
  expect(postOrder(rootNode)).toStrictEqual(['P', 'Y', 'T', 'H', 'O', 'N']);
});

test('left-only tree returns post-order traversal', () => {
  // Arrange
  const p = new TreeNode('P');
  const y = new TreeNode('Y');
  const t = new TreeNode('T');
  const h = new TreeNode('H');
  const o = new TreeNode('O');
  const n = new TreeNode('N');

  const rootNode = n;
  n.left = o;
  o.left = h;
  h.left = t;
  t.left = y;
  y.left = p;

  // Act & Assert
  expect(postOrder(rootNode)).toStrictEqual(['P', 'Y', 'T', 'H', 'O', 'N']);
});

test('right-only tree returns post-order traversal', () => {
  // Arrange
  const p = new TreeNode('P');
  const y = new TreeNode('Y');
  const t = new TreeNode('T');
  const h = new TreeNode('H');
  const o = new TreeNode('O');
  const n = new TreeNode('N');

  const rootNode = n;
  n.left = o;
  o.left = h;
  h.left = t;
  t.left = y;
  y.left = p;

  // Act & Assert
  expect(postOrder(rootNode)).toStrictEqual(['P', 'Y', 'T', 'H', 'O', 'N']);
});
