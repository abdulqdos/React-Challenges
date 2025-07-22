import Post from './Post';

export default function Body() { 
  const data = [
    { title: 'Post 1', body: 'This is the body of post 1' },
    { title: 'Hello World', body: 'Hello React' },
    { title: 'Post 3', body: 'This is the body of post 3' },
    { title: 'CS Master', body: 'CS major' },
    { title: 'Laravel', body: 'Laravel is The best' }
  ]
  
  const items = data.map((item, index) => (
    <Post key={index} title={item.title} body={item.body} />
  ));
  
  return (
    <div className='flex flex-col gap-4 w-full'>
      {items}
    </div>
  );
}
 