import { Platform, Image } from "react-native";

const unknownArtistImage = require("@/assets/images/unknown_artist.png");
const unknownTrackImage = require("@/assets/images/unknown_track.png");

export const unknownArtistImageUri =
  Platform.OS === "web"
    ? (unknownArtistImage as string) // On web, require/import resolves to a URL string
    : Image.resolveAssetSource(unknownArtistImage).uri;

export const unknownTrackImageUri =
  Platform.OS === "web"
    ? (unknownTrackImage as string)
    : Image.resolveAssetSource(unknownTrackImage).uri;
