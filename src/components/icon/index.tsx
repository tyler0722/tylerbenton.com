export interface Props extends React.SVGAttributes<SVGSVGElement> {
  iconKey: 'github' | 'rightArrow';
}

const Icon: React.FC<Props> = ({ iconKey, ...props }) => {
  const fileName = `${iconKey.replace(/[A-Z]/g, match => `-${match.toLowerCase()}`)}.svg`;
  const html = require(`./svgs/${fileName}`) as string;
  const viewBox = html.match(/viewBox="([^"]+)"/)?.[1];

  if (viewBox === undefined) {
    throw new Error(`\`viewBox\` attribute does not exist on '${fileName}'`);
  }

  return (
    <svg
      viewBox={viewBox}
      dangerouslySetInnerHTML={{
        __html: html.replace(/<\/?svg(?: [^>]+)?>/gm, ''),
      }}
      {...props}
    />
  );
};

export default Icon;
