import _ from "lodash";
import { CREATE_EVENT, READ_EVENTS, READ_EVENT, UPDATE_EVENT, DELETE_EVENT } from "../actions";

export default (events = {}, action) => {
  switch (action.type) {
    case CREATE_EVENT:
    case READ_EVENT:
    case UPDATE_EVENT:
      const data = action.response.data;
      return { ...events, [data.id]: data }; // data.idに該当するものだけ、eventsから上書きする。
    case READ_EVENTS:
      // lodashのmapkeysで配列構造を変える。idをキーとして抽出して、検索しやすくする。
      return _.mapKeys(action.response.data, "id");
    case DELETE_EVENT:
      delete events[action.id];
      return { ...events };
    default:
      return events;
  }
};
