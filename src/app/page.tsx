import { Button } from '../../shared/ui/button/Button';
import { IconButton } from '../../shared/ui/icon/IconButton';
import { Tabs } from '../../shared/ui/tab/Tabs';
import { Card } from '../../shared/ui/card/Card';
import img from '../../public/buildings/building2.png';
import { Logo } from '../../shared/ui/logo/Logo';
import { LogoWithName } from '../../shared/sections/header/LogoWithName';
import { Navigation } from '../../shared/ui/navigation/Navigation';
import { Header } from '../../shared/sections/header/Header';
import { Statistics } from '../../shared/ui/statistics/Statistics';
import { Main } from '../../shared/sections/main/Main';

export default function Home() {
  return (
    <>
      <Header></Header>
      <Main></Main>
    </>
  );
}
