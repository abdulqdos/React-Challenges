export default function Post({
  title = "Default Title",
  body = "Default Body",
}) {
  return (
    <div className="border-4 border-primary p-3 text-center">
      <h2 className="text-xl border-b pb-2 border-gray-600 font-semibold">
        {title}
      </h2>
      <p className="text-gray-600 pt-2">{body}</p>
    </div>
  );
}
