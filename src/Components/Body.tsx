import Post from './Post';

export default function Body() { 
  const posts = [];
  
  for (let i = 0; i < 5; i++) {
    posts.push(<Post key={i} />);
  }

  return (
    <div className='flex flex-col gap-4 w-full'>
      {posts}
    </div>
  );
}
