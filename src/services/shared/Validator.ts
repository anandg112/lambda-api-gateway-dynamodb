import { SpaceEntry } from "../models/Model";

export class MissingFieldError extends Error {
  constructor(missingField: string) {
    super(`Missing required field: ${missingField}`);
  }
}

export function validateAsSpaceEntry(arg: any) {
  if ((arg as SpaceEntry).location === undefined) {
    throw new MissingFieldError("location");
  }
  if ((arg as SpaceEntry).name === undefined) {
    throw new MissingFieldError("name");
  }
  if ((arg as SpaceEntry).id === undefined) {
    throw new MissingFieldError("id");
  }
}
