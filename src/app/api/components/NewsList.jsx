export default function NewsList({ news }) {
  return (
    <ul className="list-disc list-inside text-gray-700 space-y-2">
      {news.map(({ id, date, content }) => (
        <li key={id}>
          <span className="font-semibold">{date} </span>
          {content}
        </li>
      ))}
    </ul>
  );
}
