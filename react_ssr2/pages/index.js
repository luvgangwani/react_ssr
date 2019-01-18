import React from 'react';
import './index.css';
import './Card.css';
import data from '../data/data.json';
import Card from './Card';
import Link from 'next/link';

export default class Index extends React.Component {

    static async getInitialProps(){
        return {
            cards: data
        }
    }

    render(){
        return (
                <div className = "App">
                    <header className = "App-header">
                        <img src = "../static/logo.png" alt = "logo" className = "static-logo" />
                    </header>
                    <div>
                        <Link href="/page2">Page 2</Link> &nbsp;
                        <Link href="/page3">Page 3</Link>
                    </div>
                    <div className = "Grid">
                        {
                            this.props.cards.map((card) => {
                                return(
                                    <Card key={ card.id } />
                                )
                            })
                        }
                    </div>
                </div>
        );
    }
}