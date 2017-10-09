import compose from "../core/compose";

import prepareElementsList from "./prepareElementsList";
import templateParseFromString from "./templateParseFromString";
import modelToHTML from "./modelToHTML";

export default compose(prepareElementsList, templateParseFromString, modelToHTML);
