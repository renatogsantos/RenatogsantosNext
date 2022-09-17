import {
  DiscordLogo,
  GithubLogo,
  InstagramLogo,
  LinkedinLogo,
  TwitterLogo,
  WhatsappLogo,
} from "phosphor-react";

export default function CardPerfil({ avatar, bio, name }) {
  return (
    <div className="card-perfil">
      <div className="position-relative pt-5 w-100">
        <img
          draggable={false}
          className="card-perfil-avatar"
          src={avatar}
          alt="teste"
        />
      </div>
      <span className="font-12 py-2">{bio}</span>
      <span className="font-32 py-2">{name}</span>
      <div className="d-flex align-items-center justify-content-around w-100 pt-3">
        <a href="">
          <GithubLogo className="card-perfil-social-icon" size={32} />
        </a>
        <a href="">
          <LinkedinLogo className="card-perfil-social-icon" size={32} />
        </a>
        <a href="">
          <InstagramLogo className="card-perfil-social-icon" size={32} />
        </a>
        <a href="">
          <TwitterLogo className="card-perfil-social-icon" size={32} />
        </a>
        <a href="">
          <DiscordLogo className="card-perfil-social-icon" size={32} />
        </a>
        <a href="">
          <WhatsappLogo className="card-perfil-social-icon" size={32} />
        </a>
      </div>
    </div>
  );
}
