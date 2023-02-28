import React, { useLayoutEffect, useState } from "react";
import "./styles/Assistants.css";
import searchImg from "../../assets/images/search.svg";
import plusImg from "../../assets/images/Icono-add.svg";
import { getAssistants } from "../../services/assistants.service";
import AssistantsCard from "../../components/AssistantsCard/AssistantsCard";

const Header = () => {
	return (
		<div className="header">
			<div className="title_wrapper">
				<h1 className="title">Colaboradores</h1>
				<img src={plusImg} />
			</div>
			<label className="search_wrapper">
				<img src={searchImg} />
				<input type="text" placeholder="Buscar" />
			</label>
		</div>
	);
};

const Assistants = () => {
	const [list, setList] = useState([]);

	useLayoutEffect(() => {
		const getList = async () => {
			const list = await getAssistants();
			setList(list);
			console.log(list);
		};

		getList();
	}, []);

	return (
		<div className="Assistants">
			<Header />
			<div className="cards__container">
				{list.map((item) => (
					<AssistantsCard data={item} />
				))}
			</div>
		</div>
	);
};

export default Assistants;
