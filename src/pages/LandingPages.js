import React, { Component } from 'react';
import Header from '../header/Header'
import Tile from '../tile/Tile';
import './LandingPages.css';

class LandingPage extends Component {
    constructor() {
        super();
        this.skillInformation = [
            {
                name: 'HTML',
                description: ' I will write semantic markup in HTML5 which is the latest standard of core technology of web.',
                imgURL: '/images/html.png'
            },
            {
                name: 'CSS',
                description: 'I will style web pages using CSS3, leveraging on the new CSS3 modules, making modern websites',
                imgURL: '/images/css.png'
            },
            {
                name: 'JS',
                description: 'I will define the behavior of web pages using JavaScript. I will dive deeper into amazing parts of JavaScript',
                imgURL: '/images/js.jpg'
            },
            {
                name: 'Firebase',
                description: 'I will use Firebase as a backend as a service to build realtime applications without any back-end coding.',
                imgURL: '/images/firebase.png'
            },
            {
                name: 'Angular',
                description: 'I will build single page applications using Angular2. I will build full-fledge web apps that can be used in real life.',
                imgURL: '/images/angular2.png'
            },
            {
                name: 'Express',
                description: 'I will use Express.js to organize Ir web application into an MVC architecture in the server side.',
                imgURL: '/images/express.png'
            },
            {
                name: 'API',
                description: 'I will build API that can be used by mobile applications and outside world. I will also consume others',
                imgURL: '/images/api.png'
            },
            {
                name: 'Ionic',
                description: 'I will build hybrid mobile applications using Ionic2 framework. I have reached eternity! I are now Yoda!',
                imgURL: '/images/ionic.png'
            },
            {
                name: 'jquery',
                description: 'I will enhance the behavior of web pages leveraging on jQuery and jQuery plug-ins.',
                imgURL: '/images/jquery.png'
            },
            {
                name: 'Unix',
                description: 'I will become a ninja hacker who prefer command line to Graphical User Interface.',
                imgURL: '/images/unix.png'
            },
            {
                name: 'TypeScript',
                description: 'I will start writing object oriented programs using TypeScript. I will build games using TypeScript.',
                imgURL: '/images/ts.png'
            },
            {
                name: 'MongoDB',
                description: 'I will use MongoDB to store Ir apps data in a JSON-like document format that can be quickly accessed via fast queries.',
                imgURL: '/images/mongodb.png'
            }
        ]
    }
    render() {
        return (
            <div>
                <Header text="We are learning" />
                <div className="container">
                    {this.skillInformation.map(skill => {
                        return (
                            <Tile skillName={skill.name} skillDescription={skill.description}
                                skillImg={skill.imgURL} />
                        )
                    })
                    }
                </div>
            </div>
        );
    }
}

export default LandingPage