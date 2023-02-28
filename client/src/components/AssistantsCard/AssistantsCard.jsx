import React from "react";
import "./styles/AssistantsCard.css";

const AssistantsCard = ({ data }) => {
    return <div className="AssistantsCard">
        <div className="AssistantsCard__header">
            <img />
            <div>
                <p>{data.nombre} {data.apellido}</p>
                <p>{data.cargo}</p>
            </div>
            <div>
                <img />
            </div>
        </div>
        <div className="AssistantsCard__body">
            <ul>
                <li>{data.pais}, {data.ciudad}</li>
                <li>{data.telefono}</li>
                <li>{data.correo}</li>
            </ul>
        </div>
    </div>;
};

export default AssistantsCard;
