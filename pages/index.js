import axios from 'axios';

const Home = ({ videos, error }) => {
  if (error) {
    return <div>An error occured: {error.message}</div>;
  }
  return (
    <ul>
      {videos.data.map(video => (
        <li key={video.id}>{video.attributes.tilte}</li>
      ))}
    </ul>
  );
};

Home.getInitialProps = async ctx => {
  try {
    const res = await axios.get('http://localhost:1337/api/videos');
    const videos = res.data;
    console.log(videos);
    return { videos };
  } catch (error) {
    return { error };
  }
};

export default Home;