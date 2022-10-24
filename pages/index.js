import axios from 'axios';
import SocialCard from "../components/Card";
import styles from '../styles/Home.module.css'
// import FTP from 'basic-ftp';

// async function example() {
  
//   const client = new FTP.Client()
//   client.ftp.verbose = true
//   try {
//       await client.access({
//           host: "65.108.103.246",
//           user: "freelancer",
//           password: "6sEbmm4rj7tX2x72",
//           secure: true
//       })
//       console.log(await client.list())
//       // await client.uploadFrom("README.md", "README_FTP.md")
//       // await client.downloadTo("README_COPY.md", "README_FTP.md")
//   }
//   catch(err) {
//       console.log(err)
//   }
//   client.close()
// }

const Home = ({ videos, error }) => {
  function handleClick () {
    console.log('ftp');
    // example();
  }

  if (error) {
    return <div>An error occured: {error.message}</div>;
  }
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        {/* <ul> */}
        <div className={styles.grid1}>
          {videos.data.map(video => (
            // <li key={video.id}>
              <SocialCard 
                key={video.id}
                video={video.attributes}
                content='This is a media.'
                likes='3'
                // likeIsClicked={video.likeIsClicked}
              />
            // </li>
          ))}
        </div>
        {/* </ul> */}
        <div className={styles.grid1}>
          <button className={styles.success} onClick={handleClick}>Upload</button>
        </div>
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