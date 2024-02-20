import React from "react";


export const City = (props) => {
	const {name, photo, population, area, district} = props;
	return(
		<>
			<div className="cityElements">
				<img className='cityPhoto' src={photo}></img>
				<div className="city"><b>Name:</b> {name}</div>
				<div className="cityPopulation"><b>Population:</b> {population}</div>
				<div className="cityArea"><b>Area:</b> {area}</div>
				<div className="cityDisrict"><b>District:</b> {district}</div>
			</div>
	  	</>
	);
};

/*<div className="cityImg">
				<img className='cityPhoto' src="photo"></img>
			</div>
			<table className='city'>
				<thead>
					<tr className='cityTitle'>
						<th className='title'>Name of city: </th>
						<th className='title'>Population: </th>
						<th className='title'>Area: </th>
						<th className='title'>District: </th>
					</tr>
				</thead>
				<tbody>
					<tr className='cityInfo'>
						<td className='cityName'>{name}</td>
						
						<td className='cityPopulation'>{population}</td>
						<td className='cityArea'>{area}</td>
						<td className='cityDistrict'>{district}</td>
					</tr>
				</tbody>
			</table>*/