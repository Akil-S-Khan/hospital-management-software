import React from "react";
import Layout from "../components/common/Layout";
import MessageLayout from "../components/message/MessageLayout";

const MessagesPage = () => {
  return (
    <Layout title={"Message"}>
      <div className="ms-2">
        <MessageLayout />
      </div>
    </Layout>
  );
};

export default MessagesPage;
