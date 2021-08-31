import { RichEmbed } from './EmbedBuilder.ts'
class Webhook {
  webhook: string;
  /**
   * @param webhook your discord webhook
   */
  constructor(webhook: string) {
    this.webhook = webhook;
  }
  post(data: string | RichEmbed) {
    if (typeof this.webhook == 'undefined') {
      //ensure webhook has been defined.
      throw new Error('Please construct before using methods: this.webhook is not defined');
    }
    let payload: unknown;
    if (typeof data == 'string') {
      payload = {
        content: data
      };
    } else {
      //assume the object follows the embed structure, files are currently not supported
      payload = {
        content: '',
        embeds: [data]
      };
    }
    //post to the webhook with the data
    const res = fetch(this.webhook, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    });
    //return the response
    return res;
  }
  /**
   * 
   * @returns Webhook Object https://discord.com/developers/docs/resources/webhook#webhook-object
   */
  async get() {
    if (typeof this.webhook == 'undefined') {
      //ensure webhook has been defined.
      throw new Error('Please construct before using methods: this.webhook is not defined');
    }
    const res = await fetch(this.webhook, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    });
    return await res.json();
  }
  /**
   * @param name the webhook's new name. Use undefined to not change
   * @param avatar image data https://discord.com/developers/docs/reference#image-data 
   * @returns modified Webhook Object https://discord.com/developers/docs/resources/webhook#webhook-object
  */
  async modify(name?: string, avatar?: 'image data') {
    if (typeof this.webhook == 'undefined') {
      //ensure webhook has been defined.
      throw new Error('Please construct before using methods: this.webhook is not defined');
    }
    //webhook endpoint accepts undefined valujes
    const payload = {
      name: name,
      avatar: avatar
    };
    const res = await fetch(this.webhook, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    });
    return await res.json();
  }
  /**
   * 
   * @returns true if the webhook was deleted, false otherwise
   */
  async delete() {
    if (typeof this.webhook == 'undefined') {
      //ensure webhook has been defined.
      throw new Error('Please construct before using methods: this.webhook is not defined');
    }
    const res = await fetch(this.webhook, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    });
    if (res.status === 204)
      return true;
    return false;
  }
}
export {
  Webhook
}