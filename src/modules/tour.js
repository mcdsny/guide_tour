import React from "react";

import PersonIcon from "@material-ui/icons/Person";
import SendIcon from "@material-ui/icons/Send";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";

import crackerIcon from "/src/assets/images/cracker_icon.png";
import entryBtn from "/src/assets/images/entry_btn.png";

const bgColors = ["#CAEDEB", "#FFE1E0", "#FFF7B0", "#C7FFC4", "#FCFCEB"];

const steps = [
  {
    content: (
      <div>
        <p>
          本記事の最下部に設置された「募集要項およびエントリーフォーム」ボタンをクリック
        </p>
        <a href="https://www.fundely.co.jp/blog/tech/entry/" target="_blank">
          <img src={entryBtn} alt="エントリーボタン" />
        </a>
      </div>
    )
  },
  {
    content: (
      <React.Fragment>
        <div>
          <PersonIcon />
        </div>
        <p>プロフィール情報の入力</p>
      </React.Fragment>
    )
  },
  {
    content: (
      <div>
        <SendIcon />
        <p>応募</p>
      </div>
    )
  },
  {
    content: (
      <div>
        <SupervisorAccountIcon />
        <p>面接</p>
        <span>（複数回）</span>
      </div>
    )
  },
  {
    content: (
      <div>
        <img className="icon" src={crackerIcon} alt="クラッカーアイコン" />
        <p>内定！！</p>
      </div>
    )
  }
];

// action-type
const TOGGLE_RUN = "TOGGLE_RUN";

// reducer
const initialState = {
  run: false,
  steps: steps.map((step, i) => ({
    target: `.target${i + 1}`,
    title: `ステップ${i + 1}`,
    content: step.content,
    locale: {
      skip: <strong>スキップ</strong>,
      back: <strong>前へ</strong>,
      next: <strong>次へ</strong>,
      last: <strong>終了</strong>
    }
  })),
  bgColors: bgColors
};

export default function style(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_RUN:
      return {
        ...state,
        run: !state.run
      };
    default:
      return state;
  }
}

// action-creator
export const toggleRun = () => ({
  type: TOGGLE_RUN
});
