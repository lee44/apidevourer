import axios from "axios";

type LatLong = {
	lat: number;
	lng: number;
};

export const getPlacesData = async (type: string, sw: LatLong, ne: LatLong) => {
	try {
		const {
			data: { data },
		} = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`, {
			params: {
				bl_latitude: sw.lat,
				bl_longitude: sw.lng,
				tr_longitude: ne.lng,
				tr_latitude: ne.lat,
			},
			headers: {
				"x-rapidapi-key": process.env.REACT_APP_RAPID_API_TRAVEL_API_KEY,
				"x-rapidapi-host": "travel-advisor.p.rapidapi.com",
			},
		});

		return data;
	} catch (error) {
		console.log(error);
	}
};
