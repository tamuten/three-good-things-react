import { useState, useEffect } from "react";

export const Good = (props) => {
  const [good, setGood] = useState(props.good);
  const [count, setCount] = useState(good.length);
  const [tmpGood, setTmpGood] = useState(good);
  const [tmpCount, setTmpCount] = useState(count);
  const [editMode, setEditMode] = useState(false);

  const handleClick = () => setEditMode(!editMode);
  const handleTextChange = (e) => {
    setTmpGood(() => e.target.value);
  };

  useEffect(() => {
    setTmpCount(tmpGood.length);
  }, [tmpGood]);

  useEffect(() => {
    setCount(good.length);
  }, [good]);

  const handleCancelBtnClick = () => {
    setTmpGood(() => good);
    handleClick();
  };

  const handleSaveBtnClick = () => {
    setGood(() => tmpGood);
    handleClick();
  };

  return (
    <>
      {editMode ? (
        <div>
          <textarea onChange={handleTextChange}>{tmpGood}</textarea>
          <p>{tmpCount}</p>
          <button onClick={handleCancelBtnClick}>キャンセル</button>
          <button onClick={handleSaveBtnClick}>保存</button>
        </div>
      ) : (
        <div className="edit">
          <a onClick={handleClick}>{good ? good : "タップして編集する"}</a>
        </div>
      )}
    </>
  );
};
