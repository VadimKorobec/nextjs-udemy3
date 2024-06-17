import { createPost } from "@/actions/posts";
import PostForm from "@/components/PostForm/PostForm";

const NewPostPage = () => {
  return (
    <>
      <PostForm action={createPost} />
    </>
  );
};

export default NewPostPage;
