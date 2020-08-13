// This component should request detailed article information
import React from 'react'

export default function ArticleDetails(props) {
    const article = props.location.state.article;
    
    function handleClick(e) {
        e.preventDefault();
        console.log('Article Saved');
    }
    return (
        <div className="container section article-details">
            <div className="card z-depth-0">
                <div className="card-content">
                <button className = "right btn red lighten-2 z-depth-0" onClick = { handleClick }>Favourite</button>
                    <span className="card-title">{article.title}</span>
                    <div className="card-action grey-text">
                        <div>Authors: { article.authors.map((author) => author + " " )} </div>
                        <div>Published: </div>
                    </div>
                    <p>{article.content}</p>
                </div>
            </div>
        </div>
    )
}