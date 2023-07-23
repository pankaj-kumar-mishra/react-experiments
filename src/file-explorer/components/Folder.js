import React, { useState } from "react";
import styles from "../FileExplorer.module.css";

const Folder = ({ data, handleInsert }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showInput, setShowInput] = useState({
    visible: false,
    isFolder: false,
  });

  const handleFolderClick = () => {
    setIsOpen(!isOpen);
  };

  const handleNewFolderClick = (e) => {
    e.stopPropagation();
    setIsOpen(true);
    setShowInput({ visible: true, isFolder: true });
  };

  const handleNewFileClick = (e) => {
    e.stopPropagation();
    setIsOpen(true);
    setShowInput({ visible: true, isFolder: false });
  };

  const handleResetInput = () => {
    setShowInput((prev) => ({ ...prev, visible: false }));
  };

  const handleSubmitInput = (e) => {
    if (e.keyCode === 13 && e.target.value) {
      // Way One
      //   data.items.unshift({
      //     id: "12",
      //     name: e.target.value,
      //     isFolder: showInput.isFolder,
      //     items: [],
      //   });

      // Way Two
      handleInsert({
        folderId: data.id,
        item: e.target.value,
        isFolder: showInput.isFolder,
      });

      handleResetInput();
    }
  };

  if (data.isFolder) {
    return (
      <div className={styles.folderSection}>
        <div onClick={handleFolderClick} className={styles.folder}>
          <span>📒 {data.name}</span>
          <div>
            <button onClick={handleNewFolderClick} className={styles.btn}>
              New 📒
            </button>
            <button onClick={handleNewFileClick} className={styles.btn}>
              New 📄
            </button>
          </div>
        </div>
        <div
          className={styles.files}
          style={{ display: isOpen ? "block" : "none" }}
        >
          {showInput.visible && (
            <div className={styles.inputBox}>
              <span>{showInput.isFolder ? "📒" : "📄"}</span>
              <input
                className={styles.input}
                autoFocus
                onBlur={handleResetInput}
                onKeyDown={handleSubmitInput}
              />
            </div>
          )}
          {data.items.map((item) => {
            return (
              <Folder key={item.id} data={item} handleInsert={handleInsert} />
            );
          })}
        </div>
      </div>
    );
  }

  return (
    <div className={styles.file}>
      <span>📄 {data.name}</span>
    </div>
  );
};

export default Folder;
