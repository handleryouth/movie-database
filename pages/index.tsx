import { useState } from "react";

import { useQuery } from "@apollo/client";
import { CircularProgress } from "@chakra-ui/react";
import type { NextPage } from "next";

import { Card, CustomButton, CustomModal } from "components";
import { MovieProps } from "types";
import { QUERY_GET_ALL_MOVIES_THUMBNAILS } from "utils";

const Home: NextPage = () => {
  const [offset, setOffset] = useState(20);
  const [idNumber, setIdNumber] = useState<number>();

  const {
    data: responseData,
    loading,
    fetchMore,
  } = useQuery(QUERY_GET_ALL_MOVIES_THUMBNAILS, {
    variables: {
      offset: 0,
      limit: 10,
    },
  });

  return (
    <main className="relative min-h-screen">
      <div className="bg-gradient-to-r from-cyan-500 to-blue-500 animate-hue-rotate w-full h-full absolute -z-10 " />
      <h1 className=" pt-4 text-center">Movies and Series</h1>

      <div className="flex flex-wrap gap-4 justify-center px-4 max-w-[80rem] mx-auto ">
        {!loading ? (
          (responseData.getAllMovies as MovieProps[]).map((movie, index) => (
            <div key={index}>
              <CustomModal
                title={movie.title}
                directors={movie.directors}
                body={movie.fullplot}
                released={movie.released}
                modalState={idNumber === index}
                image={movie.poster}
                onCloseFunction={() => setIdNumber(undefined)}
              />
              <Card
                onClick={() => setIdNumber(index)}
                genres={movie.genres}
                plot={movie.plot}
                type={movie.type}
                poster={movie.poster}
                released={movie.released}
                runtime={movie.runtime}
                title={movie.title}
              />
            </div>
          ))
        ) : (
          <CircularProgress isIndeterminate color="green.300" />
        )}
      </div>

      <div className="py-4">
        <CustomButton
          text="Fetch more"
          justifyContent="center"
          alignItems="center"
          display="flex"
          width="100%"
          minWidth="200px"
          maxWidth="400px"
          margin="0 auto"
          colorScheme="blackAlpha"
          onClick={() => {
            fetchMore({
              variables: {
                offset: offset,
                limit: 10,
              },
            }).then(() => {
              setOffset((prevState) => prevState + 10);
            });
          }}
        />
      </div>
    </main>
  );
};

export default Home;
