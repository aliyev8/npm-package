import React from "react";

type Props = {
  color: string;
  background: string;
  content: string;
};

const MobileHeader = (props: Props) => {
  return (
    <div
      style={{
        background: props?.background,
        color: props?.color,
        width: "100%",
        height: "100%",
      }}
    >
      {props.content}
    </div>
  );
};

export default MobileHeader;
