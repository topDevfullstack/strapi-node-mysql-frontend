import React, { useState } from "react";
import axios from 'axios';
import SocialCard from "../components/Card";
import styles from '../styles/Home.module.css'

const Home = ({ videos, error }) => {
  const [list, setList] = useState({});

  async function handleClick () {
    try {
      const res = await axios.get('http://localhost:1337/api/ftp-scan');
      const videos = res.data;
      console.log(videos);
      setList(videos);
      console.log('list',list);
    } catch (error) {
      console.log('error');
      return { error };
    }
  }

  if (error) {
    return <div>An error occured: {error.message}</div>;
  }
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <div className={styles.grid1}>
          {videos.data.map(video => (
            <SocialCard 
              key={video.id}
              video={video.attributes}
              content='This is a media.'
              likes='3'
              // likeIsClicked={video.likeIsClicked}
            />
          ))}
        </div>
        <div className={styles.grid1}>
          <button className={styles.success} onClick={handleClick}>Upload</button>
        </div>
        <table >
          {list && list.map(item => (
            <tr key={item.id}>
              <td>{item.title}</td>
              <td>{item.provider}</td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
};

Home.getInitialProps = async ctx => {
  try {
    const res = await axios.get('http://localhost:1337/api/videos');
    const videos = res.data;
    return { videos };
  } catch (error) {
    console.log('error');
    return { error };
  }
};

export default Home;