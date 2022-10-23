import axios from 'axios';
import styles from '../styles/Home.module.css'

const Home = ({ videos, error }) => {
  if (error) {
    return <div>An error occured: {error.message}</div>;
  }
  return (
    <div className={styles.container}>
      <ul>
        {videos.data.map(video => (
          <li key={video.id}>{video.attributes.title}</li>
        ))}
      </ul>
      <button className={styles.success}>Upload</button>
    </div>
  );
};

Home.getInitialProps = async ctx => {
  try {
    const res = await axios.get('http://localhost:1337/api/videos');
    const videos = res.data;
    console.log('fdsa',videos);
    return { videos };
  } catch (error) {
    console.log('error');
    return { error };
  }
};

export default Home;