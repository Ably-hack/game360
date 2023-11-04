class EndPoints {
  static API_VERSION = 'v1';
  static LOCAL_BASE_ROOT = 'http://localhost:8000';
  static REMOTE_BASE_ROOT = 'https://game360-backend.vercel.app';
  static LOCAL_BASE = `${this.LOCAL_BASE_ROOT}/${this.API_VERSION}`;
  static REMOTE_BASE = `${this.REMOTE_BASE_ROOT}/${this.API_VERSION}`;
  static BASE_URL = this.REMOTE_BASE;
  static LOGIN = `${this.BASE_URL}/account/login`;
  static REGISTER = `${this.BASE_URL}/account/register`;
}

export default EndPoints;
