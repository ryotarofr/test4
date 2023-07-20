import getPostMetadata from "../components/getPostMetadata";
import PostPreview from "../components/PostPreview";

export const revalidate = 60

const HomePage = () => {
  const postMetadata = getPostMetadata();
  const postPreviews = postMetadata.map((post) => (
    <PostPreview key={post.slug} {...post} />
  ));

  return (
    // <div className="grid grid-cols-1 md:grid-cols-2 gap-4">{postPreviews}</div>
    <div>aaa</div>
  );
};

export default HomePage;
