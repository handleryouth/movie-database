import { useEffect, useRef, useState } from "react";
import { useQuery } from "@apollo/client";
import { CircularProgress } from "@chakra-ui/react";
import { Card, CustomButton, CustomModal, Navbar } from "components";
import type { NextPage } from "next";
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
  const listData = useRef<MovieProps[]>([]);
  const [, setForceUpdate] = useState(false);

  useEffect(() => {
    if (responseData) {
      listData.current = responseData.getAllMovies;
      setForceUpdate((prevState) => !prevState);
    }
  }, [responseData]);

  return (
    <div>
      <Navbar />

      <main className=" relative">
        <div className="bg-gradient-to-r from-cyan-500 to-blue-500 animate-hue-rotate w-full h-full absolute -z-10" />
        <h1 className=" pt-4 text-center">Movies and Series</h1>
        <div className="flex flex-wrap gap-4 justify-center px-4 max-w-[80rem] mx-auto">
          {!loading ? (
            listData.current.map((movie, index) => (
              <>
                <CustomModal
                  key={index}
                  title={movie.title}
                  directors={movie.directors}
                  body={movie.fullplot}
                  released={movie.released}
                  modalState={idNumber === index}
                  image={movie.poster}
                  onCloseFunction={() => setIdNumber(undefined)}
                />
                <Card
                  key={index}
                  onClick={() => setIdNumber(index)}
                  genres={movie.genres}
                  plot={movie.plot}
                  type={movie.type}
                  poster={movie.poster}
                  released={movie.released}
                  runtime={movie.runtime}
                  title={movie.title}
                />
              </>
            ))
          ) : (
            <CircularProgress isIndeterminate color="green.300" />
          )}
        </div>

        <div className="py-4">
          <CustomButton
            text="Fetch more"
            isLoading={loading}
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
              }).then((fetchMoreResult) => {
                listData.current = [
                  ...listData.current,
                  ...fetchMoreResult.data.getAllMovies,
                ];
                setOffset((prevState) => prevState + 10);
              });
            }}
          />
        </div>
      </main>
    </div>
  );
};

export default Home;
