import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { Good } from "./Good";

const diaryList = [
  {
    date: new Date(2022, 4, 8),
    good: [
      "9万円の椅子が座り心地が良かった。欲しい。",
      "西野七瀬はやっぱり可愛い",
      "風呂を裸足で掃除すると冷たいので、風呂用の靴を買うか。",
    ],
  },
  {
    date: new Date(2022, 4, 9),
    good: [
      "ikzwさんに腰痛のアドバイスもらった。",
      "パソコンスタンド買うかなぁ",
      "表示がうまくいきますように",
    ],
  },
  {
    date: new Date(2022, 4, 10),
    good: [
      "今日は5月10日です",
      "パソコンスタンドを買ったら、目線が上に行って良いかもしれない",
      "表示はきっとうまくいくだろう",
    ],
  },
];

const equalDate = (expected, actual) => {
  return (
    expected.getDate() == actual.getDate() &&
    expected.getMonth() == actual.getMonth() &&
    expected.getFullYear() == actual.getFullYear()
  );
};

const Diary = () => {
  

  // const [dt, setDt] = useState(() => new Date());
  // const initializeDiary = () => {
  //   for (let d of diaryList) {
  //     if (equalDate(dt, d.date)) {
  //        return d.good;
  //     }
  //   }
  // }
  // const [diary, setDiary] = useState(initializeDiary);

  // const handlePrevBtn = () => {
  //   setDt((prev) => prev.getDate() - 1);
  // };

  // const handleNextBtn = () => {
  //   setDt((prev) => prev.getDate() + 1);
  // };



  // useEffect(() => {
  //   for (let d of diaryList) {
  //     if (equalDate(dt, d.date)) {
  //       setDiary(() => d.good);
  //     }
  //   }
  // }, [dt]);

  return (
    <>
      {/* <ul>
        <li>
          <button >prev</button>
        </li>
        <li>
          <button o>next</button>
        </li>
      </ul>
      <p></p> */}
      <Good  />
      <Good  />
      <Good  />
    </>
  );
};

ReactDOM.render(<Diary />, document.getElementById("root"));
