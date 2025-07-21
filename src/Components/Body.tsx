import Post from './Post';

export default function Body() { 
  const posts = [];

  const data = [
    { title: 'Post 1', body: 'This is the body of post 1' },
    { title: 'Hello World', body: 'Hello React' },
    { title: 'Post 3', body: 'This is the body of post 3' },
    { title: 'CS Master', body: 'CS major' },
    { title: 'Laravel', body: 'Laravel is The best' }
  ]
  
  for (let i = 0; i < 5; i++) {
    posts.push(<Post key={i} body={data[i].body} title={data[i].title}  />);
  }

  return (
    <div className='flex flex-col gap-4 w-full'>
      {posts}
    </div>
  );
}
