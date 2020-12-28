import React from 'react';
import "./Widgets.css";
import InfoIcon from "@material-ui/icons/Info";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

function Widgets() {

    const newArticle = (heading, subtitle) => (
        <div className="widgets__article">
            <div className="widgets__articleLeft">
                <FiberManualRecordIcon />
            </div>

            <div className="widgets__articleRight">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    )


    return (
        <div className="widgets">
            <div className="widgets__header">
                <p>LinkedIn News</p>
                <InfoIcon />
            </div>
            {newArticle("React on Fire", "Top news - 999 readers")}
            {newArticle("React on Fire", "Top news - 999 readers")}
            {newArticle("React on Fire", "Top news - 999 readers")}
            {newArticle("React on Fire", "Top news - 999 readers")}
        </div>
    )
}

export default Widgets
