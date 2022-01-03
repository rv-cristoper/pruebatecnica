import React from "react";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Text,
} from "@chakra-ui/react";

export const ModalComponent = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalCloseButton />
        <ModalBody mt="3em">
          <Text>Do you want to confirm your changes?</Text>
        </ModalBody>

        <ModalFooter>
          <Button variant="default" mr={3} onClick={onClose}>
            Cancel
          </Button>
          <Button variant="default" onClick={onClose}>
            Confirm
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
