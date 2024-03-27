import { HStack, Image, Text } from "@chakra-ui/react"; // Import the HStack component from the '@chakra-ui/react' package
import logo from "../assets/logo.webp";
const NavBar = () => {
  return (
    <HStack>
      <Image src={logo} boxSize="60px" />
      <Text>NavBar</Text>
    </HStack>
  );
};

export default NavBar;
