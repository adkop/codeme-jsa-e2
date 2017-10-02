import compose from "./compose";
import prepareElementsList from "./prepareElementsList";
import TPLParseFromString from "./TPLParseFromString";
import htmlModelSet from "./htmlModelSet";

export default compose(prepareElementsList, TPLParseFromString, htmlModelSet);