import { Box, HStack, Heading, Image, Link } from "native-base";
import React from "react";
import Swiper from "react-native-swiper";

export default function SwiperComponent(props: { data: any; title: string }) {
  //destructuring
  const { data: items, isLoading, isFetching } = props.data;
  return (
    <Box h={300} w={"full"}>
      <HStack alignItems={"center"} justifyContent={"space-between"} px={2}>
        <Heading>{props.title}</Heading>

        <Link color={"red.500"} tintColor={"red.600"}>
          veja mais
        </Link>
      </HStack>
      <Swiper
        showsButtons={true}
        height={250}
        showsPagination={false}
        scrollEnabled={true}
      >
        {isLoading || isFetching ? (
          <Heading>Loading</Heading>
        ) : (
          items
            .filter((item: any, index: number) => index < 10)
            .map((item: any) => <SwiperItem key={item.id} item={item} />)
        )}
      </Swiper>
    </Box>
  );
}


//Swiper item component
const SwiperItem = (props: { item: any }) => {
  return (
    <Box p={2}>
      <Image
        borderRadius={20}
        source={{ uri: props.item.download_url }}
        alt={props.item.author}
        size="xl"
        resizeMode="cover"
        width={"full"}
        height={"full"}
      />
    </Box>
  );
};
