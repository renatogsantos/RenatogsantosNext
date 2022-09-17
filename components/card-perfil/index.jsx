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
        <a
          href="https://github.com/renatogsantos"
          rel="noreferrer"
          target="_blank"
        >
          <GithubLogo className="card-perfil-social-icon-github" size={32} />
        </a>
        <a
          href="https://www.linkedin.com/in/renato-g-santos/"
          rel="noreferrer"
          target="_blank"
        >
          <LinkedinLogo
            className="card-perfil-social-icon-linkedin"
            size={32}
          />
        </a>
        <a
          href="https://www.instagram.com/renatog.designer"
          rel="noreferrer"
          target="_blank"
        >
          <InstagramLogo
            className="card-perfil-social-icon-instagram"
            size={32}
          />
        </a>
        <a
          href="https://twitter.com/hipsterrnt"
          rel="noreferrer"
          target="_blank"
        >
          <TwitterLogo className="card-perfil-social-icon-twitter" size={32} />
        </a>
        <a href="https://discord.gg/HBEKwZ3B" rel="noreferrer" target="_blank">
          <DiscordLogo className="card-perfil-social-icon-discord" size={32} />
        </a>
        <a
          href="https://api.whatsapp.com/send?phone=5511911882402&text=Ol%C3%A1%20Renato,%20pode%20me%20ajudar?"
          rel="noreferrer"
          target="_blank"
        >
          <WhatsappLogo
            className="card-perfil-social-icon-whatsapp"
            size={32}
          />
        </a>
      </div>
    </div>
  );
}
