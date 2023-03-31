import "./Widgets.css";
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed
} from "react-twitter-embed";
import SearchIcon from "@mui/icons-material/Search";
function Widgets() {
  return (
    <div className="widgets">
      <div className="widgets__input">
        <SearchIcon className="widgets__SearchIcon" />
        <input placeholder="Search Twitter" type="text" />
      </div>
      <div className="widgets__widgetContainer">
        <h2>What's happening</h2>
        <TwitterTweetEmbed tweetId={"1641636943258877952"} />

        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="@cvipin787"
          options={{ height: 400 }}
        />

        <TwitterShareButton
          url={"https://facebook.com/sandeep Projects"}
          options={{
            text: "Subscribe my Youtube Channel #CodeWithNewtonSchool",
            via: "VipinProject"
          }}
        />
      </div>
    </div>
  );
}

export default Widgets;
