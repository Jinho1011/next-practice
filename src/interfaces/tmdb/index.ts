export interface fetchTmdbError {
  status_message: string;
  status_code: number;
}

export interface fetchTmdbInvalid {
  status_message: string;
  success: boolean;
  status_code: number;
}
