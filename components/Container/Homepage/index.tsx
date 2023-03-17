import React, { FC } from 'react';
import 'twin.macro';

const Home: FC = () => {
  return (
    <div tw="min-h-screen w-full flex items-center justify-center">
      <h3 tw="text-xl font-bold">Welcome to homepage!</h3>
    </div>
  );
};

export default Home;
