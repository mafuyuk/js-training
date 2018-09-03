import React, {Fragment} from 'react';
import ReactDOM from "react-dom";

const sourceString = `
&lt;h1&gt;本日の天気予報&lt;/h1&gt;
本日は晴天です
しかし明日には台風が接近することが予想されるので十分に注意してください。
`;

const convertToHTMLCharacters = (escapedSpecialHTMLCharacters) => {
    const parser = new DOMParser();
    const htmlChar = parser.parseFromString(escapedSpecialHTMLCharacters, "text/html").body.innerText;
    return htmlChar.replace(/\r?\n/g, '<br>');
};

const Root = (props) => {
    const htmlChar = convertToHTMLCharacters(props.html);
    return (
        <Fragment>
            <div className="text" dangerouslySetInnerHTML={{__html: htmlChar}}></div>
        </Fragment>
    );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<Root html={sourceString}/>, rootElement);