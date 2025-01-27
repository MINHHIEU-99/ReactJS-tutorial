import React from "react";

import './Type.css';

const Type = function(props) {
    return (
        <div className="hotels__type">
				<p className="hotels__type-title">Browse by property type</p>
				<div className="hotels__type-item">
					<div className="hotels__item">
						<img src={props.items[0].image} alt="" />
						<div className="hotels__type-description">
							<p className="type__name">{props.items[0].name}</p>
							<p className="type__count">{props.items[0].count} hotels</p>
						</div>
					</div>
					<div className="hotels__item">
						<img src={props.items[1].image} alt="" />
						<div className="hotels__type-description">
							<p className="type__name">{props.items[1].name}</p>
							<p className="type__count">{props.items[1].count} hotels</p>
						</div>
					</div>
					<div className="hotels__item">
						<img src={props.items[2].image} alt="" />
						<div className="hotels__type-description">
							<p className="type__name">{props.items[2].name}</p>
							<p className="type__count">{props.items[2].count} hotels</p>
						</div>
					</div>
					<div className="hotels__item">
						<img src={props.items[3].image} alt="" />
						<div className="hotels__type-description">
							<p className="type__name">{props.items[3].name}</p>
							<p className="type__count">{props.items[3].count} hotels</p>
						</div>
					</div>
					<div className="hotels__item">
						<img src={props.items[4].image} alt="" />
						<div className="hotels__type-description">
							<p className="type__name">{props.items[4].name}</p>
							<p className="type__count">{props.items[4].count} hotels</p>
						</div>
					</div>
				</div>
			</div>
    )
}

export default Type;