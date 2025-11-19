import type { MouseEvent } from "react";
import Button from "./components/Button";
import Container from "./components/Container";
import TextCard from "./components/TextCard";
import { HomeIcon } from "lucide-react";
function App() {
  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    console.log("u click", e.target);
  };
  return (
    <main>
      <Container className="bg-red-100 p-5 space-y-5">
        <TextCard
          heading="Learn TS React"
          description="This is learn ts coding practice"
          icon={<HomeIcon />}
        />
        <div className="space-x-5">
          <Button variant="solid" onClick={handleClick}>
            Click Me
          </Button>
        </div>
      </Container>

      <Container className="bg-red-100 p-5 space-y-5">
        <TextCard
          heading="Learn JS"
          description="This is learn JS coding practice"
          icon={<HomeIcon />}
        />
        <div className="space-x-5">
          <Button variant="solid" onClick={handleClick}>
            Click Here
          </Button>
        </div>
      </Container>
    </main>
  );
}

export default App;
