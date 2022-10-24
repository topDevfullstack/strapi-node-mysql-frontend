import React from 'react';
import styles from '../../styles/Home.module.css'
// import {} from './style.css';

const UiButton = props => {
  const classes = (props.isClicked) ?
    "button clicked" : "button";
  const number = (props.isClicked) ?
        (props.number + 1) : props.number;
  
  return (
    <button className={classes} id={props.text} 
      onClick={() => props.onClick()}>
      <span className={styles.icon}>{props.icon} </span> 
      {number}
    </button>
  );
};

class ButtonBox extends React.Component {
  constructor(props) {
    super(props);
    // console.log(props.likeIsClicked);
    this.state = {
      likeIsClicked: props.likeIsClicked

    };
  }
  
  toggle(index) {
    let state = {};
    state[index] = !this.state[index];
    this.setState(state);
  }
  
  render() {
    return (
      <div>
        <UiButton icon='♥' text='likes'
          number={this.props.likes}
          onClick={() => 
            this.toggle('likeIsClicked')}
          isClicked={this.state.likeIsClicked}/>
      </div>
    );
  }  
}

const UiCard = props => {
  let {video, content} = props;
  // console.log('video',props);
  const vvv = 'http://localhost:1337' + video.url;
  return (
    <div class={styles.wrapper}>
      <div className={styles.img}>
        <video src={vvv} />
      </div>
      <div className={styles.content}>
        <h3>{video.title}</h3>
        <div>{content}</div>
      </div>
      </div>
  );
}

class SocialCard extends React.Component {
  render() {
    return (
      <div className={styles.body}>
        <UiCard {...this.props}/>
        <div className={styles.lin}></div>
          <div style={{textAlign: 'right'}}>
            <ButtonBox 
            likeIsClicked={this.props.likeIsClicked}
            likes={this.props.likes}/>
        </div>
      </div>
      
    );
  }
};

export default SocialCard;