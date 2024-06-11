import React from "react";

import ToolWrapper from "./styles/ToolBar.styles";

const toolBarData = [
  {
    id: "camera",
    label: "카메라",
  },
  {
    id: "mic",
    label: "마이크",
  },
  {
    id: "chat",
    label: "채팅",
  },
  {
    id: "share",
    label: "화면공유",
  },
  {
    id: "participant",
    label: "참가자",
  },
  {
    id: "request",
    label: "말하기 요청",
  },
  {
    id: "view",
    label: "타일뷰",
  },
  {
    id: "setting",
    label: "설정",
  },
];

const ToolBar = () => {
  return (
    <ToolWrapper>
      <div className="toolInput">
        <span>입장 후 툴바 표시 시간 설정</span>
        <select id="startTool" name="startTool" defaultValue="20000">
          <option value="20000">20,000&#40;ms&#41;</option>
          <option value="40000">40,000&#40;ms&#41;</option>
        </select>
      </div>
      <div className="toolInput">
        <span>회의 중 툴바 표시 시간 설정</span>
        <select id="runningTool" name="runningTool" defaultValue="4000">
          <option value="4000">4,000&#40;ms&#41;</option>
          <option value="2000">2,000&#40;ms&#41;</option>
        </select>
      </div>
      <div className="toolInput">
        <span>회의 입장 인원 제한</span>
        <input type="number" id="limit" step={1} value={20} />
      </div>
      <p>
        툴바 UI <span>회의 시 툴바 버튼 표시를 설정</span>
      </p>
      <div className="toolCheckbox">
        {toolBarData.map((toolbar) => (
          <div key={toolbar.id + toolbar.label}>
            <label htmlFor={toolbar.id}>{toolbar.label}</label>
            <input
              type="checkbox"
              id={toolbar.id}
              name={toolbar.id}
              defaultChecked={true}
            />
          </div>
        ))}
      </div>
    </ToolWrapper>
  );
};

export default ToolBar;
