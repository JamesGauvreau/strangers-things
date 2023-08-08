const cohortName = '2306-FSA-ET-WEB-FT';
const baseURL = `https://strangers-things.herokuapp.com/api/${cohortName}`

const fetchPosts = async () => {
    try {
        console.log(`test PF in PF`);
      const response = await fetch(`${baseURL}/posts`)
  
      const result = await response.json();
      console.log(result);
      return result.data.posts;
    } catch (err) {
      console.error(err);
    }
  }

const PostsFetch = await fetchPosts()

  export default PostsFetch