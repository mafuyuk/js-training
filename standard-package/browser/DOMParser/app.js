const parser = new DOMParser();
// <p>本日は晴天</p>
// <p>明日は大雨</p>
const stringContainingHTMLSource = "&lt;p&gt;本日は晴天&lt;&frasl;p&gt;\n&lt;p&gt;明日は大雨&lt;&frasl;p&gt;";
const doc = parser.parseFromString(stringContainingHTMLSource, "text/html");

const contents = document.getElementById("contents");
contents.innerHTML = doc.body.innerHTML;