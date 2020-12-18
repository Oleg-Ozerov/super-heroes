export interface User {
  login?: string;
  email: string;
  password: string;
}

export interface Token {
  token: string;
  expire: string;
}
