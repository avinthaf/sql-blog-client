import { filter } from 'lodash';
import {useState} from 'react';

import { useLoaderData, Link, useSearchParams} from 'react-router-dom';
import styles from './Home.module.css';

const Home = () => {
  const posts = useLoaderData();

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
  return (
    <div className={`${styles.Home} Page`}>
        <h1><u>SIMPLE JS + SQL BLOG</u></h1>
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
            posts && posts.map(({post_id, title, content}) => (
                <article key={post_id}>
                    <h3>{title}</h3>
                    <p>{content}</p>
                    <Link to={`/posts/${post_id}`}>
                        <button>Read more</button>
                    </Link>
                    <hr />
                </article>
            ))
            }
        </main>
    </div>
  )    
}

export default Home;