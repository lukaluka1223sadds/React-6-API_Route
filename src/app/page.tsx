import   Container from "./Container-components/container-1/page"
import Reusable1 from "./reusable components/eusable-1/page";

export default function Home() {
  return (
    <div>
        <Reusable1><Container/></Reusable1>
    </div>
  );
}
