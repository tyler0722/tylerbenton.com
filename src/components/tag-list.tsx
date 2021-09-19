import Tag from './tag';

export interface Props extends React.HTMLAttributes<HTMLUListElement> {
  tags: string[];
}

const TagList: React.FC<Props> = ({ tags, ...props }) => (
  <ul {...props}>
    {tags.map(tag => (
      <li className="tag-list__item" key={tag}>
        <Tag>{tag}</Tag>
      </li>
    ))}
  </ul>
);

export default TagList;
