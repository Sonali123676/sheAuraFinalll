import React from "react";

const DialogflowChatbot = () => {
  return (
    <div>
      <df-messenger
        intent="WELCOME"
        chat-title="SheAura"
        agent-id="8482803c-273d-40d6-8214-0da28eb04a80"
        language-code="en"
      ></df-messenger>

      {/* <iframe
        width="350"
        height="430"
        allow="microphone;"
        src="https://console.dialogflow.com/api-client/demo/embedded/8482803c-273d-40d6-8214-0da28eb04a80"
      ></iframe> */}

      <style>
        {`
          df-messenger {
            --df-messenger-bot-message: #fa77ab;
            --df-messenger-button-titlebar-color: #ff5599;
            --df-messenger-chat-background-color: #fafafa;
            --df-messenger-font-color: #fff;
            --df-messenger-user-message: #f495cb;
          }
        `}
      </style>
    </div>
  );
};

export default DialogflowChatbot;
