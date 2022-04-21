import {Count} from "./api-interface";

export function increaseCount(count: Count): Count {
  return count + 1;
}