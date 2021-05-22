import Head from "../src/components/head";
import UpperContent from "../src/components/upper-content";
import DownContent from "../src/components/down-content";
import Footer from "../src/components/footer";



export default function Home() {
  return (
    <>
      <Head />
        <UpperContent />
        <DownContent />
      <Footer />
    </>
  );
}
