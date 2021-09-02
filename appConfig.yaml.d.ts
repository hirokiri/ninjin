declare const _: {
  emailjs: Emailjs;
  our: Our;
};
interface Our {
  name: string;
  email: string;
}
interface Emailjs {
  user_id: string;
  access_token: string;
  gmail_service_id: string;
  template_id: string;
}
export default _;
