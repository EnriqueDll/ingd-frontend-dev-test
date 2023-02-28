import React from "react";
import "./styles/AssistantsCard.css";

import imgID from "../../assets/images/Icono-ID.svg";
import imgMail from "../../assets/images/Icono-Mail.svg";
import imgPhone from "../../assets/images/Icono-Telefono2.svg";
import imgAvHombre from "../../assets/images/Avatar-Hombre.svg";
import imgAvMujer from "../../assets/images/Avatar-Mujer.svg";
import img3dots from "../../assets/images/3dots.svg";

const ListItem = ({ imgSr, children }) => {
    return (
        <li className="AssistantsCard__list_item">
            <img src={imgSr} />
            <span>{children}</span>
        </li>
    );
};

const AssistantsCard = ({ data }) => {
    return (
        <div className="AssistantsCard">
            <div className="AssistantsCard__header">
                <div className="AssistantsCard__header_aux">
                    <img
                        className="AssistantsCard__header_avatar"
                        src={imgAvHombre}
                    />

                    <div>
                        <p className="AssistantsCard__header_name">
                            {data.nombre} {data.apellido}
                        </p>

                        <p className="AssistantsCard__header_position">
                            {data.cargo}
                        </p>
                    </div>
                </div>

                <img className="AssistantsCard__header_dots" src={img3dots} />

            </div>

            <div className="AssistantsCard__body">
                <ul>
                    <ListItem imgSr={imgID}>{data.id}</ListItem>
                    <ListItem imgSr={imgPhone}>{data.telefono}</ListItem>
                    <ListItem imgSr={imgMail}>{data.correo}</ListItem>
                </ul>
            </div>
        </div>
    );
};

export default AssistantsCard;
