
import React from 'react';

import '../styles/content.css';

export default class Content extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cats: [
                'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg',
                'https://pbs.twimg.com/profile_images/378800000532546226/dbe5f0727b69487016ffd67a6689e75a_400x400.jpeg',
                'http://r.ddmcdn.com/s_f/o_1/cx_0/cy_157/cw_1327/ch_1327/w_720/APL/uploads/2013/01/smart-cat-article.jpg',
                'https://i.kym-cdn.com/photos/images/newsfeed/001/384/531/8ed.jpg',
                'https://i.kym-cdn.com/entries/icons/original/000/003/629/1282839532626.jpg?1282841656',
                'https://www.telegraph.co.uk/content/dam/pets/2017/01/06/1-JS117202740-yana-two-face-cat-news_trans_NvBQzQNjv4BqJNqHJA5DVIMqgv_1zKR2kxRY9bnFVTp4QZlQjJfe6H0.jpg?imwidth=450',
                'https://www.publicdomainpictures.net/pictures/20000/velka/funny-cat-871298226790TvQ.jpg',
                'https://media.giphy.com/media/26FPCXdkvDbKBbgOI/giphy.gif',
                'https://78.media.tumblr.com/85dc1aa383ad152c46d1d473f0752b3c/tumblr_mp2bcgMGAK1qh2v9fo1_400.png'
            ],
            dogs: [
                'https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/American_Eskimo_Dog.jpg/612px-American_Eskimo_Dog.jpg',
                'https://d2oc0ihd6a5bt.cloudfront.net/wp-content/uploads/sites/2120/2018/02/img-about-ADAI_01.png',
                'https://i.redd.it/i5zx1dbkgk001.jpg',
                'http://a.fod4.com/images/user_photos/1256272/aea04236a6d9f48f2a11edad03488119_square_fullsize.png',
                'https://www.meme-arsenal.com/memes/c15889e8c9dcaa760bdd8e049fe6acbc.jpg',
                'https://media.giphy.com/media/o22WjU9bIgFWM/giphy.gif',
                'https://i.ytimg.com/vi/B7G4z88O3lE/hqdefault.jpg',
                'http://i.imgur.com/NGsUkX4.jpg'
            ],
            birds: [
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb_sjVH9Xvc9XWqs_cFZSkTmtocjEFTysphqBfcL8XDOUc831zBw',
                'https://kids.nationalgeographic.com/content/dam/kids/photos/animals/Birds/A-G/bald-eagle-closeup.ngsversion.1396530980855.adapt.470.1.jpg',
                'https://i.gifer.com/YUaq.gif',
                'https://imgix.ranker.com/node_img/3392/67827615/original/philippine-eagle-photo-1?w=650&q=50&fm=jpg&fit=crop&crop=faces',
                'https://dickstannard.com/wp-content/uploads/2013/06/beautiful-bird-p2-04.jpg',
                'http://www.fageln.se/Upload/forum/2911/12417/d103f427-69f7-4f30-a770-c529eb0a1919.jpeg',
                'https://media.giphy.com/media/TZ8OLMdN4cdjO/giphy.gif'
            ]
        }
    }

    render() {

        let cats = this.state.cats.map(x => {
            return (
                <div className="imageDiv" key={x}>
                    <img src={x}/>
                </div>
            );
        });

        let dogs = this.state.dogs.map(x => {
            return (
                <div className="imageDiv" key={x}>
                    <img src={x}/>
                </div>
            );
        });

        let birds = this.state.birds.map(x => {
            return (
                <div className="imageDiv" key={x}>
                    <img src={x}/>
                </div>
            );
        });


        let currentAnimal = cats;
        if(this.props.animal == 'cat') {
            currentAnimal = cats;
        }
        else if(this.props.animal == 'dog') {
            currentAnimal = dogs;
        }
        else if(this.props.animal == 'bird') {
            currentAnimal = birds;
        }

        return (
            <div id="content">
                <div className="imagesContent" >
                    {currentAnimal}
                </div>
            </div>
        );
    }
}