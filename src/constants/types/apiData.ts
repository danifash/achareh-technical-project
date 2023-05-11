export interface IAddressData {
  id?: number;
  address_id?: string;
  region?: {
    id: number;
    name: string;
    city_object: {
      city_id: number;
      city_name: string;
    };
    state_object: {
      state_id: number;
      state_name: string;
    };
  };
  address: string;
  last_name: string;
  first_name: string;
  gender: string;
  lat: number;
  lng: number;
  coordinate_mobile: string;
  coordinate_phone_number: string;
}

export interface IStringField {
  value: string;
  error: string;
}

export interface INumberField {
  value: number;
  error: string;
}

export interface IAddressFields {
  address: IStringField;
  last_name: IStringField;
  first_name: IStringField;
  gender: IStringField;
  lat: INumberField;
  lng: INumberField;
  coordinate_mobile: IStringField;
  coordinate_phone_number: IStringField;
}
