import * as data from "../../notifications.json";
import { normalize, schema} from "normalizr";

export default function getAllNotificationsByUser(userId) {
  return data.default
    .filter((item) => item.author.id === userId)
    .map(({ context }) => context);
};

const user = new schema.Entity("users");

const message = new schema.Entity(
  "messages",
  {},
  {idAttribute: guid}
);

const notification = new schema.Entity(
  "notifications",
  {
    author: user,
    context: message
});

const normalized = normalize(data.default, [notification]);

export { normalized };
