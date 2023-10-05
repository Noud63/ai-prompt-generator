"use client"

import {useState, useEffect} from 'react'
import PromptCard from './PromptCard'

const PromptCardList = ({data, handleTagClick}) => {
   return (
    <div className="mt-16 prompt_layout">
        {data.map( (post)  => (
             <PromptCard 
             key={post._id}
             post={post}
             handleTagClick={handleTagClick}
             /> 
        ))}
    </div>
   )
}

const Feed = () => {
  const [posts, setPosts] = useState([]);

  const [searchText, setSearchText] = useState("");
  const [searchTimeout, setSearchTimeout] = useState(null);
  const [searchedResults, setSearchedResults] = useState([]);


  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch("/api/prompt");
      const data = await response.json();
      setPosts(data);
    };
    fetchPosts();
  }, []);


  const filterPrompts = (searchtext) => {
    const regex = new RegExp(searchtext, "i");
        return posts.filter((post) => 
             regex.test(post.creator.username) ||
             regex.test(post.tag) ||
             regex.test(post.prompt)
    );
  };


  const handleSearchChange = (e) => {
    clearTimeout(searchTimeout);
    setSearchText(e.target.value);
    //debounce
    setSearchTimeout(
      setTimeout(() => {
        const searchResult = filterPrompts(e.target.value);
        setSearchedResults(searchResult);
      },500)
    );
  };
  

  const handleTagClick = async (tag) => {
     setSearchText(tag)

     const searchResult = filterPrompts(tag)
     setSearchedResults(searchResult)
  }

  //Filter data server side (mongoDB aggregate)
  // const searchInput = async (e) => {
  //    if (searchText === "") return alert("No search query!");
  //    const response = await fetch(`/api/prompt/search/${searchText}`);
  //        const data = await response.json();
  //         setPosts(data)
  //       }

  // const handleTagClick = async (tag) => {
  //    const response = await fetch(`/api/prompt/tags/${tag}`);
  //        const data = await response.json();
  //         setPosts(data);
  // }

  return (
    <section className="feed">
      <form className="relative w-full flex-center">
        <input
          type="text"
          placeholder="Search for a tag or username"
          defaultValue={searchText}
          onChange={handleSearchChange}
          className="search_input peer"
        />
        {/* <div className="absolute right-2 cursor-pointer">
          <Image
            src="/assets/icons/magnifyingglass.png"
            width={25}
            height={25}
            onClick={searchInput}
            alt="icon"
          />
        </div> */}
      </form>

      {searchText ? (
        <PromptCardList
          data={searchedResults}
          handleTagClick={handleTagClick}
        />
      ) : (
        <PromptCardList data={posts} handleTagClick={handleTagClick} />
      )}
    </section>
  );
}

export default Feed
