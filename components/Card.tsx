import { Box, Container } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import { CardProps } from "types";
import CustomBadge from "./Badge";

const Card = ({
  poster,
  title,
  plot,
  released,
  genres,
  runtime,
  onClick,
  type,
}: CardProps) => {
  return (
    <Box
      borderWidth="2px"
      borderRadius="lg"
      display="flex"
      alignItems="center"
      className="cursor-pointer hover:border-blue-500 transition-colors"
    >
      <Container
        display="flex"
        gap="0.75rem"
        className="flex-col !sm:flex-row"
        padding="0.5rem"
        onClick={onClick}
      >
        <div className="flex items-center justify-center">
          <div>
            <Image
              src={
                poster ??
                "https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1156&q=80"
              }
              alt="Movie Poster"
              layout="fixed"
              width={235}
              height={320}
            />
          </div>
        </div>
        <div className="prose-ul:p-0 prose-h2:mt-0 text-lg prose-p:my-2">
          <h2 className="text-2xl mb-2">{title}</h2>
          <p>{runtime} minutes</p>
          <p>{released ? released.toString().slice(0, 4) : "-"}</p>
          <ul className="flex gap-2 prose-li:p-0 prose-li:m-0">
            {genres.map((genre, index) => (
              <li key={index}>
                <CustomBadge text={genre} colorScheme="green" />
              </li>
            ))}
          </ul>

          <h4>Summary</h4>
          <p>{plot.length > 60 ? `${plot.slice(0, 60)}...` : plot}</p>

          <h4>Type</h4>
          <p>{type}</p>
        </div>
      </Container>
    </Box>
  );
};

export default Card;
