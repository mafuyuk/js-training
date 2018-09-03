const parser = new DOMParser();
// <h1>本日は晴天</h1>
// <h1>明日は大雨</h1>
const stringContainingHTMLSource = "&lt;h1&gt;本日は晴天&lt;/h1&gt;\n&lt;h1&gt;明日は大雨&lt;/h1&gt;";
const doc = parser.parseFromString(stringContainingHTMLSource, "text/html");

const contents = document.getElementById("contents");
contents.innerHTML = doc.body.innerText;