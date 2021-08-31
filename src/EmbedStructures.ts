//embed structures from https://discord.com/developers/docs/resources/channel#embed-object-embed-structure
export interface EmbedFooter {
  text: string;
  "icon_url"?: string;
  "proxy_icon_url"?: string;
}
export interface EmbedImage {
  url: string;
  "proxy_url"?: string;
  height?: string;
  width?: string;
}
export interface EmbedThumbnail {
  url: string;
  "proxy_url"?: string;
  height?: string;
  width?: string;
}
export interface EmbedVideo {
  url: string;
  "proxy_url"?: string;
  height?: string;
  width?: string;
}
export interface EmbedProvider {
  name?: string;
  url?: string;
}
export interface EmbedAuthor {
  name: string;
  url?: string;
  "icon_url"?: string;
  "proxy_icon_url"?: string;
}
export interface EmbedField {
  name: string;
  value: string;
  inline?: boolean
}