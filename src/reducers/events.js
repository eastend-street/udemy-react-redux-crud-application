import _ from "lodash";
import { READ_EVENTS, DELETE_EVENT } from "../actions";

export default (events = {}, action) => {
  switch (action.type) {
    case READ_EVENTS:
      // lodashのmapkeysで配列構造を変える。idをキーとして抽出して、検索しやすくする。
      return _.mapKeys(action.response.data, "id");
    case DELETE_EVENT:
      delete events[action.id]
      return {...events}
    default:
      return events;
  }
};
