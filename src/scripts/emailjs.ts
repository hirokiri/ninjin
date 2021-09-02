import emailjs from 'emailjs-com';
import {config} from '../scripts/config';

emailjs.init(config.emailjs.user_id);

type TemplateData = {
  contact_id: number,
  message: string,
  to_name: string,
  from_name: string,
  to_email: string,
  from_email: string,
  reply_email: string,
};

export const sendReplyContent = (data: TemplateData) => {
  emailjs.send(
    config.emailjs.gmail_service_id,
    config.emailjs.template_id,
    data,
  );
};


