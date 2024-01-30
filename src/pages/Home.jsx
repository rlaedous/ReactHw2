import Form from "../components/Form";

function Home({ feed, setFeed }) {
  return (
    <>
      <Form feed={feed} setFeed={setFeed} />
    </>
  );
}

export default Home;
