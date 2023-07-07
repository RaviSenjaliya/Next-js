export default function student({ params }) {
  console.log(params);
  return (
    <div>
      <h1>name: {params.student}</h1>
    </div>
  );
}
