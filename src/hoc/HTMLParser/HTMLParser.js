import React, { Fragment } from 'react';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
 
class HtmlComponent extends React.Component {
  render(props) {
    const html = '<div>Example HTML string</div>';
    return <Fragment>{ ReactHtmlParser(html) }</Fragment>;
  }
}