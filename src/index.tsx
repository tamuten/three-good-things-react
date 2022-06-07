import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { Good } from "./Good.tsx";

const diaryList = [
  {
    date: new Date(2022, 6, 3),
    good: [
      "9万円の椅子が座り心地が良かった。欲しい。",
      "西野七瀬はやっぱり可愛い",
      "風呂を裸足で掃除すると冷たいので、風呂用の靴を買うか。",
    ],
  },
  {
    date: new Date(2022, 6, 4),
    good: [
      "ikzwさんに腰痛のアドバイスもらった。",
      "パソコンスタンド買うかなぁ",
      "表示がうまくいきますように",
    ],
  },
  {
    date: new Date(2022, 6, 6),
    good: [
      "今日は5月10日です",
      "パソコンスタンドを買ったら、目線が上に行って良いかもしれない",
      "表示はきっとうまくいくだろう",
    ],
  },
];

// 初期データサンプル
// {
//   date: new Date(2022, 6, 3),
//   good: [
//     "9万円の椅子が座り心地が良かった。欲しい。",
//     "西野七瀬はやっぱり可愛い",
//     "風呂を裸足で掃除すると冷たいので、風呂用の靴を買うか。",
//   ],
// }


const equalDate = (expected, actual) => {
  return (
    expected.getDate() == actual.getDate() &&
    expected.getMonth() == actual.getMonth() &&
    expected.getFullYear() == actual.getFullYear()
  );
};

const Diary = () => {
  console.log("render");
  const initialDate: Date = new Date();
  const [sysDate, setSysDate] = useState(initialDate);
  const [diary, setDiary] = useState(null);

  const prevDate = (today: Date): Date => {
    today.setDate(today.getDate() - 1);
    return today;
  }

  const nextDate = (today: Date): Date => {
    today.setDate(today.getDate() + 1);
    return today;
  }

  const handlePrevBtn = () => {
    let sysDateSlice = new Date(sysDate.getTime());
    setSysDate(prevDate(sysDateSlice));
  };

  const handleNextBtn = () => {
    let sysDateSlice = new Date(sysDate.getTime());
    setSysDate(nextDate(sysDateSlice));
  };

  useEffect(() => {
    for (let d of diaryList) {
      if (equalDate(sysDate, d.date)) {
        setDiary(() => d);
      }
    }
  }, [sysDate]);

  return (
    <>
      <ul>
        <li>
          <button onClick={handlePrevBtn}>prev</button>
        </li>
        <li>
          <button onClick={handleNextBtn}>next</button>
        </li>
      </ul>
      <p>{sysDate.getFullYear() + "/" + (sysDate.getMonth() + 1) + "/" + sysDate.getDate()}</p>
      <Good good={diary == null ? "" : diary.good[0]} />
      <Good good={diary == null ? "" : diary.good[1]} />
      <Good good={diary == null ? "" : diary.good[2]} />
    </>
  );
};

ReactDOM.render(<Diary />, document.getElementById("root"));
