import React from "react";
import { Card } from "react-bootstrap";
import { Place } from "../../../context/TripStateProvider";
import "./placedetail.css";
import { MdStar } from "react-icons/md";

const PlaceDetail: React.FC<{ place: Place; selected: boolean; refProp: React.MutableRefObject<HTMLDivElement> }> = ({ place, selected, refProp }) => {
	if (selected) {
		refProp?.current?.scrollIntoView({ behavior: "smooth", block: "start" });
		console.log("ScrollIntoView Called");
	}
	return (
		<Card ref={refProp}>
			<Card.Img variant="top" className="card-img" src={place.photo.images.original.url} />
			<Card.Body>
				<Card.Title>
					<Card.Link className="href" href={place.website}>
						{place.name}
					</Card.Link>
					{/* <span>{place.open_now_text}</span> */}
				</Card.Title>
				<Card.Subtitle>
					{place.rating} <MdStar className="star" /> | ({place.num_reviews}) | {place.price_level}
				</Card.Subtitle>
				<Card.Text>{place.address_obj.street1 + ", " + place.address_obj.city}</Card.Text>
				{/* <Card.Text>{place.description}</Card.Text> */}
			</Card.Body>
			{/* <ListGroup className="list-group-flush">
				<ListGroupItem>
					<MdEmail></MdEmail>
					{place.email}
				</ListGroupItem>
			</ListGroup> */}
		</Card>
	);
};

export default React.memo(PlaceDetail);
