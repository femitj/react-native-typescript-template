export interface Signup {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  countryCode: string;
  phoneNumber: string;
  resetCode?: string;
  referralCode?: string;
}
export interface Signin {
  email: string;
  password: string;
}
export interface signInResponse {
  status: boolean;
  code: number;
  message: string;
  data: {
    token: string;
    id: string;
    lastLoggedIn: any;
    [x: string]: any;
  };
}

export interface AuthStateType {
  id: string | null;
  firstLogin: boolean;
  token: string | null;
  status: string | null;
  [x: string]: any;
}
