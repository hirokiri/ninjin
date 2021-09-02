export type ContactInfo = {
  contactId: number,
  firstName: string,
  lastName: string,
  country: string,
  zipcode: string,
  address1: string,
  address2: string,
  tel: string,
  email: string,
  organization: string,
  position: string,
  isOrganizationAddress: boolean,
  message: string,
};


export interface Props {
  setContactInfo(contactInfo: ContactInfo): void;

  contactInfo: ContactInfo;
}
