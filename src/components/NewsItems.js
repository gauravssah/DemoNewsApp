import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export class NewsItems extends Component {



    render() {

        let { tital, description, imageUrl, newsUrl, auther, date, source } = this.props;

        return (

            <div>
                <div className="card position-relative" >
                    <span className="position-absolute top-0  translate-middle badge rounded-pill bg-danger" style={{ left: "18%", zIndex: "1", minWidth: "10rem" }} >{source.name}</span>
                    <img src={imageUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{tital}</h5>
                        <p className="card-text">{description}</p>
                        <p className="card-text text-warning"><small className="text-danger ">By- {!auther ? "Unknown" : auther} on {new Date(date).toLocaleString()}</small></p>
                        <Link to={newsUrl} target='_blank' className="btn btn-sm btn-primary">Read More</Link>
                    </div>
                </div>

            </div>
        )
    }
}

export default NewsItems
