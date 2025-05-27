import type { FC, ComponentProps } from "react";

interface UnreadMessage extends ComponentProps<"div"> {
  // unreadMessage: Array<string | number>;
  // unreadMessage: (string | number)[];
  unreadMessage: any[];
}

// import React from 'react';

const Mailbox: FC<UnreadMessage> = ({ unreadMessage }) => {
  return (
    <div>
      <h1>Hello</h1>
      {/* {unreadMessage.length && <p>{unreadMessage.length}개를 안 읽었습니다</p>} */}
      {unreadMessage.length > 0 && (
        <p>{unreadMessage.length}개를 안 읽었습니다</p>
      )}
    </div>
  );
};

export default Mailbox;
