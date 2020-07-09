import React, { Component } from "react";
import ItemDetails from "../parts/ItemDetails";
export default class ItemDetailsPages extends Component {
	render() {
		return (
			<>
				<ItemDetails data={DataItemDetailsPages.ItemDetails} />
			</>
		);
	}
}