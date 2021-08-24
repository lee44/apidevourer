import React from "react";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";
import { Place } from "../../../context/TripStateProvider";
import "./placedetail.css";
import { MdEmail } from "react-icons/md";

const PlaceDetail: React.FC<{ place: Place }> = ({ place }) => {
	return (
		<Card className="card-size">
			<Card.Img variant="top" className="card-img" src={place.photo.images.original.url} />
			<Card.Body>
				<Card.Title>
					<Card.Link className="href" href={place.website}>
						{place.name}
					</Card.Link>
					{/* <span>{place.open_now_text}</span> */}
				</Card.Title>
				<Card.Subtitle>
					{place.rating} stars | ({place.num_reviews}) | {place.price_level}
				</Card.Subtitle>
				<Card.Text>{place.address}</Card.Text>
				<Card.Text>{place.description}</Card.Text>
			</Card.Body>
			<ListGroup className="list-group-flush">
				<ListGroupItem>
					<MdEmail></MdEmail>
					{place.email}
				</ListGroupItem>
			</ListGroup>
		</Card>
	);
};

export default PlaceDetail;
