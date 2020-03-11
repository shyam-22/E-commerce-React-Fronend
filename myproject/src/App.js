import React, {Component,useState, useEffect} from 'react';

// //using React Hook
// //no state {} , no setState {}
// //no this.state.count
//no  need to write componentDidMount(),componentDidUpdate()

const App = () => {
  //useState
  const [news,setNews] = useState([])
  const [searchQuery, setSearchQuery] = useState('react')
  const [url,setUrl] = useState('http:/hn.algolia.com/api/v1/search?query=react')
  const [loading, setLoading] = useState(false)
  //fetch news from hacker news api
  const fetchNews = () => {
  //now set loading true in the begining
  setLoading(true)  
    fetch(url)
    .then(result => result.json())
    .then(data => (setNews(data.hits),setLoading(false))) //when we get the data set it back as false
    .catch(error => console.log(error));
  };
  //useEffect
  useEffect(() => {
    fetchNews()
  }, [url]);

  const handleChange = (e) => {
    setSearchQuery(e.target.value)
   };

   const handleSubmit = (e) => {
    e.preventDefault()
    setUrl(`http:/hn.algolia.com/api/v1/search?query=${searchQuery}`)
};

  const showLoading = () => (loading ? <h2>Loading....</h2> : "")

  const searchForm = () => {
    <form onSubmit = {handleSubmit}>
    <input type="text" value ={searchQuery} onChange= {handleChange}/>
    <button>Search</button>
  </form>
  }

  const showAllNews = () => (
    news.map( (n,i) => (
      <p keys={i}> {n,title} </p>
))
  )
  
  return (
    <div>
      <h2>News</h2> 
     {showLoading()}
     {searchForm()}
     {showAllNews()}
      
    </div>
  )
};

// const App = () => {
//   const [count, setCount] = useState(0);
//   //useState hooks return 2 values....currentState value and function that return updated value
//   //useEffect hooks take another function as an argument....no need to write Lifecycle methods like class component

//   useEffect(() => {
//     document.title = `Clicked ${count} times`;
//   })

//   const increment = () => {
//     setCount(count + 1);
//   };

//   return(
//     <div>
//       <h2>counter App</h2>
//       <button onClick = {increment}>Clicked {count} Times</button>
//     </div>
    

//   );

// };




// using useState () we avoid the state, setState, this keyword lengthy process
// using useEffect hook() -- if changes are in state,updates then useEffect will run 


// in class base component we must have to use lifecycle methods----componentDidMount(),DidUpdate()


// class App extends Component{

//   state ={
//     count : 0
//   }
  
//   increment = () => {
//     this.setState({
//       count : this.state.count + 1
//     });
//   };

//   componentDidMount() {
//     document.title = `Clicked ${this.state.count} times`
//   }

//   componentDidUpdate() {
//     document.title = `Clicked ${this.state.count} times`
//   }

//   render(){
//     return (
//       <div>
//         <h2>counter App</h2>
//         <button onClick = {this.increment}>Clicked {this.state.count} Times</button>
//       </div>
//     )
//   }
export default App;