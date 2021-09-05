import React, { useEffect } from "react";
import Map from "./Map/Map";
import PlaceList from "./PlaceList/PlaceList";
import { Container, Row, Col } from "react-bootstrap";
import { useTripContext } from "../../context/TripStateProvider";
import { getPlacesData } from "./API/travelAdvisorAPI";
import "./tripadvisor.css";

function TripAdvisor() {
	const { type, bounds, setCoords, setChildClicked, setPlaces } = useTripContext();

	useEffect(() => {
		navigator.geolocation.getCurrentPosition(({ coords: { latitude, longitude } }) => {
			setCoords({ lat: latitude, lng: longitude });
		});
	}, []);

	useEffect(() => {
		if (bounds.sw && bounds.ne) {
			getPlacesData(type, bounds.sw, bounds.ne).then((data) => {
				console.log("Getting Places Data");
				setPlaces(data);
				setChildClicked(undefined);
			});
		}
	}, [bounds]);

	return (
		<Container fluid>
			<Row>
				<Col
					sm={{ span: 12, order: "last" }}
					md={{ span: 4, order: "first" }}
					lg={{ span: 3, order: "first" }}
					xl={{ span: 2, order: "first" }}
					className="px-0"
				>
					<div className="place-list-container">
						<PlaceList />
					</div>
				</Col>
				<Col
					sm={{ span: 12, order: "first" }}
					md={{ span: 8, order: "last" }}
					lg={{ span: 9, order: "first" }}
					xl={{ span: 10, order: "first" }}
					className="px-0"
				>
					<Map />
				</Col>
			</Row>
		</Container>
	);
}

export default TripAdvisor;
