import { filter } from 'lodash';
import {useState} from 'react';

import { useLoaderData, Link, useSearchParams} from 'react-router-dom';
import styles from './Home.module.css';

import Header from '../../components/Header';

const Home = () => {
  const posts = useLoaderData();
  console.log(posts)

  let [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState("");

  function handleSearch(event) {
    event.preventDefault();
    // The serialize function here would be responsible for
    // creating an object of { key: value } pairs from the
    // fields in the form that make up the query.
    setSearchParams({q: search});
  };

  function filterByCategory(event) {
    setSearchParams({ct_id: event.target.id})
  };

  function trimTextTo50Words(text) {
    // Split the text into an array of words
    const words = text.split(' ');
  
    // If the text is already 50 words or less, return it as is
    if (words.length <= 50) {
      return text;
    }
  
    // Otherwise, join the first 50 words and add an ellipsis
    const trimmedText = words.slice(0, 50).join(' ') + '...';
    return trimmedText;
  };

  return (
    <div className={`${styles.Home} Page`}>
        <Header />
        <div className={styles.Search}>
            <input name="q" value={search} onChange={(e) => {setSearch(e.target.value)}}/>
            <button onClick={(e) => handleSearch(e)}>Search posts</button>
        </div>
        <div className={styles.Category}>
            <button id="1" onClick={(event) => filterByCategory(event)}>Technology</button>
            <button id="2" onClick={(event) => filterByCategory(event)}>Food</button>
            <button id="3" onClick={(event) => filterByCategory(event)}>Travel</button>
            <button id="4" onClick={(event) => filterByCategory(event)}>Lifestyle</button>
        </div>
        <main>
            {
            posts.length  > 0 ?
            posts.map(({post_id, title, content}) => (
                <article key={post_id}>
                    <h3 className="PostHeading">{title}</h3>
                    <p>{trimTextTo50Words(content)}</p>
                    <Link to={`/posts/${post_id}`}>
                        <button className="ReadMore">Read more</button>
                    </Link>
                    <hr />
                </article>
            ))
            : <h4>No posts to display.</h4>
            }
        </main>
    </div>
  )    
}

export default Home;