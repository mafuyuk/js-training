import React, {Fragment} from 'react';
import ReactDOM from "react-dom";

const Root = () => {
    return (
        <Fragment>
            <div className="text" dangerouslySetInnerHTML={{__html: "<p>本日は晴天</p>"}}></div>
        </Fragment>
    );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<Root />, rootElement);