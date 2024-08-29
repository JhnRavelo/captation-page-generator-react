import { TypeSetBoolean } from "../context/CampagneProvider";
import { TypeSetAuthAndBool } from "../hooks/useSendFile";

export function isSetBool(obj: TypeSetAuthAndBool): obj is TypeSetBoolean {
  if (obj && typeof obj === "function") {
    const hasCallOrApply =
      typeof obj.call === "function" || typeof obj.apply === "function";
    return hasCallOrApply;
  }
  return false;
}
