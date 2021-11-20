import axios from "axios";
import { useEffect } from "react";
import { Tile } from "shared/components";

const Index = () => {
  useEffect(() => {
    axios.get("/api/courts");
  }, []);

  return (
    <Tile>
      <p>aa</p>
    </Tile>
  );
};

export default Index;
