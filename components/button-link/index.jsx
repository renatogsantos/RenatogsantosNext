export default function ButtonLink({ title, link }) {
  return (
    <>
      <a className="button-link-01" rel="noreferrer" href={link}>
        {title}
      </a>
    </>
  );
}
