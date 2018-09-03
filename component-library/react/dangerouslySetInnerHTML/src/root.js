import React, {Fragment} from 'react';
import ReactDOM from "react-dom";

const Root = (props) => {
    return (
        <Fragment>
            <div className="text" dangerouslySetInnerHTML={{__html: props.html}}></div>
        </Fragment>
    );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<Root html={"<h1>本日は晴天</h1>"}/>, rootElement);