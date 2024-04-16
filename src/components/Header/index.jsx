export default function Header () {
  return (
    <header className="fixed top-0 left-0 right-0 flex justify-center 
      items-center bg-green-600 h-16">
      <h1>Reciping</h1>
      <input placeholder="Search Recipes" className="rounded-md"/>
    </header>
  );
}