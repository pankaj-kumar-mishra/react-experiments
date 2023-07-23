const useTraverseTree = () => {
  const insertNode = ({ tree, folderId, item, isFolder }) => {
    if (tree.id === folderId && tree.isFolder) {
      tree.items.unshift({
        id: Date.now(),
        name: item,
        isFolder,
        items: [],
      });

      return tree;
    }

    const latestNode = tree.items.map((objItem) =>
      insertNode({ tree: objItem, folderId, item, isFolder })
    );

    return { ...tree, items: latestNode };
  };

  return { insertNode };
};

export default useTraverseTree;
