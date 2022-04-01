import { googleLoginDev, googleLoginProd } from '../config.json';
import GImg from '../imgs/google-logo.png';
export const GOOGLE_AUTH_LINK = 'http://localhost:3000/auth/google';

export const ButtonGoogle = ({ text }) => {
  let googleAuthLink = process.env.NODE_ENV === 'development' ? googleLoginDev : googleLoginProd;

  return (
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: 10 }}>
      <a className="google-btn" style={{ width: '100%' }} href={googleAuthLink.url}>
        <img src={GImg} style={{ height: 28 }} alt="dd" />
        <span>{text}</span>
      </a>
    </div>
  );
};
