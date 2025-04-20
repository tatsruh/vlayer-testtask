import { Header } from '../../shared/sections/header/Header';
import { Main } from '../../shared/sections/main/Main';
import { Buildings } from '../../shared/sections/buildings /Buildings';
import { Testimonials } from '../../shared/sections/testimonials/Testimonials';
import { Footer } from '../../shared/sections/footer/Footer';

export default function Home() {
  return (
    <>
      <Header></Header>
      <Main></Main>
      <Buildings></Buildings>
      <Testimonials></Testimonials>
      <Footer></Footer>
    </>
  );
}
