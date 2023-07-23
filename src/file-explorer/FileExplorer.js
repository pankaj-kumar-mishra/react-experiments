import React, { useState } from "react";
import { explorerData } from "./assets";
import { Folder } from "./components";
import styles from "./FileExplorer.module.css";
import useTraverseTree from "./hooks/useTraverseTree";

const FileExplorer = () => {
  const [data, setData] = useState(explorerData);
  const { insertNode } = useTraverseTree();

  const handleInsertNode = ({ folderId, item, isFolder }) => {
    const finalTree = insertNode({ tree: data, folderId, item, isFolder });
    console.log("🚀 ~ file: FileExplorer.js:13 ~ finalTree:", finalTree);
    setData(finalTree);
  };

  return (
    <div className={styles.container}>
      <h3>File Explorer</h3>
      <Folder data={data} handleInsert={handleInsertNode} />
    </div>
  );
};

export default FileExplorer;
