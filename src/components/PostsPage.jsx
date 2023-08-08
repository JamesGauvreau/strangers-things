import PostsFetch from "./PostsFetch";

function PostsPage() {
  console.log(`below is test of PF in PP`);
  console.log(PostsFetch);
  return (
    <>
      <h1>Posts</h1>
      <br></br>
      {/* <PostsFetch /> */}
      {PostsFetch.map((posty) => {
        console.log(`below is test of PF in map`);
        console.log(posty);
        return (
          <>
            <h2>{posty.title}</h2>
            <br></br>
            <p><i>{posty.description}</i></p>
            <p><b>Price: </b>{posty.price}</p>
            <p><b>Seller: </b>{posty.seller}</p>
            <p><b>Location: </b>{posty.location}</p>
            <br></br>
            <br></br>
          </>
        );
      })}
    </>
  );
}

export default PostsPage;
