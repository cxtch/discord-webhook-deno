import { EmbedFooter, EmbedImage, EmbedThumbnail, EmbedVideo, EmbedProvider, EmbedAuthor, EmbedField } from './EmbedStructures.ts'
class RichEmbed {
  title?: string;
  description?: string;
  url?: string;
  timestamp?: string;
  color?: number;
  footer?: EmbedFooter;
  image?: EmbedImage;
  thumbnail?: EmbedThumbnail;
  video?: EmbedVideo;
  provider?: EmbedProvider;
  author?: EmbedAuthor;
  fields?: EmbedField[];
  /**
  @param title the title of the embed 
  @param description the description of the embed
  @param url a hyperlink for the title 
  @param timestamp timestamp of the embedded content 
  @param color color code for the embed
  @param footer footer information
  @param image image information
  @param thumbnail thumbnail information
  @param video video information
  @param provider provider information
  @param author author information
  @param fields fields information
  */
  constructor(title?: string, description?: string, url?: string, timestamp?: string, color?: number, footer?: EmbedFooter, image?: EmbedImage, thumbnail?: EmbedThumbnail, video?: EmbedVideo, provider?: EmbedProvider, author?: EmbedAuthor, fields?: EmbedField[]) {
    this.title = title;
    this.description = description;
    this.url = url;
    this.timestamp = timestamp;
    this.color = color;
    this.footer = footer;
    this.image = image;
    this.thumbnail = thumbnail;
    this.video = video;
    this.provider = provider;
    this.author = author;
    this.fields = fields;
  }

}
export {
  RichEmbed
}