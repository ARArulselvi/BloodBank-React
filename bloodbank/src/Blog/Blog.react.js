import React from 'react';
import FeedBack from '../FeedBack/FeedBack.react';

class Blog extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            likeCount:1,
            unlikeCount:1
        }
    }
    incrementLikes=()=>{
        console.log('increment likes called');
        this.setState({likeCount:this.state.likeCount+1});
    }
    incrementDislikes=()=>{
        console.log('increment dislikes called');
        this.setState({unlikeCount:this.state.unlikeCount+1});
    }
    render() {
        console.log('render called');

        return (
            <div >
                <article>
                    <h1>Who can donate blood</h1>
                    <p>You are eligible to donate blood if you are in good health, weigh at least 110 pounds and are 17 years or older.You are not eligible to donate blood if you:
Have ever used self-injected drugs (non-prescription)
Had hepatitis
Are in a high-risk group for AIDS</p>
                </article>
                <p><span>Likes:</span>{this.state.likeCount}</p>
                <p><span>Dislikes:</span>{this.state.unlikeCount}</p>
                <FeedBack likeAction={this.incrementLikes} dislikeAction={this.incrementDislikes} ></FeedBack>
            </div>
        );
    }
}


export default Blog;