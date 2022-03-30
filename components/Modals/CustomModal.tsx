import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import Image from "next/image";

import ModalSection from "./ModalSection";

import { CustomModalProps } from "types";

const CustomModal = ({
  title,
  body,
  onCloseFunction,
  modalState,
  image,
  directors,
  released,
}: CustomModalProps) => {
  return (
    <Modal isOpen={modalState} onClose={onCloseFunction}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader textAlign="center" fontSize="1.5rem" className="prose">
          {title}
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody className="prose">
          {image ? (
            <div className="text-center">
              <Image
                src={image}
                alt="Movie Poster"
                width={200}
                height={350}
                layout="fixed"
              />
            </div>
          ) : (
            <p className="w-full h-[100px] flex items-center justify-center text-center">
              Sorry, this movie has no poster{" "}
            </p>
          )}

          <ModalSection title="Summary" value={body ?? "-"} />
          <ModalSection
            title="Directors"
            value={
              directors.length
                ? directors.map((director, index) => (
                    <p className="my-0" key={index}>
                      {director}
                    </p>
                  ))
                : "-"
            }
          />
          <ModalSection
            title="Year"
            value={released ? released.toString().slice(0, 4) : "-"}
          />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default CustomModal;
