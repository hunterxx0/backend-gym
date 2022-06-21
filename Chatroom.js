import React from "react";
import { firestore } from "../../firebase";
import { collection, query, orderBy, limit, doc } from "firebase/firestore";

import ChatMessage from "./ChatMessage";
import { useCollectionData } from "react-firebase-hooks/firestore";

const Chatroom = () => {
  const converter = {
    toFirestore(post) {
      return {
        text: post.text,
      };
    },
    fromFirestore(snapshot, options) {
      const data = snapshot.data(options);
      return {
        id: snapshot.id,
        text: data.text,
        createdAt: data.createdAt,
      };
    },
  };

  const messagesRef = collection(firestore, "messages");
  const q = query(messagesRef, orderBy("createdAt"), limit(25));

  const [messages, loading, error] = useCollectionData(q, {
    snapshotListenOptions: { includeMetadataChanges: true },
  });

  return (
    !error && (
      <>
        <div>
          {messages &&
            messages.map((msg) => <ChatMessage key={msg.id} message={msg} />)}
        </div>
      </>
    )
  );
};

export default Chatroom;
