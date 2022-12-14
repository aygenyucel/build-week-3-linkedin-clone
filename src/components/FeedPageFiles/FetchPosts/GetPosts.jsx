import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getFeedPostsAction } from "../../../redux/actions";

const GetPosts = () => {
  const dispatch = useDispatch();
  const feedPosts = useSelector((state) => state.feedPosts.feedPosts);
  useEffect(() => {
    dispatch(getFeedPostsAction());
  }, []);

  console.log(feedPosts);
  return (
    <div>
      {feedPosts.map((element) => (
        <div>{element.text}</div>
      ))}
    </div>
  );
};

export default GetPosts;
