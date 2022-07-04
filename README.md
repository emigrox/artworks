# artworks
Recibe una api del museo para mostrar informacion

  <ul>
    {posts.data.map((record, i) => <li key={i}>{record.id} - {record.title} {record.api_link} ---- 
             {"https://www.artic.edu/iiif/2/" + record.image_id +"/full/843,/0/default.jpg" } </li>)}   
        </ul>
        <ul> 
            <img src='https://www.artic.edu/iiif/2/b9064490-e49c-e544-5b0c-1666da8c2b11/full/843,/0/default.jpg' alt='feos' ></img>
        </ul>
        
        fetch api link
https://api.artic.edu/api/v1/artworks?page=2&limit=5



<footer className="text-muted">
  <div className="container">
    <p className="float-right">
      <a href="index.html">Back to top</a>
    </p>
    <p>Album example is &copy; Bootstrap, but please download and customize it for yourself!</p>
    <p>New to Bootstrap? <a href="https://getbootstrap.com/">Visit the homepage</a> or read our <a href="/docs/4.5/getting-started/introduction/">getting started guide</a>.</p>
  </div>
</footer>

  
{jason.data.map((record, i) => 

<Card key={i}>
  <Card.Img variant="top" src={"https://www.artic.edu/iiif/2/" + record.image_id +"/full/843,/0/default.jpg" } />
  <Card.Body>
    <Card.Title>{record.title}</Card.Title>
    <Card.Text>
      
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
)}

export default function App() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    fetch(url)
      .then((response) => {
        if (response.ok) return response.json();
        throw new Error('something went wrong while requesting posts');
      })
      .then((posts) => setPosts(posts))
      .catch((error) => setError(error.message));
  }, []);

  if (error) return <h1>{error}</h1>;

  return <div></div>;
}