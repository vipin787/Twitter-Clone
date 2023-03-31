import "./TweetBox.css";
import Avatar from "@mui/material/Avatar";
import db from "../Firebase/firebase";
import { useState } from "react";
import firebase from "firebase";
function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");

  const sendTweet = (e) => {
    e.preventDefault();

    db.collection("posts").add({
      displayName: "Vipin Chauhan",
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      username: "cvipin787",
      verified: true,
      text: tweetMessage,
      image: tweetImage,
      avatar: "https://avatars.githubusercontent.com/u/110002254?s=400&u=e23f3d6437d4d21d3be3e5f4934a721d457d8c4b&v=4"
    });

    setTweetMessage("");
    setTweetImage("");
  };
  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar src="https://avatars.githubusercontent.com/u/110002254?s=400&u=e23f3d6437d4d21d3be3e5f4934a721d457d8c4b&v=4" />
          <input
            onChange={(e) => setTweetMessage(e.target.value)}
            value={tweetMessage}
            placeholder="What's happening ?"
            type="text"
          />
        </div>
        <input
          onChange={(e) => setTweetImage(e.target.value)}
          value={tweetImage}
          className="tweetBox__imageInput"
          placeholder="Optional : Enter Image URL"
          type="text"
        />
        <button onClick={sendTweet} className="tweetBox__tweetButton">
          Tweet
        </button>
      </form>
    </div>
  );
}
export default TweetBox;
