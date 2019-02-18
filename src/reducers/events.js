import _ from "lodash";
import { READ_EVENTS } from "../actions";

export default (events = {}, action) => {
  switch (action.type) {
    case READ_EVENTS:
      // lodashのmapkeysで配列構造を変える。idをキーとして抽出して、検索しやすくする。
      return _.mapKeys(action.response.data, "id");
    default:
      return events;
  }
};
