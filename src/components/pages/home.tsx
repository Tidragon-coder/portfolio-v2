import React from 'react';
import { Header } from '../header';
import { Button } from '../atoms/Button';
const Home = () => {
    return (
        <div>
    <Header />
        <div className="flex items-center justify-center h-screen bg-gray-100 pt-[80px]">
      <Button disabled={false}>Hello guys</Button>
    </div>
</div>
    )
}

export default Home;
