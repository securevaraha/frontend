interface WhatsAppConfig {
  accessToken: string;
  phoneNumberId: string;
  verifyToken: string;
  apiVersion: string;
}

interface WhatsAppMessage {
  messaging_product: 'whatsapp';
  to: string;
  type: 'document' | 'text' | 'template';
  document?: {
    link: string;
    caption?: string;
    filename?: string;
  };
  text?: {
    body: string;
  };
  template?: {
    name: string;
    language: { code: string };
    components?: any[];
  };
}

class WhatsAppService {
  private config: WhatsAppConfig;
  private baseUrl: string;

  constructor() {
    this.config = {
      accessToken: process.env.WHATSAPP_ACCESS_TOKEN || '',
      phoneNumberId: process.env.WHATSAPP_PHONE_NUMBER_ID || '',
      verifyToken: process.env.WHATSAPP_VERIFY_TOKEN || '',
      apiVersion: 'v18.0'
    };
    this.baseUrl = `https://graph.facebook.com/${this.config.apiVersion}`;
  }

  async sendDocument(to: string, documentUrl: string, caption: string, filename: string) {
    const message: WhatsAppMessage = {
      messaging_product: 'whatsapp',
      to: to.replace(/\D/g, ''), // Remove non-digits
      type: 'document',
      document: {
        link: documentUrl,
        caption,
        filename
      }
    };

    return this.sendMessage(message);
  }

  async sendText(to: string, text: string) {
    const message: WhatsAppMessage = {
      messaging_product: 'whatsapp',
      to: to.replace(/\D/g, ''),
      type: 'text',
      text: { body: text }
    };

    return this.sendMessage(message);
  }

  async sendTemplate(to: string, templateName: string, languageCode: string, parameters: string[] = []) {
    const message: WhatsAppMessage = {
      messaging_product: 'whatsapp',
      to: to.replace(/\D/g, ''),
      type: 'template',
      template: {
        name: templateName,
        language: { code: languageCode },
        components: parameters.length > 0 ? [{
          type: 'body',
          parameters: parameters.map(param => ({ type: 'text', text: param }))
        }] : undefined
      }
    };

    return this.sendMessage(message);
  }

  private async sendMessage(message: WhatsAppMessage) {
    try {
      const response = await fetch(`${this.baseUrl}/${this.config.phoneNumberId}/messages`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${this.config.accessToken}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(message)
      });

      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(`WhatsApp API Error: ${data.error?.message || 'Unknown error'}`);
      }

      return {
        success: true,
        messageId: data.messages?.[0]?.id,
        data
      };
    } catch (error) {
      console.error('WhatsApp send error:', error);
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error'
      };
    }
  }

  verifyWebhook(mode: string, token: string, challenge: string) {
    if (mode === 'subscribe' && token === this.config.verifyToken) {
      return challenge;
    }
    return null;
  }
}

export const whatsappService = new WhatsAppService();
export type { WhatsAppMessage, WhatsAppConfig };